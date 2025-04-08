
import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, href: "https://github.com" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, href: "https://linkedin.com" },
    { name: "Twitter", icon: <Twitter size={20} />, href: "https://twitter.com" },
    { name: "Email", icon: <Mail size={20} />, href: "mailto:email@example.com" },
  ];

  return (
    <footer className="py-10 bg-navy-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-slate hover:text-highlight transition-colors duration-200 focus-ring rounded-full p-2"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="text-slate text-sm text-center">
            <p className="mb-2">
              Designed & Built with <span className="text-highlight">❤</span>
            </p>
            <p>&copy; {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
