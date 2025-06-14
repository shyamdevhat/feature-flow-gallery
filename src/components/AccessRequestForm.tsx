
import React, { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const AccessRequestForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    businessUnit: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting request:", formData);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast({
        title: "Request Submitted Successfully!",
        description: "We'll review your request and get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", purpose: "", businessUnit: "" });
    } catch {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-white/10 border-white/20 text-white placeholder-white/50"
            placeholder="Enter your full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-white/10 border-white/20 text-white placeholder-white/50"
            placeholder="your.email@company.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="businessUnit" className="text-white">
          Business Unit *
        </Label>
        <Input
          id="businessUnit"
          name="businessUnit"
          value={formData.businessUnit}
          onChange={handleInputChange}
          required
          className="bg-white/10 border-white/20 text-white placeholder-white/50"
          placeholder="e.g., Engineering, Marketing, Sales, etc."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="purpose" className="text-white">
          Purpose of Access *
        </Label>
        <Textarea
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleInputChange}
          required
          rows={4}
          className="bg-white/10 border-white/20 text-white placeholder-white/50"
          placeholder="Please describe how you plan to use our AI applications and any specific requirements..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 text-white py-3 text-lg font-semibold"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Submitting Request...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Submit Access Request
          </>
        )}
      </Button>
    </form>
  );
};

export default AccessRequestForm;
