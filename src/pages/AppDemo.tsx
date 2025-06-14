
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Info, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AppDemo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getDemoContent = (appId: string) => {
    switch (appId) {
      case '1':
        return {
          title: 'TaskFlow Pro Demo',
          description: 'Interactive project management dashboard',
          demoUrl: 'https://taskflow-demo.example.com',
          features: ['Create projects', 'Assign tasks', 'Track progress', 'AI insights']
        };
      case '2':
        return {
          title: 'DataViz Studio Demo',
          description: 'Interactive data visualization playground',
          demoUrl: 'https://dataviz-demo.example.com',
          features: ['Upload datasets', 'Create charts', 'ML predictions', 'Export visualizations']
        };
      case '3':
        return {
          title: 'SecureConnect Demo',
          description: 'Secure communication platform',
          demoUrl: 'https://secureconnect-demo.example.com',
          features: ['End-to-end chat', 'Video calls', 'File sharing', 'Group conversations']
        };
      case '4':
        return {
          title: 'CloudDeploy Demo',
          description: 'Cloud deployment dashboard',
          demoUrl: 'https://clouddeploy-demo.example.com',
          features: ['Deploy apps', 'Monitor performance', 'Auto-scaling', 'CI/CD pipelines']
        };
      case '5':
        return {
          title: 'MobileFirst Demo',
          description: 'Cross-platform mobile development',
          demoUrl: 'https://mobilefirst-demo.example.com',
          features: ['Code once, deploy everywhere', 'Live preview', 'Hot reload', 'Native performance']
        };
      case '6':
        return {
          title: 'CodeStudio Demo',
          description: 'Collaborative coding environment',
          demoUrl: 'https://codestudio-demo.example.com',
          features: ['AI code completion', 'Live collaboration', 'Multi-language support', 'Integrated debugging']
        };
      default:
        return null;
    }
  };

  const demo = getDemoContent(id || '');

  if (!demo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Demo Not Found</h2>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate(`/app/${id}`)}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Details
          </Button>
          <div className="flex gap-4">
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Info className="w-4 h-4 mr-2" />
              Demo Info
            </Button>
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Full Screen
            </Button>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{demo.title}</h1>
          <p className="text-white/70">{demo.description}</p>
        </div>

        {/* Demo Features */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Demo Features</CardTitle>
            <CardDescription className="text-white/70">
              Try out these key features in the interactive demo below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {demo.features.map((feature, i) => (
                <div key={i} className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mx-auto mb-2"></div>
                  <p className="text-white/80 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Demo Frame */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 min-h-[600px] flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white/40 rounded-full animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Interactive Demo</h3>
              <p className="text-white/70 mb-6 max-w-md mx-auto">
                This is a placeholder for the interactive demo. In a real implementation, 
                this would be an embedded application or iframe.
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 text-white">
                  Start Demo
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Watch Tutorial
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Instructions */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 mt-8">
          <CardHeader>
            <CardTitle className="text-white">How to Use This Demo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-white/70">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <p>Click "Start Demo" to begin the interactive experience</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <p>Explore the features listed above to get a comprehensive understanding</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                  3
                </div>
                <p>Use the tutorial if you need guidance on specific features</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                  4
                </div>
                <p>Contact us if you'd like to implement this solution for your organization</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AppDemo;
