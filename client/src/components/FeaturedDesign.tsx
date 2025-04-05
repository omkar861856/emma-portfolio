import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { images } from "@/lib/image-data";

const FeaturedDesign = () => {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.2 });
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.2 });

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            ref={textRef}
            className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Amsterdam Meets Avant-garde
            </h2>
            <p className="font-['Cormorant_Garamond'] text-lg mt-6 italic text-[#333333]">
              A signature collection that captures the essence of Dutch design heritage
              fused with contemporary influences.
            </p>
            <p className="mt-6 text-[#333333] leading-relaxed">
              Emma's approach to fashion combines architectural precision with fluid
              movement, creating pieces that are both structured and ethereal. Each
              garment is crafted with sustainability in mind, using responsibly sourced
              materials and traditional techniques.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block px-8 py-3 bg-primary text-white hover:bg-[#DFA878] transition-all duration-300 uppercase tracking-widest text-sm font-body"
              >
                Explore Feature
              </a>
            </div>
          </motion.div>

          <motion.div
            ref={imageRef}
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="relative">
              <img
                src={images.featured}
                alt="Featured fashion design by Emma"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 bg-white p-4 md:p-6">
                <p className="font-['Cormorant_Garamond'] text-[#DFA878] text-lg">Design N°42</p>
                <h3 className="font-heading text-xl md:text-2xl mt-1">The Amsterdam Dress</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDesign;
