import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Code2,
  Globe,
  Palette,
  FileCode,
  Database,
  Server,
  GitBranch,
  Layout,
  Boxes,
  Cpu,
  Monitor,
  Smartphone,
  Terminal,
  Layers,
  Bug,
} from "lucide-react";

// ─── Per-element animated card ────────────────────────────────────────────────
const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  // each card watches itself — no parent viewport tricks
  const inView = useInView(ref, {
    once: false, // re-animates when scrolled back into view
    amount: 0.25, // card must be 25% visible before triggering
    margin: "0px", // no artificial offset
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            delay: (index % 5) * 0.06,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{
        borderColor: "rgba(255,255,255,0.2)",
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.96,
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 25,
        },
      }}
      className="group relative overflow-hidden bg-neutral-900 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center gap-2 cursor-pointer"
    >
      {/* Subtle radial glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_65%)]" />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: -4 }}
        transition={{ type: "spring", stiffness: 280, damping: 16 }}
        className={`relative group-hover:scale-120 transition-all duration-300 ease-in-out z-10 w-12 h-12 rounded-xl flex items-center justify-center ${skill.iconBg}`}
      >
        <skill.icon size={22} style={{ color: skill.iconColor }} />
      </motion.div>

      {/* Name */}
      <p className="relative z-10 text-sm font-semibold text-white group-hover:text-[#62a58f] transition-colors duration-300">
        {skill.name}
      </p>

      {/* Desc */}
      <p className="relative z-10 text-white/40 text-xs">{skill.desc}</p>
    </motion.div>
  );
};
// ─────────────────────────────────────────────────────────────────────────────

// ─── Animated title underline ────────────────────────────────────────────────
const AnimatedTitle = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const lineControls = useAnimation();

  const inView = useInView(ref, { once: false, amount: 0.5, margin: "0px" });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      });
      lineControls.start({
        width: "50%",
        opacity: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      });
    } else {
      controls.start({ opacity: 0, y: 18 });
      lineControls.start({ width: 0, opacity: 0 });
    }
  }, [inView, controls, lineControls]);

  return (
    <motion.h1
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 18 }}
      className="relative font-black text-white lg:text-3xl text-2xl mb-20"
    >
      Creative & Tech Stack
      <motion.span
        animate={lineControls}
        initial={{ width: 0, opacity: 0 }}
        className="h-1.5 bg-[#7055c1] absolute rounded-2xl -bottom-5 left-[25%]"
      />
    </motion.h1>
  );
};
// ─────────────────────────────────────────────────────────────────────────────

const skills = [
  {
    icon: Code2,
    name: "React",
    desc: "UI Library",
    iconBg: "bg-sky-500/10",
    iconColor: "#38bdf8",
  },
  {
    icon: Globe,
    name: "JavaScript",
    desc: "Core Language",
    iconBg: "bg-yellow-500/10",
    iconColor: "#facc15",
  },
  {
    icon: Palette,
    name: "Tailwind",
    desc: "CSS Framework",
    iconBg: "bg-cyan-500/10",
    iconColor: "#22d3ee",
  },
  {
    icon: FileCode,
    name: "CSS",
    desc: "Styling",
    iconBg: "bg-pink-500/10",
    iconColor: "#f472b6",
  },
  {
    icon: Database,
    name: "Firebase",
    desc: "Backend Service",
    iconBg: "bg-orange-500/10",
    iconColor: "#fb923c",
  },
  {
    icon: Server,
    name: "Node.js",
    desc: "Backend Runtime",
    iconBg: "bg-green-500/10",
    iconColor: "#4ade80",
  },
  {
    icon: GitBranch,
    name: "Git",
    desc: "Version Control",
    iconBg: "bg-violet-500/10",
    iconColor: "#a78bfa",
  },
  {
    icon: Layout,
    name: "Layouts",
    desc: "Responsive UI",
    iconBg: "bg-blue-500/10",
    iconColor: "#60a5fa",
  },
  {
    icon: Boxes,
    name: "Components",
    desc: "Reusable UI",
    iconBg: "bg-emerald-500/10",
    iconColor: "#34d399",
  },
  {
    icon: Cpu,
    name: "Performance",
    desc: "Optimization",
    iconBg: "bg-red-500/10",
    iconColor: "#f87171",
  },
  {
    icon: Monitor,
    name: "Responsive",
    desc: "All Screens",
    iconBg: "bg-indigo-500/10",
    iconColor: "#818cf8",
  },
  {
    icon: Smartphone,
    name: "Mobile UI",
    desc: "Touch UX",
    iconBg: "bg-rose-500/10",
    iconColor: "#fb7185",
  },
  {
    icon: Terminal,
    name: "CLI",
    desc: "Command Line",
    iconBg: "bg-gray-500/10",
    iconColor: "#9ca3af",
  },
  {
    icon: Layers,
    name: "UI Systems",
    desc: "Design Systems",
    iconBg: "bg-teal-500/10",
    iconColor: "#14b8a6",
  },
  {
    icon: Bug,
    name: "Debugging",
    desc: "Fix & Optimize",
    iconBg: "bg-red-400/10",
    iconColor: "#f87171",
  },
];

const Skills = () => {
  return (
    <section
      id="Skills"
      className="w-full bg-neutral-950 flex flex-col items-center px-4 py-20 pt-28"
    >
      <AnimatedTitle />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl w-full">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
