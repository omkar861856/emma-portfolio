import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { images } from "@/lib/image-data";

const Lookbook = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.2 });

  return (
    <section id="lookbook" className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Lookbook</h2>
          <p className="font-['Cormorant_Garamond'] text-lg mt-4 text-[#333333]">
            A visual journey through Emma's latest creations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.lookbook.map((image, index) => (
            <LookbookImage
              key={index}
              src={image}
              index={index}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            <img
              src={selectedImage || ""}
              alt="Lookbook detail"
              className="w-full h-auto"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

const LookbookImage = ({ 
  src, 
  index, 
  onClick 
}: { 
  src: string; 
  index: number; 
  onClick: () => void;
}) => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={imageRef}
      className="overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.77, 0, 0.175, 1]
      }}
      onClick={onClick}
    >
      <img
        src={src}
        alt={`Lookbook image ${index + 1}`}
        className="w-full h-80 object-cover gallery-image"
      />
    </motion.div>
  );
};

export default Lookbook;
