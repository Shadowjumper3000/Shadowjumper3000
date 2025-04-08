
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      detail: "contact@johndoe.com",
      link: "mailto:contact@johndoe.com",
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      detail: "San Francisco, CA",
      link: "https://maps.google.com/?q=San+Francisco",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-navy-light">
      <div className="container mx-auto">
        <h2 className="section-heading">
          <span className="font-mono text-highlight mr-2">04.</span>Get In Touch
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-slate text-lg">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hello, I'll do my best to get back to
            you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.title === "Location" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="bg-navy border border-navy-lightest rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-highlight hover:translate-y-[-5px] focus-ring"
            >
              <div className="bg-navy-lightest p-3 rounded-full mb-4 text-highlight">
                {item.icon}
              </div>
              <h3 className="text-slate-lightest text-lg font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-slate">{item.detail}</p>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Your Name"
                  required
                  className="bg-navy border-navy-lightest focus:border-highlight"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-navy border-navy-lightest focus:border-highlight"
                />
              </div>
            </div>
            <div>
              <Input
                placeholder="Subject"
                required
                className="bg-navy border-navy-lightest focus:border-highlight"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                rows={6}
                required
                className="bg-navy border-navy-lightest focus:border-highlight resize-none"
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="bg-highlight text-navy hover:bg-highlight/90 rounded font-medium px-8 py-6"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
