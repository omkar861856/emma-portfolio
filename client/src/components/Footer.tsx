import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <a
              href="#"
              className="text-2xl font-heading font-bold tracking-widest"
            >
              EMMA<span className="text-[#DFA878]">.</span>
            </a>
            <p className="mt-4 max-w-xs text-[#333333]">
              Sustainable luxury fashion designed and crafted in Amsterdam.
            </p>
            <div className="mt-6 flex space-x-6">
              <a
                href="#"
                className="text-[#333333] hover:text-[#DFA878] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#333333] hover:text-[#DFA878] transition-colors"
                aria-label="Pinterest"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#333333] hover:text-[#DFA878] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Explore
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("#collections")}
                    className="text-[#333333] hover:text-[#DFA878] transition-colors"
                  >
                    Collections
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#about")}
                    className="text-[#333333] hover:text-[#DFA878] transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#lookbook")}
                    className="text-[#333333] hover:text-[#DFA878] transition-colors"
                  >
                    Lookbook
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="text-[#333333] hover:text-[#DFA878] transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[#333333] hover:text-[#DFA878] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#333333] hover:text-[#DFA878] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#333333] hover:text-[#DFA878] transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Contact
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <span className="text-[#333333]">Prinsengracht 263</span>
                </li>
                <li>
                  <span className="text-[#333333]">1016 GV Amsterdam</span>
                </li>
                <li>
                  <span className="text-[#333333]">Netherlands</span>
                </li>
                <li>
                  <span className="text-[#333333]">+31 20 123 4567</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E5E5] text-sm text-[#333333]">
          <p>&copy; {new Date().getFullYear()} Emma van der Meer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
