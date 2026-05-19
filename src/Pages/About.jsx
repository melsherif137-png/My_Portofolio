import { Code2, Palette, Gauge, Smartphone, Download } from "lucide-react";
import { motion } from "framer-motion";
// (motion نفسها موجودة بالفعل)

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skills = [
  {
    Icon: Code2,
    title: "React Development",
    desc: "Building scalable, component-driven apps with clean architecture.",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    Icon: Smartphone,
    title: "Responsive Layouts",
    desc: "Seamless experiences across mobile, tablet, and desktop screens.",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    Icon: Gauge,
    title: "Performance",
    desc: "Optimizing rendering and animations for smoother UX.",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-500",
  },
  {
    Icon: Palette,
    title: "Modern Interfaces",
    desc: "Polished UI design with focus on spacing, motion, and usability.",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
  },
];

const TiltCard = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.25 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section
      id="About"
      className="relative min-h-screen w-full overflow-hidden lg:px-10 px-4 py-16 pt-28"
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #050505 70%, #0a120d 100%)",
        contentVisibility: "auto",
        containIntrinsicSize: "900px",
      }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(0,200,100,0.06), transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,180,90,0.04), transparent 50%)",
        }}
      />

      {/* MAIN */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="relative z-10 grid h-full grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr]"
      >
        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-center gap-5 order-2 md:order-1"
        >
          {/* Polaroid */}
          <motion.div
            variants={scaleIn}
            whileHover={{
              rotate: 0,
              y: -4,
              transition: { duration: 0.35 },
            }}
            whileTap={{
              rotate: 0,
              y: -4,
              transition: { duration: 0.35 },
            }}
            className="relative"
            style={{ transform: "rotate(-2deg)" }}
          >
            {/* Tape */}

            {/* Card */}
            <motion.div
              variants={scaleIn}
              initial={{
                rotate: -6,
              }}
              whileHover={{
                scale: 1.015,
                rotate: -3,
                transition: { duration: 0.35 },
              }}
              whileTap={{
                scale: 1.015,
                rotate: -3,
                transition: { duration: 0.35 },
              }}
              className="relative lg:w-94 lg:h-[29rem] w-70 h-[21rem] rounded-sm p-3 pb-4"
              style={{
                background: "#f5f0e8",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.7), 0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              <motion.div
                variants={fadeUp}
                className="absolute left-1/2 z-10 h-7 w-16 -translate-x-1/2 rounded-sm backdrop-blur-md"
                style={{
                  top: "-14px",
                  background: "rgba(180,180,180,0.35)",
                }}
              />

              <svg
                className="absolute -left-30 -top-30 opacity-25"
                width="200"
                height="160"
                viewBox="0 0 200 160"
                fill="none"
              >
                <path
                  d="M 10 140 Q 100 10 190 80"
                  stroke="#f87171"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                <path
                  d="M 30 155 Q 110 30 200 100"
                  stroke="#f87171"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>

              {/* IMAGE */}
              <div className="relative h-[calc(100%-2.5rem)] w-full overflow-hidden rounded-sm bg-neutral-700">
                <motion.img
                  variants={scaleIn}
                  src="/Photos/photo_2026-05-09_05-45-59.jpg"
                  alt="Mohamed Elsherif"
                  loading="lazy"
                  decoding="async"
                  initial={{
                    scale: 1.08,

                    filter: "grayscale(70%)brightness(0.8) contrast(0.9)",
                  }}
                  whileHover={{
                    scale: 1.03,
                    filter: "grayscale(0%) brightness(1) contrast(1)",
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  whileTap={{
                    scale: 1.03,
                    filter: "grayscale(0%) brightness(1) contrast(1)",
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className="
        h-full
        w-full
        object-cover
        rounded-sm
        transition-all
        duration-700
        will-change-transform
      "
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />

                {/* SVG */}
                <motion.svg
                  variants={fadeUp}
                  className="absolute -left-30 -top-30 opacity-25"
                  width="200"
                  height="160"
                  viewBox="0 0 200 160"
                  fill="none"
                >
                  <path
                    d="M 10 140 Q 100 10 190 80"
                    stroke="#f87171"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 30 155 Q 110 30 200 100"
                    stroke="#f87171"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </motion.svg>
              </div>

              {/* TEXT */}
              <motion.p
                variants={fadeUp}
                className="mt-3 text-center text-sm text-neutral-700"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Mohamed Elsherif – Frontend Developer
              </motion.p>
            </motion.div>
          </motion.div>

          {/* BUTTON */}
          <motion.button
            variants={fadeUp}
            whileHover={{
              scale: 1.04,
              borderColor: "rgba(34,197,94,0.45)",
              backgroundColor: "rgba(20,20,20,0.95)",
            }}
            whileTap={{
              scale: 0.98,
              borderColor: "rgba(34,197,94,0.45)",
              backgroundColor: "rgba(20,20,20,0.95)",
            }}
            className="
              flex items-center gap-2 rounded-full
              border border-white/15
              bg-neutral-900/80
              lg:px-10 lg:py-3
              px-5 py-2
              lg:text-xs text-[10px]
              font-medium uppercase
              tracking-[0.2em]
              text-white
              transition-all duration-300
              mt-10
            "
          >
            Available for Hire
            <span className="relative flex h-2.5 w-2.5 ">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            </span>
          </motion.button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={container}
          className="relative flex flex-col justify-center order-1 md:order-2"
        >
          {/* TITLE */}
          <motion.div
            variants={fadeUp}
            className="mb-1 flex items-center gap-4 lg:text-5xl text-4xl font-bold text-white"
          >
            ABOUT<span className="text-blue-400">ME</span>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-px flex-1 bg-white/10"
            />
          </motion.div>

          {/* STAR */}
          <motion.svg
            variants={scaleIn}
            whileHover={{
              rotate: 90,
              scale: 1.1,
            }}
            whileTap={{
              rotate: 90,
              scale: 1.1,
            }}
            transition={{ duration: 0.4 }}
            className="absolute right-4 top-10 text-[#c77dff]"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="#c77dff"
          >
            <path d="M14 0 L16 11 L28 14 L16 17 L14 28 L12 17 L0 14 L12 11 Z" />
          </motion.svg>

          {/* BIO */}
          <motion.p
            variants={fadeUp}
            className="my-5 max-w-xl text-[15px] leading-relaxed text-white/65"
          >
            I'm a Frontend Developer based in Egypt, driven by the challenge of
            turning complex ideas into seamless digital experiences.
          </motion.p>

          {/* SKILLS */}
          <motion.div
            variants={container}
            className="grid max-w-xl grid-cols-2 gap-3 mb-10 lg:mb-0"
          >
            {skills.map((skill, index) => (
              <TiltCard
                key={skill.title}
                delay={index * 0.08}
                className="
                rounded-2xl
                border border-white/8
                bg-white/[0.04]
                lg:p-5 p-3
                backdrop-blur-sm
                will-change-transform
            "
              >
                {/* ICON */}
                <motion.div
                  initial={{ rotate: -8, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: -6,
                  }}
                  whileTap={{
                    scale: 1.08,
                    rotate: -6,
                  }}
                  className={` mb-3 inline-flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                   ${skill.iconBg}
                    ${skill.iconColor}
                     shadow-lg shadow-black/20`}
                >
                  <skill.Icon size={18} />
                </motion.div>

                {/* TITLE */}
                <motion.p
                  // variants={fadeUp}
                  className="mb-1.5 text-[15px] font-bold text-white"
                >
                  {skill.title}
                </motion.p>

                {/* DESC */}
                <motion.p
                  // variants={fadeUp}
                  className="text-[13px] leading-relaxed text-white/45"
                >
                  {skill.desc}
                </motion.p>
              </TiltCard>
            ))}
          </motion.div>
          <motion.a
            href="/CV_Mohamed_Ehsherif.pdf"
            download
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              transition: { duration: 0.25 },
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="mb-15 lg:mt-5  flex lg:mx-0 w-60 mx-auto gap-2 items-center justify-center bg-[#295a486f] hover:bg-[#264539ba] active:bg-[#264539ba] border border-[#295a48db] hover:border-[#468d73db] active:border-[#468d73db] text-[#76c1b4f3] hover:text-white active:text-white lg:px-6 px-6 lg:py-3 py-3 rounded-4xl transition-all duration-300 ease-in-out cursor-pointer"
          >
            Download CV <Download />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
