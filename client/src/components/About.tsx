import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin } from "lucide-react";
import { images } from "@/lib/image-data";

const About = () => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.2 });
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            ref={imageRef}
            className="w-full md:w-2/5 mb-12 md:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            <img
              src={images.about}
              alt="Emma van der Meer, Fashion Designer"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            ref={textRef}
            className="w-full md:w-3/5 md:pl-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Emma van der Meer
            </h2>
            <p className="font-['Cormorant_Garamond'] text-lg mt-2 italic text-[#333333]">
              Fashion Designer & Founder
            </p>

            <div className="mt-8 text-[#333333] space-y-4">
              <p className="leading-relaxed">
                Born and raised in Amsterdam, Emma's design journey began at the
                Royal Academy of Art in The Hague, followed by an apprenticeship with
                renowned Dutch designer Iris van Herpen.
              </p>
              <p className="leading-relaxed">
                Her work is characterized by a meticulous attention to detail,
                innovative pattern cutting, and a deep commitment to sustainable
                practices. Drawing inspiration from Amsterdam's architectural
                landscape and artistic heritage, Emma creates pieces that are both
                timeless and distinctly contemporary.
              </p>
              <p className="leading-relaxed">
                Since founding her eponymous label in 2018, Emma's designs have been
                featured in Vogue Netherlands, showcased at Amsterdam Fashion Week,
                and worn by cultural icons across Europe.
              </p>
            </div>

            <div className="mt-8 flex space-x-6">
              <a
                href="#"
                className="text-primary hover:text-[#DFA878] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary hover:text-[#DFA878] transition-colors"
                aria-label="Pinterest"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-primary hover:text-[#DFA878] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
