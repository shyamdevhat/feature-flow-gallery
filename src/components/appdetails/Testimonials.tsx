
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  comment: string;
}

interface TestimonialsProps {
  appTitle: string;
}

const demoTestimonials: Testimonial[] = [
  {
    name: "Chris Anderson",
    role: "Senior Developer",
    rating: 5,
    comment: "This app's AI completion doubles my coding speed."
  },
  {
    name: "Rachel Green",
    role: "Software Engineer",
    rating: 5,
    comment: "Real-time collaboration features are game-changing."
  }
];
const Testimonials: React.FC<TestimonialsProps> = ({ appTitle }) => (!demoTestimonials.length ? null : (
  <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
    <CardHeader>
      <CardTitle className="text-white flex items-center gap-2">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center`}>
          <Star className="w-4 h-4 text-white" />
        </div>
        User Testimonials
      </CardTitle>
      <CardDescription className="text-white/60">
        Real feedback from users who are already using {appTitle}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demoTestimonials.map((testimonial, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="flex items-center mb-3">
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-white/70 mb-3 italic">"{testimonial.comment}"</p>
            <div className="text-sm">
              <p className="text-white font-medium">{testimonial.name}</p>
              <p className="text-white/50">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
));

export default Testimonials;
