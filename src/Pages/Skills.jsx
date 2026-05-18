import React from "react";
import { motion } from "framer-motion";
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

// ─── Animation Variants ───────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
// ─────────────────────────────────────────────────────────────────────────────

const Skills = () => {
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

  return (
    <section
      id="Skills"
      className="min-h-screen w-full bg-neutral-950 flex flex-col items-center justify-center px-4 py-20 pt-28"
    >
      {/* Title */}
      <h1 className="relative font-black text-white lg:text-3xl text-2xl mb-20">
        Creative & Tech Stack
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: "50%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-1.5 bg-[#7055c1] absolute rounded-2xl -bottom-5 left-[25%]"
        />
      </h1>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl w-full"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ borderColor: "rgba(255,255,255,0.2)", scale: 0.98 }}
            tabIndex={0}
            className="group bg-neutral-900 border border-white/10 active:border-white/20 focus:border-white/20 rounded-2xl p-5 flex flex-col items-center text-center gap-2 cursor-pointer transition-colors duration-300 outline-none"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Icon — scale independently on hover via its own motion.div */}
            <motion.div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${skill.iconBg} group-hover:scale-120 group-active:scale-120 group-focus:scale-120 transition-all duration-400 ease-in-out`}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              //   whileHover={{ scale: 1.25 }}
            >
              <skill.icon size={22} style={{ color: skill.iconColor }} />
            </motion.div>

            {/* Name — color changes via CSS group-hover, zero JS */}
            <p className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#62a58f] group-active:text-[#62a58f] group-focus:text-[#62a58f]">
              {skill.name}
            </p>

            {/* Desc */}
            <p className="text-white/40 text-xs">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
