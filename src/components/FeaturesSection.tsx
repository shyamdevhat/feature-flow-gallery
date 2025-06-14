
import React from "react";
import { icons } from "lucide-react";
import { useFeatures } from "@/hooks/useFeatures";

const FeaturesSection = () => {
  const { data: features, isLoading, error } = useFeatures();

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Our Platform
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Built with cutting-edge technologies and designed for the future of web applications.
          </p>
        </div>

        {isLoading && (
          <div className="text-center text-white/60">Loading features...</div>
        )}
        {error && (
          <div className="text-center text-red-500">Failed to load features.</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(features ?? []).map((feature, index) => {
            const LucideIcon = icons[feature.icon as keyof typeof icons] ?? icons.Rocket;
            return (
              <div
                key={feature.id}
                className={`group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <LucideIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
