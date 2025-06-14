
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "AI Research Director",
    company: "TechCorp Inc.",
    rating: 5,
    message: "The AI applications showcase incredible innovation. TaskFlow Pro has transformed our project management workflow, increasing productivity by 45%.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b3be?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Engineering Manager",
    company: "DataSoft Solutions",
    rating: 5,
    message: "DataViz Studio's machine learning integration is phenomenal. We can now visualize complex datasets and generate insights in real-time.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "CTO",
    company: "SecureNet Corp",
    rating: 5,
    message: "SecureConnect has revolutionized our internal communications. The end-to-end encryption gives us complete confidence in our data security.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Kim",
    role: "DevOps Lead",
    company: "CloudTech Innovations",
    rating: 5,
    message: "CloudDeploy has simplified our deployment process dramatically. What used to take hours now takes minutes with zero downtime.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Product Manager",
    company: "Mobile Dynamics",
    rating: 5,
    message: "MobileFirst framework allowed us to launch our app on both iOS and Android simultaneously. The native performance is outstanding.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "Senior Developer",
    company: "CodeCraft Studios",
    rating: 5,
    message: "CodeStudio's AI completion feature has doubled my coding speed. The collaborative features make pair programming seamless.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Users
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Say
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Real feedback from real users who are transforming their workflows with our AI applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                    <p className="text-white/50 text-xs">{testimonial.company}</p>
                  </div>
                  <Quote className="w-6 h-6 text-cyan-400/50" />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-white/70 text-sm leading-relaxed">
                  "{testimonial.message}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
