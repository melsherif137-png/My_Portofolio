import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Links = [
  { id: "home", target: "Home", label: "Home" },
  { id: "about", target: "About", label: "About" },
  { id: "skills", target: "Skills", label: "Skills" },
  { id: "projects", target: "Projects", label: "Projects" },
  { id: "contact", target: "Contact", label: "Contact" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 15, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // ── Scroll Observer ──
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id.toLowerCase());
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // ── Navbar background ──
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const handleClick = (id, target) => {
    setActive(id);
    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-500
          ${scrolled ? "bg-black/40 backdrop-blur-2xl border-b border-white/10" : "bg-transparent"}`}
      >
        <div className="h-full flex items-center justify-between lg:px-[13%] px-6">
          {/* LOGO */}
          <button
            onClick={() => handleClick("home", "Home")}
            className="text-white font-bold text-2xl hover:text-[#62a58f] transition-colors"
          >
            Elsherif<span className="text-[#62a58f]">.</span>
          </button>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {Links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id, link.target)}
                className="relative flex flex-col items-center gap-1.5 py-1"
              >
                <span
                  className={`text-sm transition-colors duration-200
                    ${active === link.id ? "text-[#62a58f]" : "text-gray-400 hover:text-white"}`}
                >
                  {link.label}
                </span>

                {/* النقطة — بتظهر وتختفي بس */}
                <span
                  className={`w-1 h-1 rounded-full bg-[#62a58f] transition-opacity duration-200
                    ${active === link.id ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`w-6 h-[1.5px] bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`w-6 h-[1.5px] bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-[1.5px] bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="flex flex-col gap-8 text-center"
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {Links.map((link) => (
                <motion.button
                  key={link.id}
                  variants={item}
                  onClick={() => handleClick(link.id, link.target)}
                  className="relative group py-2"
                >
                  <span
                    className={`text-lg uppercase tracking-[0.22em] transition-colors duration-200
                      ${active === link.id ? "text-[#62a58f]" : "text-gray-400 hover:text-white"}`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] bg-gradient-to-r from-[#1f3f35] via-[#62a58f] to-transparent transition-all duration-300
                      ${active === link.id ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
