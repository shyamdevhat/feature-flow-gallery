
import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTestimonials } from "@/hooks/useTestimonials";

const TestimonialsSection = () => {
  const { data: testimonials, isLoading, error } = useTestimonials();

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

        {isLoading && (
          <div className="text-center text-white/60">Loading testimonials...</div>
        )}
        {error && (
          <div className="text-center text-red-500">Failed to load testimonials.</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(testimonials ?? []).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {testimonial.avatar_url ? (
                    <img
                      src={testimonial.avatar_url}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 mr-4"></div>
                  )}
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
