import { LuGithub } from "react-icons/lu";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { ProfileCard } from "./components/ProfileCard";
import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
  const texts = [
    "I help businesses and individuals turn ideas into beautiful and functional digital solutions.",
    "Creating modern, responsive, and high-performance web experiences.",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const typingSpeed = isDeleting ? 20 : 40;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // كتابة النص
        const updated = currentText.slice(0, displayedText.length + 1);
        setDisplayedText(updated);

        // لما يخلص كتابة يبدأ مسح
        if (updated === currentText) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      } else {
        // مسح النص
        const updated = currentText.slice(0, displayedText.length - 1);
        setDisplayedText(updated);

        // بعد ما يتمسح كله يبدأ النص اللي بعده
        if (updated === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <section
      id="Home"
      className="relative  flex lg:flex-row md:flex-row flex-col z-10 bg-transparent text-2xl lg:px-[13%] md:px-4  px-5 py-6 text-white font-bold items-center justify-center lg:h-screen min-h-[70vh] lg:pt-45 pt-26"
    >
      <div className="left-side flex-1 flex flex-col justify-center lg:py-0 py-10">
        <motion.p
          className="text-gray-400 font-normal tracking-wider lg:text-2xl text-lg"
          initial={{ opacity: 0, y: 20, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.3,
            ease: easeInOut,
          }}
        >
          HELLO, I AM
        </motion.p>
        <motion.h1
          className="lg:text-6xl text-5xl"
          initial={{ opacity: 0, y: 20, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.3,
            ease: easeInOut,
            delay: 0.2,
          }}
        >
          Mohamed Elsherif
        </motion.h1>
        <motion.div
          className=" mt-4"
          initial={{ opacity: 0, y: 20, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.3,
            ease: easeInOut,
            delay: 0.3,
          }}
        >
          <motion.span
            className="flex  "
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.3,
              ease: easeInOut,
              delay: 0.4,
            }}
          >
            <span className="text-gray-400 lg:text-4xl text-3xl pr-2">A</span>
            <span className="relative inline-block lg:text-4xl text-3xl">
              Frontend Developer
              <span className="absolute left-0 -bottom-1 h-1 scale-y-50 w-full bg-[#62a58f]/70" />
            </span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.3,
              ease: easeInOut,
              delay: 0.6,
            }}
            className="lg:text-2xl text-2xl max-w-[400px] block mt-4"
          >
            Crafting interactive web experiences.
          </motion.span>
        </motion.div>
        <motion.div
          className="links flex lg:gap-8 gap-5 my-7"
          initial={{ opacity: 0, y: 20, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.3,
            ease: easeInOut,
            delay: 0.8,
          }}
        >
          <a
            href="https://github.com/melsherif137-png"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white active:text-white transition-all duration-300 ease-in-out cursor-pointer"
          >
            <LuGithub />
          </a>

          <a
            href="https://www.instagram.com/mohamedelsheriif_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white active:text-white transition-all duration-300 ease-in-out cursor-pointer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-elsherif-aa9109329/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white active:text-white transition-all duration-300 ease-in-out cursor-pointer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://wa.me/201221916415?text=Hi%20Mohamed,%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0ACan%20we%20talk?"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white active:text-white transition-all duration-300 ease-in-out cursor-pointer"
          >
            <FaWhatsapp />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20, rotateX: 30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.3,
            ease: easeInOut,
            delay: 0.5,
          }}
          className="lg:max-w-[500px] max-w-[380px] lg:text-lg text-sm font-normal text-gray-400 leading-relaxed h-10"
        >
          {displayedText}
          <span className="animate-pulse text-[#62a58f]">|</span>
        </motion.p>
        <motion.div
          className="buttons flex lg:gap-8 gap-4 my-8"
          initial={{ opacity: 0, y: 20, rotateX: 30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.3,
            ease: easeInOut,
            delay: 0.5,
          }}
        >
          <a
            href="#Projects"
            className="group flex gap-4 items-center font-bold lg:text-lg text-[15px] bg-[#295a486f] hover:bg-[#264539ba] active:bg-[#264539ba] border border-[#295a48db] hover:border-[#468d73db] active:border-[#468d73db] text-[#76c1b4f3] hover:text-white active:text-white lg:px-6 px-4 lg:py-3 py-1 rounded-4xl transition-all duration-300 ease-in-out cursor-pointer"
          >
            View Projects{" "}
            <MdOutlineArrowOutward
              className=" translate-y-0.5
      transition-transform
      duration-300
      ease-out
      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
      group-active:translate-x-0.5
      group-active:-translate-y-0.5
      
    "
            />
          </a>
          <a
            href="#Contact"
            className="font-bold lg:text-lg text-[15px] border-1 text-gray-500 border-gray-500 bg-transparent hover:bg-gray-800 active:bg-gray-800 hover:border-gray-500 active:border-gray-500 hover:text-white active:text-white px-6 py-3 rounded-4xl transition-all
      duration-300
      ease-out cursor-pointer"
          >
            Contact me
          </a>
        </motion.div>
      </div>

      <motion.div
        className="right-side flex-1 flex justify-end items-end mt-10 lg:my-0 my-15"
        initial={{ opacity: 0, y: 20, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 0.3,
          ease: easeInOut,
          delay: 0.4,
        }}
      >
        <ProfileCard />
      </motion.div>
    </section>
  );
};

export default Home;
