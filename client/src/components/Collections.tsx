import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { images } from "@/lib/image-data";

const CollectionItem = ({ collection, index }: { collection: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="collection-item group relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.77, 0, 0.175, 1]
      }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={collection.url}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="collection-overlay opacity-0 absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 transition-opacity duration-300">
        <h3 className="text-white text-2xl font-heading">{collection.title}</h3>
        <p className="text-white font-['Cormorant_Garamond'] italic mt-2">
          {collection.description}
        </p>
      </div>
    </motion.div>
  );
};

const Collections = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.2 });
  const buttonRef = useRef(null);
  const isButtonInView = useInView(buttonRef, { once: true, amount: 0.2 });

  return (
    <section id="collections" className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={titleRef}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Collections</h2>
          <p className="font-['Cormorant_Garamond'] text-lg mt-4 text-[#333333]">
            Explore signature designs that blend Dutch minimalism with global influences
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.collections.map((collection, index) => (
            <CollectionItem key={collection.id} collection={collection} index={index} />
          ))}
        </div>

        <motion.div
          ref={buttonRef}
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#"
            className="inline-block px-8 py-3 border border-primary hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-body"
          >
            View All Collections
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
