import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isActive] = useRoute("/");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Lookbook", href: "#lookbook" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white bg-opacity-95 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-heading font-bold tracking-widest">
          EMMA<span className="text-[#DFA878]">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="nav-link hover:text-[#DFA878]"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1.5"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-full md:w-80 bg-white z-50 pt-20 px-8 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={false}
        animate={mobileMenuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.3, ease: [0.77, 0, 0.175, 1] }}
      >
        <button
          className="absolute top-6 right-8 text-2xl"
          onClick={closeMobileMenu}
          aria-label="Close Menu"
        >
          <X className="h-6 w-6" />
        </button>
        <nav>
          <ul className="space-y-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block font-body text-lg uppercase tracking-widest hover:text-[#DFA878] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-16">
          <p className="font-body text-sm uppercase mb-4">Follow</p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-[#DFA878] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-[#DFA878] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest
            </a>
            <a
              href="#"
              className="hover:text-[#DFA878] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
