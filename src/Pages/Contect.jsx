import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_mt5m909", // 1. حط هنا الـ Service ID بتاعك
        "template_8ucamhf", // 2. حط هنا الـ Template ID اللي لسه عاملينه
        formRef.current,
        "jMGByHwDBu18FSXCt", // 3. حط هنا الـ Public Key بتاعك
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent successfully 🎉");
        formRef.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Something went wrong");
        console.log(error);
      });
  };

  return (
    <section
      id="Contact"
      className="min-h-screen w-full bg-neutral-950 px-2 py-20 pt-25 lg:px-[12%] "
    >
      {/* Header */}
      <div className="mb-14 flex flex-col justify-center items-center">
        <motion.p
          className="text-[11px] font-medium tracking-[.22em] text-white/30 uppercase mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:text-4xl text-3xl font-extrabold text-white leading-tight tracking-tight mb-3 "
        >
          Let's build something
          <span className="text-[#62a58f] block text-center">
            great together.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:text-[15px] text-[12px] text-white/40 leading-relaxed max-w-md text-center"
        >
          Have a project in mind or want to collaborate? I'd love to hear from
          you — drop me a message.
        </motion.p>
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-white/20 hover:scale-101 hover:border-white/25 bg-white/5 p-4 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 transition-all duration-300 ease-in-out">
        {/* ── Left: info ── */}
        <div className="grid grid-cols-1 gap-4">
          {[
            {
              icon: <MdEmail />,
              label: "Email",
              value: "m.elsherif@email.com",
              link: "mailto:melsherif137@gmail.com",

              bg: "bg-emerald-500/[0.04]",
              border: "border-emerald-500/10",
              iconStyle: "bg-emerald-500/10 text-emerald-400",
              shadow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
            },
            {
              icon: <FaGithub />,
              label: "GitHub",
              value: "github.com/moelsherif",
              link: "https://github.com/melsherif137-png",

              bg: "bg-violet-500/[0.04]",
              border: "border-violet-500/10",
              iconStyle: "bg-violet-500/10 text-violet-400",
              shadow: "hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]",
            },
            {
              icon: <FaLinkedin />,
              label: "LinkedIn",
              value: "linkedin.com/in/moelsherif",
              link: "https://www.linkedin.com/in/mohamed-elsherif-aa9109329/",

              bg: "bg-sky-500/[0.04]",
              border: "border-sky-500/10",
              iconStyle: "bg-sky-500/10 text-sky-400",
              shadow: "hover:shadow-[0_0_20px_rgba(14,165,233,0.25)]",
            },
            {
              icon: <FaWhatsapp />,
              label: "WhatsApp",
              value: "+20 122 1916 415",
              link: "https://wa.me/201221916415?text=Hi%20Mohamed,%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0ACan%20we%20talk?",
              bg: "bg-green-500/[0.04]",
              border: "border-green-500/10",
              iconStyle: "bg-green-500/10 text-green-400",
              shadow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.25)]",
            },
          ].map((item) => (
            <a href={`${item.link}`}>
              <div
                key={item.label}
                className={`group rounded-2xl border ${item.border} ${item.bg} p-4 flex items-center gap-4 h-20 ${item.shadow} hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer`}
              >
                <div
                  className={` group-hover:scale-120 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0 ${item.iconStyle} transition-all ease-in-out duration-300`}
                >
                  {item.icon}
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[.12em] text-white/28 mb-1">
                    {item.label}
                  </p>

                  <p className="text-[13px] font-medium text-white/75">
                    {item.value}
                  </p>
                </div>
              </div>
            </a>
          ))}

          {/* Availability badge */}
          <div className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
            <p className="text-[12px] text-white/40 leading-snug">
              Currently{" "}
              <span className="text-emerald-400 font-medium">
                available for hire
              </span>{" "}
              — open to freelance & full-time
            </p>
          </div>
        </div>

        {/* ── Right: form ── */}
        {/* التعديل 1: ربطنا الـ ref والـ onSubmit بالـ form تلميحاً للـ JSX */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] uppercase tracking-[.12em] text-white/28">
                Name
              </label>
              <input
                name="name" // مطابق لـ {{name}} في التمبلت
                type="text"
                placeholder="Your name"
                required
                className="bg-white/[0.03] border border-white/[0.09] rounded-[10px] text-white text-[13px] px-4 py-3 outline-none placeholder:text-white/16 focus:border-emerald-500/35 focus:bg-emerald-500/[0.03] transition-colors duration-200 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] uppercase tracking-[.12em] text-white/28">
                Email
              </label>
              <input
                name="from_email" // التعديل 2: خليناها from_email عشان ماتعملش مشاكل مع الـ Reply-To
                type="email"
                placeholder="your@email.com"
                required
                className="bg-white/[0.03] border border-white/[0.09] rounded-[10px] text-white text-[13px] px-4 py-3 outline-none placeholder:text-white/16 focus:border-emerald-500/35 focus:bg-emerald-500/[0.03] transition-colors duration-200 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-[.12em] text-white/28">
              Subject
            </label>
            <div className="relative w-full">
              <select
                name="subject" // التعديل 3: ضفنا اسم الحقل عشان يروح لـ {{subject}}
                defaultValue=""
                required
                className="w-full appearance-none bg-white/[0.04] border border-white/[0.08] text-white/80 text-[13px] px-4 py-3 pr-10 rounded-xl outline-none transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 focus:border-emerald-500/40 focus:bg-emerald-500/[0.03]"
              >
                <option
                  disabled
                  value=""
                  className="bg-neutral-900 text-white/50"
                >
                  Select a topic...
                </option>
                <option className="bg-neutral-900 text-white/80">
                  Freelance project
                </option>
                <option className="bg-neutral-900 text-white/80">
                  Full-time opportunity
                </option>
                <option className="bg-neutral-900 text-white/80">
                  Collaboration
                </option>
                <option className="bg-neutral-900 text-white/80">
                  Just saying hi
                </option>
              </select>

              {/* custom arrow */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
                ▾
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[11px] uppercase tracking-[.12em] text-white/28">
              Message
            </label>
            <textarea
              name="message" // مطابق لـ {{message}} في التمبلت
              rows={5}
              placeholder="Tell me about your project or idea..."
              required
              className="bg-white/[0.03] border border-white/[0.09] rounded-[10px] text-white text-[13px] px-4 py-3 outline-none placeholder:text-white/16 focus:border-emerald-500/35 focus:bg-emerald-500/[0.03] transition-colors duration-200 w-full resize-none leading-relaxed"
            />
          </div>

          <div className="h-px bg-white/[0.06]" />

          <div className="flex items-center gap-4 mt-1">
            {/* التعديل 4: غيرنا الـ button ليتناسب مع حالة الـ loading */}
            <button
              type="submit"
              disabled={loading}
              className="relative overflow-hidden bg-emerald-500/[0.06] border border-emerald-500/15 text-emerald-400 text-[13px] font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 hover:bg-emerald-500/[0.12] hover:border-emerald-500/30 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send message"}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
            <span className="text-[12px] text-white/30">
              I usually reply within 24h
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
