
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  externalLink?: string;
  image: string;
  reverse?: boolean;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform for a fictional clothing brand. Features include product filtering, cart functionality, user authentication, and payment processing integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
      githubLink: "https://github.com",
      externalLink: "https://example.com",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=800",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application that helps users organize tasks, set priorities, and track progress. Includes features like drag-and-drop organization, calendar integration, and customizable categories.",
      technologies: ["TypeScript", "React", "Firebase", "Redux", "Material UI"],
      githubLink: "https://github.com",
      externalLink: "https://example.com",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800",
      reverse: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive weather forecasting application that provides real-time weather data, forecasts, and historical climate information for locations worldwide.",
      technologies: ["JavaScript", "React", "OpenWeather API", "Chart.js", "TailwindCSS"],
      githubLink: "https://github.com",
      externalLink: "https://example.com",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=800",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-navy-light">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="font-mono text-highlight mr-2">02.</span>Some Things I've Built
        </h2>

        <div className="space-y-32 md:space-y-40">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative md:grid md:grid-cols-12 md:items-center gap-4 ${
                project.reverse ? "md:text-right" : ""
              }`}
            >
              {/* Project Image (Desktop) */}
              <div
                className={`hidden md:block md:col-span-7 relative ${
                  project.reverse ? "md:col-start-6" : ""
                }`}
              >
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full h-0 pb-[56.25%] rounded overflow-hidden"
                >
                  <div className="absolute inset-0 bg-highlight/30 hover:bg-transparent z-10 transition-colors duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </a>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-7 md:absolute ${
                  project.reverse
                    ? "md:left-0 md:text-left"
                    : "md:right-0 md:text-right"
                } z-20`}
              >
                <div className="p-6">
                  <p className="font-mono text-highlight text-sm mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold text-slate-lightest mb-4">
                    {project.title}
                  </h3>

                  {/* Project Image (Mobile only) */}
                  <div className="md:hidden w-full h-48 mb-4 rounded overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <Card className="bg-navy shadow-lg mb-4">
                    <CardContent className="p-6">
                      <p className="text-slate">{project.description}</p>
                    </CardContent>
                  </Card>

                  <ul
                    className={`flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm text-slate ${
                      project.reverse ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="font-mono">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex gap-4 text-slate-lightest ${
                      project.reverse ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-highlight focus-ring rounded-full p-1"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-highlight focus-ring rounded-full p-1"
                        aria-label="Live Project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-xl text-slate-lightest mb-6">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <Card
                key={index}
                className="bg-navy-light border border-navy-lightest hover:border-highlight transition-all duration-300 h-full hover:translate-y-[-5px]"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-highlight">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate hover:text-highlight focus-ring rounded-full"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate hover:text-highlight focus-ring rounded-full"
                        aria-label="Live Project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-lightest mb-2">
                    Project {index + 1}
                  </h3>
                  <p className="text-slate mb-4">
                    A small web application that showcases my skills with various technologies and APIs.
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-mono text-slate">
                    <span>React</span>
                    <span>TailwindCSS</span>
                    <span>Node.js</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
