import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["My", "name", "is"];

export default function Intro({ onFinish }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const delays = [1000, 1200, 1800];

    if (step >= delays.length) {
      const finishTimer = setTimeout(() => {
        onFinish?.();
      }, 700);

      return () => clearTimeout(finishTimer);
    }

    const timer = setTimeout(() => {
      setStep((prev) => prev + 1);
    }, delays[step]);

    return () => clearTimeout(timer);
  }, [step, onFinish]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500&family=Cormorant+Garamond:wght@300;400&display=swap"
        rel="stylesheet"
      />

      <motion.div
        className="fixed inset-0 z-[999] overflow-hidden bg-[#05070b]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Soft Glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(98,165,143,0.12) 0%, transparent 70%)",
            filter: "blur(55px)",
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.85, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px",
          }}
        />

        {/* Content */}
        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <AnimatePresence mode="wait">
            {/* HEY */}
            {step === 0 && (
              <motion.h1
                key="hey"
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: "blur(12px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  filter: "blur(8px)",
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="select-none text-5xl font-thin uppercase tracking-[0.28em] text-white/80 sm:text-7xl md:text-8xl"
                style={{
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                Hey
              </motion.h1>
            )}

            {/* MY NAME IS */}
            {step === 1 && (
              <motion.div
                key="words"
                className="flex flex-wrap items-center justify-center gap-3"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  y: -15,
                  filter: "blur(8px)",
                }}
              >
                {words.map((word) => (
                  <motion.span
                    key={word}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                        filter: "blur(8px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      },
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="select-none uppercase text-white/65"
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontWeight: 200,
                      fontSize: "clamp(1.7rem,4vw,3rem)",
                      letterSpacing: "0.22em",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* FINAL */}
            {step >= 2 && (
              <motion.div
                key="final"
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Line */}
                <motion.div
                  initial={{
                    scaleX: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scaleX: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="mb-6 h-px w-28 origin-center bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />

                {/* Name */}
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(14px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="select-none text-white"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2rem,7vw,5rem)",
                    fontWeight: 300,
                    letterSpacing: "0.02em",
                    lineHeight: 1,
                    textShadow: "0 10px 40px rgba(0,0,0,0.65)",
                  }}
                >
                  Mohamed Elsherif
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.18,
                    duration: 0.45,
                  }}
                  className="mt-3 select-none uppercase text-white/30"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: "0.62rem",
                    letterSpacing: "0.42em",
                    fontWeight: 500,
                  }}
                >
                  Frontend Developer
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
