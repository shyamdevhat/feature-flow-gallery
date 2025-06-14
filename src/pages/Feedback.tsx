
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Feedback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    rating: 0,
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFeedback(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating: number) => {
    setFeedback(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual Supabase integration
      console.log('Submitting feedback:', feedback);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Feedback Submitted!",
        description: "Thank you for your valuable feedback. We appreciate your input!",
      });
      
      // Reset form
      setFeedback({ name: '', email: '', rating: 0, message: '', category: 'general' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
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
            Share Your
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Feedback
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Your feedback helps us improve our AI applications and build better experiences for everyone.
          </p>
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              Feedback Form
            </CardTitle>
            <CardDescription className="text-white/60">
              Please share your thoughts, suggestions, or report any issues you've encountered.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={feedback.name}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                    placeholder="Your name (optional)"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={feedback.email}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                    placeholder="your.email@example.com (optional)"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-white">Category</Label>
                <select
                  name="category"
                  value={feedback.category}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2"
                >
                  <option value="general" className="bg-slate-800">General Feedback</option>
                  <option value="bug" className="bg-slate-800">Bug Report</option>
                  <option value="feature" className="bg-slate-800">Feature Request</option>
                  <option value="ui" className="bg-slate-800">UI/UX Feedback</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-white">Rating</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      className={`transition-all duration-200 ${
                        star <= feedback.rating 
                          ? 'text-yellow-400 scale-110' 
                          : 'text-white/30 hover:text-yellow-400'
                      }`}
                    >
                      <Star className="w-8 h-8 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={feedback.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  placeholder="Please share your feedback, suggestions, or describe any issues you've encountered..."
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
                    Submitting Feedback...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Feedback
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Feedback;
