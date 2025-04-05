import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import FeaturedDesign from "@/components/FeaturedDesign";
import About from "@/components/About";
import Studio from "@/components/Studio";
import Lookbook from "@/components/Lookbook";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    // Set document title
    document.title = "Emma van der Meer | Fashion Designer | Amsterdam";
    
    // Handle anchor links in URL on page load
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };
    
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Collections />
      <FeaturedDesign />
      <About />
      <Studio />
      <Lookbook />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Home;
