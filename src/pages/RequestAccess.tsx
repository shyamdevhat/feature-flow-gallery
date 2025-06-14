
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const RequestAccess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    businessUnit: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual Supabase integration
      console.log('Submitting request:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Request Submitted Successfully!",
        description: "We'll review your request and get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', purpose: '', businessUnit: '' });
    } catch (error) {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Request Access to Our
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}AI Applications
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get exclusive access to our cutting-edge AI and Generative AI applications. 
            Fill out the form below and we'll review your request.
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
              Access Request Form
            </CardTitle>
            <CardDescription className="text-white/60">
              Please provide the following information to request access to our applications.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name *</Label>
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
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
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
                <Label htmlFor="businessUnit" className="text-white">Business Unit *</Label>
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
                <Label htmlFor="purpose" className="text-white">Purpose of Access *</Label>
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
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: CheckCircle,
              title: "Fast Review",
              description: "We review all requests within 24 hours"
            },
            {
              icon: Shield,
              title: "Secure Access",
              description: "Enterprise-grade security for all users"
            },
            {
              icon: Zap,
              title: "Full Support",
              description: "Dedicated support team for approved users"
            }
          ].map((benefit, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 text-center animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="pt-6">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestAccess;
