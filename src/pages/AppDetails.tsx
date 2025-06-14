import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Github, ExternalLink, CheckCircle, Zap, Database, Code, Globe, Smartphone, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const apps = [
  {
    id: 1,
    title: "TaskFlow Pro",
    description: "Advanced project management with AI-powered insights and real-time collaboration.",
    tech: ["React", "Python", "MongoDB", "FastAPI", "WebSocket"],
    features: ["AI Analytics", "Real-time Sync", "Team Collaboration", "Custom Workflows", "Time Tracking"],
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    objective: "Revolutionize project management by combining AI-powered insights with seamless team collaboration to boost productivity by 40%.",
    architecture: "Microservices architecture with React frontend, Python FastAPI backend, MongoDB for data persistence, and Redis for caching.",
    benefits: [
      "40% increase in team productivity",
      "Real-time collaboration across time zones",
      "AI-powered project insights and predictions",
      "Automated workflow optimization",
      "Comprehensive time tracking and reporting"
    ],
    gettingStarted: [
      "Clone the repository from GitHub",
      "Install dependencies with npm install",
      "Set up MongoDB connection",
      "Configure environment variables",
      "Run the development server"
    ]
  },
  {
    id: 2,
    title: "DataViz Studio",
    description: "Interactive data visualization platform with machine learning capabilities.",
    tech: ["React", "Python", "MongoDB", "D3.js", "Scikit-learn"],
    features: ["ML Integration", "Custom Charts", "Export Tools", "Real-time Updates", "Collaboration"],
    icon: Database,
    gradient: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    objective: "Transform raw data into actionable insights through interactive visualizations powered by machine learning algorithms.",
    architecture: "Data pipeline with React frontend, Python backend using Pandas/Scikit-learn, MongoDB for data storage, and D3.js for visualizations.",
    benefits: [
      "60% faster data analysis",
      "Interactive and customizable charts",
      "Machine learning predictions",
      "Real-time data updates",
      "Collaborative data exploration"
    ],
    gettingStarted: [
      "Install Python dependencies",
      "Set up data connections",
      "Configure visualization templates",
      "Import sample datasets",
      "Start creating visualizations"
    ]
  },
  {
    id: 3,
    title: "SecureConnect",
    description: "Next-generation secure communication platform with end-to-end encryption.",
    tech: ["React", "Python", "MongoDB", "WebRTC", "Cryptography"],
    features: ["E2E Encryption", "Video Calls", "File Sharing", "Group Chat", "Screen Sharing"],
    icon: Shield,
    gradient: "from-green-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    objective: "Provide military-grade secure communication for businesses and individuals with zero-knowledge architecture.",
    architecture: "Decentralized architecture with React frontend, Python backend, WebRTC for P2P communication, and MongoDB for metadata storage.",
    benefits: [
      "End-to-end encryption for all communications",
      "Zero-knowledge architecture",
      "High-quality video and audio calls",
      "Secure file sharing up to 5GB",
      "Cross-platform compatibility"
    ],
    gettingStarted: [
      "Create secure account",
      "Verify identity",
      "Install desktop/mobile app",
      "Generate encryption keys",
      "Start secure conversations"
    ]
  },
  {
    id: 4,
    title: "CloudDeploy",
    description: "Automated deployment and scaling solution for modern web applications.",
    tech: ["React", "Python", "MongoDB", "Docker", "Kubernetes"],
    features: ["Auto Scaling", "CI/CD Pipeline", "Monitoring", "Load Balancing", "Health Checks"],
    icon: Globe,
    gradient: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
    objective: "Simplify cloud deployment and scaling with automated DevOps practices and intelligent resource management.",
    architecture: "Cloud-native architecture with React dashboard, Python orchestration engine, MongoDB for configuration, Docker containers, and Kubernetes orchestration.",
    benefits: [
      "95% reduction in deployment time",
      "Automated scaling based on demand",
      "Zero-downtime deployments",
      "Comprehensive monitoring and alerts",
      "Cost optimization through intelligent scaling"
    ],
    gettingStarted: [
      "Connect cloud provider account",
      "Configure deployment pipeline",
      "Set up monitoring rules",
      "Deploy first application",
      "Monitor and optimize performance"
    ]
  },
  {
    id: 5,
    title: "MobileFirst",
    description: "Cross-platform mobile development framework with native performance.",
    tech: ["React Native", "Python", "MongoDB", "Firebase", "Redux"],
    features: ["Native Performance", "Cross Platform", "Hot Reload", "Push Notifications", "Offline Support"],
    icon: Smartphone,
    gradient: "from-indigo-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    objective: "Enable rapid cross-platform mobile development with native performance and seamless user experience.",
    architecture: "Hybrid architecture with React Native frontend, Python backend APIs, MongoDB for data storage, and Firebase for real-time features.",
    benefits: [
      "Single codebase for iOS and Android",
      "Native performance on both platforms",
      "Rapid development and deployment",
      "Real-time synchronization",
      "Offline-first architecture"
    ],
    gettingStarted: [
      "Install React Native CLI",
      "Set up development environment",
      "Create new project",
      "Configure backend connection",
      "Build and deploy to devices"
    ]
  },
  {
    id: 6,
    title: "CodeStudio",
    description: "Collaborative IDE with AI code completion and real-time pair programming.",
    tech: ["React", "Python", "MongoDB", "WebSocket", "OpenAI API"],
    features: ["AI Completion", "Live Collaboration", "Multi-language", "Git Integration", "Debugging"],
    icon: Code,
    gradient: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=600&fit=crop",
    objective: "Revolutionize software development with AI-powered coding assistance and seamless team collaboration.",
    architecture: "Real-time collaborative architecture with React frontend, Python backend, WebSocket for live editing, MongoDB for project storage, and AI integration.",
    benefits: [
      "50% faster code development",
      "AI-powered code suggestions",
      "Real-time collaborative editing",
      "Integrated debugging and testing",
      "Support for 20+ programming languages"
    ],
    gettingStarted: [
      "Create developer account",
      "Install browser extension",
      "Connect to Git repository",
      "Set up AI preferences",
      "Start collaborative coding"
    ]
  }
];

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = apps.find(a => a.id === parseInt(id || '0'));

  if (!app) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Application Not Found</h2>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  // Sample testimonials for each app
  const appTestimonials = {
    1: [
      { name: "Sarah Chen", role: "Project Manager", rating: 5, comment: "TaskFlow Pro transformed our team's productivity!" },
      { name: "Mike Johnson", role: "Team Lead", rating: 5, comment: "The AI insights are incredibly accurate and helpful." }
    ],
    2: [
      { name: "Dr. Emily Watson", role: "Data Scientist", rating: 5, comment: "DataViz Studio makes complex data visualization effortless." },
      { name: "Alex Rodriguez", role: "Analyst", rating: 5, comment: "The ML integration is phenomenal for predictive analytics." }
    ],
    3: [
      { name: "Marcus Lee", role: "Security Officer", rating: 5, comment: "SecureConnect provides unmatched encryption and security." },
      { name: "Lisa Thompson", role: "IT Director", rating: 5, comment: "Our team communications have never been more secure." }
    ],
    4: [
      { name: "David Kim", role: "DevOps Engineer", rating: 5, comment: "CloudDeploy reduced our deployment time by 95%!" },
      { name: "Jennifer Brown", role: "Platform Engineer", rating: 5, comment: "Automated scaling works flawlessly under high load." }
    ],
    5: [
      { name: "Robert Taylor", role: "Mobile Developer", rating: 5, comment: "MobileFirst framework delivers true native performance." },
      { name: "Anna Wilson", role: "Product Manager", rating: 5, comment: "Cross-platform development has never been easier." }
    ],
    6: [
      { name: "Chris Anderson", role: "Senior Developer", rating: 5, comment: "CodeStudio's AI completion doubles my coding speed." },
      { name: "Rachel Green", role: "Software Engineer", rating: 5, comment: "Real-time collaboration features are game-changing." }
    ]
  };

  const testimonials = appTestimonials[app.id] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Showcase
          </Button>
          <div className="flex gap-4">
            <Button 
              onClick={() => navigate(`/app/${app.id}/demo`)}
              className={`bg-gradient-to-r ${app.gradient} hover:opacity-90 text-white`}
            >
              <Play className="w-4 h-4 mr-2" />
              Launch App
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${app.gradient} text-white mb-6`}>
            <app.icon className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {app.title}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            {app.description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {app.tech.map((tech, i) => (
              <Badge key={i} variant="secondary" className="bg-white/10 text-white/80">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-16">
          <img 
            src={app.image} 
            alt={app.title}
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Objective */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${app.gradient} flex items-center justify-center`}>
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70">{app.objective}</p>
            </CardContent>
          </Card>

          {/* Architecture */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${app.gradient} flex items-center justify-center`}>
                  <Database className="w-4 h-4 text-white" />
                </div>
                Architecture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70">{app.architecture}</p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${app.gradient} flex items-center justify-center`}>
                <Zap className="w-4 h-4 text-white" />
              </div>
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {app.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${app.gradient}`}></div>
                  {benefit}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${app.gradient} flex items-center justify-center`}>
                <Code className="w-4 h-4 text-white" />
              </div>
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {app.gettingStarted.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${app.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5`}>
                    {i + 1}
                  </div>
                  <p className="text-white/70">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Testimonials Section */}
        {testimonials.length > 0 && (
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-16">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${app.gradient} flex items-center justify-center`}>
                  <Star className="w-4 h-4 text-white" />
                </div>
                User Testimonials
              </CardTitle>
              <CardDescription className="text-white/60">
                Real feedback from users who are already using {app.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, i) => (
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
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-white/70 mb-6">
              Experience the power of {app.title} and transform your workflow today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate(`/app/${app.id}/demo`)}
                className={`bg-gradient-to-r ${app.gradient} hover:opacity-90 text-white`}
              >
                <Play className="w-5 h-5 mr-2" />
                Launch Application
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/request-access')}
                className="border-white/30 text-white hover:bg-white/10"
              >
                Request Access
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Github className="w-5 h-5 mr-2" />
                View Source Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
