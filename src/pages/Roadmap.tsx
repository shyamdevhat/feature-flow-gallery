
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, CheckCircle, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const roadmapData = [
  {
    quarter: "Q1 2024",
    status: "completed",
    features: [
      {
        title: "TaskFlow Pro Launch",
        description: "AI-powered project management with real-time collaboration",
        status: "completed"
      },
      {
        title: "DataViz Studio",
        description: "Interactive data visualization with ML capabilities",
        status: "completed"
      },
      {
        title: "SecureConnect",
        description: "End-to-end encrypted communication platform",
        status: "completed"
      }
    ]
  },
  {
    quarter: "Q2 2024",
    status: "in-progress",
    features: [
      {
        title: "CloudDeploy",
        description: "Automated deployment and scaling solution",
        status: "completed"
      },
      {
        title: "MobileFirst Framework",
        description: "Cross-platform mobile development with native performance",
        status: "in-progress"
      },
      {
        title: "CodeStudio",
        description: "Collaborative IDE with AI code completion",
        status: "in-progress"
      }
    ]
  },
  {
    quarter: "Q3 2024",
    status: "planned",
    features: [
      {
        title: "AI Analytics Suite",
        description: "Advanced analytics with predictive modeling",
        status: "planned"
      },
      {
        title: "Voice Assistant Integration",
        description: "Natural language interface for all applications",
        status: "planned"
      },
      {
        title: "Blockchain Integration",
        description: "Secure and transparent data management",
        status: "planned"
      }
    ]
  },
  {
    quarter: "Q4 2024",
    status: "planned",
    features: [
      {
        title: "Quantum Computing Ready",
        description: "Prepare applications for quantum computing integration",
        status: "planned"
      },
      {
        title: "Advanced AI Models",
        description: "Integration with latest GPT and custom AI models",
        status: "planned"
      },
      {
        title: "Global Expansion",
        description: "Multi-region deployment and localization",
        status: "planned"
      }
    ]
  }
];

const statusConfig = {
  completed: { color: "bg-green-500", icon: CheckCircle, label: "Completed" },
  "in-progress": { color: "bg-yellow-500", icon: Clock, label: "In Progress" },
  planned: { color: "bg-blue-500", icon: Star, label: "Planned" }
};

const Roadmap = () => {
  const navigate = useNavigate();

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

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Product
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Roadmap
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our journey towards building the future of AI applications. 
            Track our progress and upcoming features.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {roadmapData.map((quarter, quarterIndex) => (
              <div key={quarter.quarter} className="relative animate-fade-in" style={{ animationDelay: `${quarterIndex * 200}ms` }}>
                {/* Quarter marker */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full ${statusConfig[quarter.status].color} flex items-center justify-center z-10 relative`}>
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-2xl font-bold text-white">{quarter.quarter}</h2>
                    <Badge variant="secondary" className={`${statusConfig[quarter.status].color} text-white`}>
                      {statusConfig[quarter.status].label}
                    </Badge>
                  </div>
                </div>
                
                {/* Features */}
                <div className="ml-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quarter.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                          <div className={`w-3 h-3 rounded-full ${statusConfig[feature.status].color}`}></div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/70">
                          {feature.description}
                        </CardDescription>
                        <div className="mt-4">
                          <Badge variant="outline" className={`text-xs ${statusConfig[feature.status].color.replace('bg-', 'border-')} text-white border-opacity-50`}>
                            <statusConfig[feature.status].icon className="w-3 h-3 mr-1" />
                            {statusConfig[feature.status].label}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Have Ideas for Our Roadmap?</h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                We value community feedback! Share your suggestions and help shape the future of our AI applications.
              </p>
              <Button 
                onClick={() => navigate('/feedback')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 text-white"
              >
                Share Your Feedback
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
