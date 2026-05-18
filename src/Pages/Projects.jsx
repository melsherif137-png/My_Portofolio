import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Shopping Cart App",
    bgImage: "/projects-images/Screenshot 2026-05-16 050329.png",
    desc: "A complete e-commerce shopping cart system where users can browse products, add or remove items, update quantities in real time, and see automatic total price calculation with a smooth and responsive UI experience.",
    tech: ["React", "Redux", "Tailwind"],
    link: "https://elsherif-store.vercel.app/",
  },
  {
    id: 2,
    name: "Weather Forecast App",
    bgImage: "/projects-images/Screenshot 2026-05-16 050538.png",
    desc: "Live weather app that fetches real-time data using weather API with location search.",
    tech: ["React", "API", "Tailwind"],
    link: "https://skycast-app-azure.vercel.app/",
  },
  {
    id: 3,
    name: "Modern Landing Page",
    bgImage: "/projects-images/Screenshot 2026-05-16 050434.png",
    desc: "High conversion landing page with smooth animations and responsive design.",
    tech: ["HTML", "CSS"],
    link: "https://elegant-brioche-6700a8.netlify.app/",
  },
  {
    id: 4,
    name: "Car Rental System",
    bgImage: "/projects-images/Screenshot 2026-05-16 022624.png",
    desc: "Car booking system with availability check, filtering, and reservation workflow.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://stunning-narwhal-e26f8b.netlify.app/",
  },
];

const techColors = {
  React: "bg-blue-500/20 text-blue-300",
  Redux: "bg-purple-500/20 text-purple-300",
  Tailwind: "bg-cyan-500/20 text-cyan-300",
  API: "bg-green-500/20 text-green-300",
  HTML: "bg-orange-500/20 text-orange-300",
  CSS: "bg-pink-500/20 text-pink-300",
  JavaScript: "bg-yellow-500/20 text-yellow-300",
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.92,
    filter: "blur(12px)",
  },

  show: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.8,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Card = ({ project, index }) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      custom={index}
      className="
        relative
        group
        overflow-hidden
        rounded-2xl
        bg-neutral-900
        outline-none
      "
    >
      {/* IMAGE */}
      <img
        src={project.bgImage}
        alt={`${project.name} preview`}
        className="
          w-full
          h-full
          object-cover
          transition-all
          duration-700
          lg:grayscale
          group-hover:grayscale-0
          group-hover:scale-105
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/30
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
        "
      />

      {/* GRADIENT OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/20
          to-transparent
          opacity-70
        "
      />

      {/* CONTENT */}
      <div
        className="
          absolute
          bottom-0
          left-0
          p-5
          text-white
          translate-y-8
          opacity-0
          transition-all
          duration-500
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        {/* TITLE */}
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold">{project.name}</h2>

          <MdOutlineArrowOutward className="text-lg" />
        </div>

        {/* DESC */}
        <p className="text-sm text-gray-300 mt-2 leading-relaxed line-clamp-2">
          {project.desc}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className={`
                text-xs
                px-2.5
                py-1
                rounded-full
                border
                border-white/10
                backdrop-blur-sm
                ${techColors[t] || "bg-white/10 text-white"}
              `}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const Projects = () => {
  return (
    <section
      id="Projects"
      className="
        min-h-screen
        bg-neutral-950
        px-4
        sm:px-6
        py-24
      "
    >
      {/* HEADING */}
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-black text-white"
        >
          Selected <span className="text-[#62a58f]">Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="text-gray-400 mt-3"
        >
          Some works that highlight my expertise.
        </motion.p>
      </div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.15,
        }}
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-4
          max-w-6xl
          mx-auto
          lg:h-[500px]
          mt-8
        "
      >
        {/* LEFT BIG */}
        <Card project={projects[0]} index={0} />

        {/* RIGHT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* LEFT COLUMN */}
          <div className="grid grid-rows-2 gap-4">
            <Card project={projects[2]} index={1} />

            <Card project={projects[3]} index={2} />
          </div>

          {/* RIGHT BIG */}
          <Card project={projects[1]} index={3} />
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
