
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Layers,
  Database,
  LayoutGrid,
  Sparkles,
  GitBranch,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: <Code size={24} />,
      skills: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "TailwindCSS",
        "Redux",
      ],
      color: "bg-blue-500/20 text-blue-500 border-blue-500/60",
    },
    {
      title: "Backend",
      icon: <Layers size={24} />,
      skills: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "REST APIs",
        "GraphQL",
        "PHP",
      ],
      color: "bg-green-500/20 text-green-500 border-green-500/60",
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "Redis",
        "Supabase",
        "Prisma",
      ],
      color: "bg-yellow-500/20 text-yellow-500 border-yellow-500/60",
    },
    {
      title: "Design",
      icon: <LayoutGrid size={24} />,
      skills: [
        "Figma",
        "Adobe XD",
        "UI/UX Design",
        "Responsive Design",
        "Design Systems",
        "Prototyping",
        "Wireframing",
      ],
      color: "bg-purple-500/20 text-purple-500 border-purple-500/60",
    },
    {
      title: "Tools & Practices",
      icon: <GitBranch size={24} />,
      skills: [
        "Git & GitHub",
        "Docker",
        "AWS",
        "CI/CD",
        "Agile/Scrum",
        "Jest",
        "Playwright",
      ],
      color: "bg-red-500/20 text-red-500 border-red-500/60",
    },
    {
      title: "Other",
      icon: <Sparkles size={24} />,
      skills: [
        "SEO",
        "Accessibility",
        "Performance Optimization",
        "Technical Writing",
        "Problem Solving",
        "Team Leadership",
        "Project Management",
      ],
      color: "bg-teal-500/20 text-teal-500 border-teal-500/60",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="font-mono text-highlight mr-2">03.</span>Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-navy-light border border-navy-lightest hover:border-highlight transition-all duration-300 h-full"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-lightest">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start">
                      <span className="text-highlight mr-2 mt-1">▹</span>
                      <span className="text-slate">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
