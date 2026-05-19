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
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // ───────────────── Scroll Spy ─────────────────
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id.toLowerCase());
          }
        });
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // ───────────────── Navbar Background ─────────────────
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ───────────────── Body Lock ─────────────────
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ───────────────── Scroll Function ─────────────────
  const handleClick = (id, target) => {
    const section = document.getElementById(target);

    if (!section) return;

    setActive(id);

    // اقفل المنيو الأول
    setIsOpen(false);

    // افتح السكرول
    document.body.style.overflow = "";

    // استنى frame عشان الـ menu يختفي
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  };

  return (
    <>
      {/* ───────────────── NAVBAR ───────────────── */}
      <nav
        className={`fixed top-0 left-0 z-50 h-20 w-full transition-all duration-300
        ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex h-full items-center justify-between px-6 lg:px-[13%]">
          {/* ───────────────── LOGO ───────────────── */}
          <button
            onClick={() => handleClick("home", "Home")}
            className="text-2xl font-semibold tracking-wide text-white transition-colors duration-200 hover:text-[#62a58f]"
          >
            Elsherif<span className="text-[#62a58f]">.</span>
          </button>

          {/* ───────────────── DESKTOP LINKS ───────────────── */}
          <div className="hidden items-center gap-8 lg:flex">
            {Links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id, link.target)}
                className="group relative flex flex-col items-center gap-1"
              >
                <span
                  className={`text-sm transition-colors duration-200 cursor-pointer
                  ${
                    active === link.id
                      ? "text-[#62a58f]"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {link.label}
                </span>

                <span
                  className={`h-[4px] rounded-full bg-[#62a58f] transition-all duration-300 
                  ${
                    active === link.id
                      ? "w-1 rounded-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* ───────────────── MOBILE BUTTON ───────────────── */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-[1.5px] w-6 rounded-full bg-white transition-all duration-300
              ${isOpen ? "translate-y-[6px] rotate-45" : ""}`}
            />

            <span
              className={`h-[1.5px] w-6 rounded-full bg-white transition-all duration-300
              ${isOpen ? "opacity-0" : "opacity-100"}`}
            />

            <span
              className={`h-[1.5px] w-6 rounded-full bg-white transition-all duration-300
              ${isOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* ───────────────── MOBILE MENU ───────────────── */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.18,
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="flex flex-col items-center gap-8 text-center"
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
                  className="group relative py-2"
                >
                  <span
                    className={`text-lg uppercase tracking-[0.22em] transition-colors duration-200
                    ${
                      active === link.id
                        ? "text-[#62a58f]"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>

                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-[#1f3f35] via-[#62a58f] to-transparent transition-all duration-300
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
