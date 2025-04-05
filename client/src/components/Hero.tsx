import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { images } from "@/lib/image-data";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.hero}
          alt="Fashion runway model wearing Emma's design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight max-w-3xl">
            Crafting Tomorrow's Fashion in Amsterdam
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl font-['Cormorant_Garamond'] italic mt-6 max-w-xl">
            Sustainable luxury and timeless elegance for the modern woman
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <button
            onClick={() => scrollToSection("#collections")}
            className="inline-block px-8 py-3 border border-white hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm font-body"
          >
            Explore Collections
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div
          className="animate-bounce w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => scrollToSection("#collections")}
        >
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
