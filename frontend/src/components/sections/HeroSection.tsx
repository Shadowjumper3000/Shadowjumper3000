
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 pb-32 px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto md:mx-0">
          <p className="font-mono text-highlight mb-5 opacity-0 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-lightest mb-4 opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
            John Doe.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 opacity-0 animate-fade-in" style={{animationDelay: "0.3s"}}>
            I build things for the web.
          </h2>
          <p className="text-slate text-lg max-w-xl mb-12 opacity-0 animate-fade-in" style={{animationDelay: "0.4s"}}>
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{animationDelay: "0.5s"}}>
            <Button asChild className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10 rounded font-medium text-base">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild className="bg-highlight text-navy hover:bg-highlight/90 rounded font-medium text-base">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDownToLine className="text-highlight" size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
