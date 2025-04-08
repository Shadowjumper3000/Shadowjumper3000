
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-4"
    >
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="font-mono text-highlight mr-2">01.</span>About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-slate mb-4">
              Hello! I'm John, a passionate software developer with a keen interest in creating things that live on the internet. My
              journey in web development began back in 2015 when I decided to try creating a custom Tumblr theme — turns out hacking together a custom
              reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="text-slate mb-4">
              Fast-forward to today, and I've had the privilege of working at 
              <a href="#" className="text-highlight hover:underline mx-1">an advertising agency</a>, 
              <a href="#" className="text-highlight hover:underline mx-1">a start-up</a>, 
              <a href="#" className="text-highlight hover:underline mx-1">a huge corporation</a>, and 
              <a href="#" className="text-highlight hover:underline mx-1">a student-led design studio</a>. 
              My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            <p className="text-slate mb-4">
              I also recently launched a course that covers everything you need to build a web app with the React ecosystem.
            </p>
            <p className="text-slate mb-6">
              When I'm not at the computer, I'm usually rock climbing, playing basketball, or exploring new hiking trails.
            </p>
            
            <h3 className="text-slate-lightest text-lg mb-3">Technologies I've been working with recently:</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "JavaScript (ES6+)",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "TailwindCSS",
              ].map((tech, index) => (
                <li key={index} className="flex items-center text-slate">
                  <span className="text-highlight mr-2">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative mx-auto w-64 h-64 md:w-auto md:h-auto">
            <div className="absolute inset-0 border-2 border-highlight rounded translate-x-5 translate-y-5"></div>
            <div className="relative w-64 h-64 bg-navy-light rounded overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=600"
                alt="John Doe"
                className="w-full h-full object-cover grayscale transition group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-highlight/20 group-hover:opacity-0 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
