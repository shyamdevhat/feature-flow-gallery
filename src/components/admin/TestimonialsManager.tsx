
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Star, GripVertical } from "lucide-react";
import { useTestimonials } from "@/hooks/useTestimonials";

const TestimonialsManager = () => {
  const { data: testimonials, isLoading, error } = useTestimonials();

  if (isLoading) {
    return <div className="text-center py-8">Loading testimonials...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error loading testimonials</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Testimonials Management</h2>
          <p className="text-muted-foreground">Manage customer testimonials and reviews</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Testimonial
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Testimonials ({(testimonials || []).length})</CardTitle>
          <CardDescription>
            View and manage all customer testimonials displayed on the homepage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Role & Company</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Sort Order</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(testimonials || []).map((testimonial) => (
                <TableRow key={testimonial.id}>
                  <TableCell>
                    <GripVertical className="w-4 h-4 text-muted-foreground cursor-move" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {testimonial.avatar_url ? (
                        <img
                          src={testimonial.avatar_url}
                          alt={testimonial.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400"></div>
                      )}
                      <span className="font-medium">{testimonial.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-sm">{testimonial.role}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.company}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-1 text-sm text-muted-foreground">
                        {testimonial.rating}/5
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-md truncate">
                    "{testimonial.message}"
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{testimonial.sort_order}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialsManager;
