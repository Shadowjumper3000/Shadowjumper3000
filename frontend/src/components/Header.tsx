
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when mobile menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy bg-opacity-90 backdrop-blur-sm shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className="text-highlight text-3xl font-mono font-bold focus-ring rounded"
        >
          P.
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="nav-link"
                >
                  <span className="text-highlight font-mono mr-1">{`0${index + 1}.`}</span>
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Button className="border border-highlight text-highlight bg-transparent hover:bg-highlight/10 rounded font-medium">
                Resume
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-highlight focus-ring rounded p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-navy-light bg-opacity-95 z-40 md:hidden backdrop-blur-sm transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col justify-center items-center`}
      >
        <nav className="w-full">
          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <li key={item.name} className="w-full text-center">
                <a
                  href={item.href}
                  className="text-xl block py-2 text-slate-light hover:text-highlight"
                  onClick={closeMenu}
                >
                  <div className="text-highlight font-mono mb-1">{`0${index + 1}.`}</div>
                  {item.name}
                </a>
              </li>
            ))}
            <li className="w-full text-center pt-4">
              <Button 
                className="border border-highlight text-highlight bg-transparent hover:bg-highlight/10 rounded font-medium"
                onClick={closeMenu}
              >
                Resume
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
