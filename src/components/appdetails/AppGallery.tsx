import React, { useRef } from "react";
import { Image, File as FileIcon, UploadCloud, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useAppAttachments, useAttachmentUpload } from "@/hooks/useAppAttachments";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PREVIEWABLE = ["image/", "video/"];

function isPreviewable(mime: string | null): boolean {
  return !!mime && PREVIEWABLE.some((p) => mime.startsWith(p));
}

interface AppGalleryProps {
  applicationId: string;
  gradient?: string | null;
  hideUpload?: boolean;
}

const AppGallery: React.FC<AppGalleryProps> = ({ applicationId, hideUpload }) => {
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
      <div className="p-6 pb-2">
        <h3 className="text-xl font-bold text-white mb-1">
          Architecture & Attachments Gallery
        </h3>
        <p className="text-white/60 text-sm">
          View uploaded images, diagrams, or docs for this application.
        </p>
      </div>
      <div className="p-6 pt-2">
        {error && <div className="text-red-400">Failed to load attachments.</div>}
        {!attachments || attachments.length === 0 ? (
          <div className="text-white/60 py-8 text-center">
            No attachments yet.
          </div>
        ) : (
          <Carousel>
            <CarouselContent>
              {attachments.map((att) => (
                <CarouselItem key={att.id}>
                  <div className="relative group bg-white/10 rounded-lg overflow-hidden shadow flex flex-col h-full">
                    <div className="aspect-w-1 aspect-h-1 flex items-center justify-center bg-slate-900/40">
                      {isPreviewable(att.file_type) ? (
                        att.file_type?.startsWith("image/") ? (
                          <img
                            src={att.file_url}
                            alt={att.file_name}
                            className="object-contain w-full h-64 bg-black/10 cursor-pointer"
                            onClick={() => window.open(att.file_url, "_blank")}
                          />
                        ) : att.file_type?.startsWith("video/") ? (
                          <video
                            src={att.file_url}
                            controls
                            className="object-contain w-full h-64 bg-black/10 cursor-pointer"
                            onClick={() => window.open(att.file_url, "_blank")}
                          />
                        ) : null
                      ) : (
                        <div
                          className="flex flex-col items-center justify-center w-full h-64 cursor-pointer"
                          onClick={() => window.open(att.file_url, "_blank")}
                        >
                          <FileIcon className="w-10 h-10 text-white/50 mb-2" />
                          <span className="text-xs text-white/60">
                            {att.file_name}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-3 flex flex-col gap-1 items-center">
                      <div className="text-xs font-medium text-white whitespace-nowrap overflow-ellipsis overflow-hidden">
                        {att.file_name}
                      </div>
                      <Badge variant="secondary" className="bg-white/10 text-white/60">
                        {att.file_type || "unknown"}
                      </Badge>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </Card>
  );
};

export default AppGallery;
