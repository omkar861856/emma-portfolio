import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock } from "lucide-react";
import { images } from "@/lib/image-data";

const Studio = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.2 });
  
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">The Studio</h2>
          <p className="font-['Cormorant_Garamond'] text-lg mt-4 text-[#333333]">
            Where creativity and craftsmanship converge in the heart of Amsterdam
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.studio.map((image, index) => (
            <StudioImage key={index} image={image} index={index} />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <StudioInfo />
          <StudioVisit />
        </div>
      </div>
    </section>
  );
};

const StudioImage = ({ image, index }: { image: string; index: number }) => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={imageRef}
      className="overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.77, 0, 0.175, 1] }}
    >
      <img
        src={image}
        alt={`Emma's fashion studio in Amsterdam - Image ${index + 1}`}
        className="w-full h-80 object-cover gallery-image"
      />
    </motion.div>
  );
};

const StudioInfo = () => {
  const infoRef = useRef(null);
  const isInfoInView = useInView(infoRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={infoRef}
      initial={{ opacity: 0, x: -30 }}
      animate={isInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl font-heading font-bold">Located in the Jordaan</h3>
      <p className="mt-4 text-[#333333] leading-relaxed">
        Nestled in Amsterdam's historic Jordaan district, Emma's studio occupies
        a renovated 17th-century canal house that blends traditional Dutch
        architecture with contemporary design elements.
      </p>
      <p className="mt-4 text-[#333333] leading-relaxed">
        The space serves as both atelier and showroom, where clients can
        experience the creative process firsthand and collaborate on bespoke
        garments.
      </p>
    </motion.div>
  );
};

const StudioVisit = () => {
  const visitRef = useRef(null);
  const isVisitInView = useInView(visitRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={visitRef}
      className="bg-[#F5F5F5] p-8"
      initial={{ opacity: 0, x: 30 }}
      animate={isVisitInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="text-2xl font-heading font-bold">Studio Visits</h3>
      <p className="mt-4 text-[#333333] leading-relaxed">
        By appointment only
      </p>
      <div className="mt-6 space-y-2">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 mt-1 text-[#DFA878]" />
          <span className="ml-3">
            Prinsengracht 263, 1016 GV
            <br />
            Amsterdam, Netherlands
          </span>
        </div>
        <div className="flex items-start">
          <Clock className="h-5 w-5 mt-1 text-[#DFA878]" />
          <span className="ml-3">
            Tuesday – Friday: 10:00 – 18:00
            <br />
            Saturday: 11:00 – 16:00
          </span>
        </div>
      </div>
      <div className="mt-8">
        <a
          href="#contact"
          className="inline-block px-6 py-2 border border-primary hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-wider text-sm font-body"
          onClick={(e) => {
            e.preventDefault();
            const contactSection = document.querySelector("#contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Book an Appointment
        </a>
      </div>
    </motion.div>
  );
};

export default Studio;
