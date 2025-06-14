
import React, { useRef } from "react";
import { Image, File as FileIcon, UploadCloud, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useAppAttachments, useAttachmentUpload } from "@/hooks/useAppAttachments";

const PREVIEWABLE = ["image/", "video/"];

function isPreviewable(mime: string | null): boolean {
  return !!mime && PREVIEWABLE.some(p => mime.startsWith(p));
}

interface AppGalleryProps {
  applicationId: string;
  gradient?: string | null;
}

const AppGallery: React.FC<AppGalleryProps> = ({ applicationId }) => {
  const { data: attachments, isLoading, error } = useAppAttachments(applicationId);
  const uploadMutation = useAttachmentUpload(applicationId);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadMutation.mutate(file, {
        onSuccess: () => toast({ title: "Attachment uploaded" }),
        onError: () => toast({ title: "Upload failed", description: "Check your connection or file type." }),
      });
      e.target.value = "";
    }
  };

  const openFileDialog = () => fileInputRef.current?.click();

  if (isLoading) {
    return (
      <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-12">
        <div className="p-8 text-white/70 text-center">Loading attachments…</div>
      </Card>
    );
  }

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-12">
      <div className="p-6 pb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Architecture & Attachments Gallery</h3>
          <p className="text-white/60 text-sm">View uploaded images, diagrams, or docs for this application.</p>
        </div>
        <div>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleUpload}
            accept="image/*,application/pdf,.doc,.docx,.ppt,.pptx"
          />
          <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white" onClick={openFileDialog}>
            <UploadCloud className="w-4 h-4 mr-2" />
            Upload Attachment
          </Button>
        </div>
      </div>
      <div className="p-6 pt-2">
        {error && <div className="text-red-400">Failed to load attachments.</div>}
        {!attachments || attachments.length === 0 ? (
          <div className="text-white/60 py-8 text-center">No attachments yet.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {attachments.map(att => (
              <div key={att.id} className="relative group bg-white/10 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <div className="aspect-w-1 aspect-h-1 flex items-center justify-center bg-slate-900/40">
                  {isPreviewable(att.file_type) ? (
                    <img
                      src={att.file_url}
                      alt={att.file_name}
                      className="object-contain w-full h-32 bg-black/10"
                      onClick={() => window.open(att.file_url, "_blank")}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <FileIcon className="w-10 h-10 text-white/50 mx-auto my-8" />
                  )}
                </div>
                <div className="p-3 flex flex-col gap-1">
                  <div className="text-xs font-medium text-white whitespace-nowrap overflow-ellipsis overflow-hidden">{att.file_name}</div>
                  <Badge variant="secondary" className="bg-white/10 text-white/60">{att.file_type || 'unknown'}</Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 hover:bg-white/20"
                    onClick={() => window.open(att.file_url, "_blank")}
                    title="Download"
                  >
                    <Download className="w-4 h-4 text-white" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default AppGallery;
