
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AppShowcase
            </h3>
            <p className="text-white/70 mt-2">
              Showcasing the future of web applications
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Twitter className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50">
            © 2024 AppShowcase. Built with React, Python, and MongoDB.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
