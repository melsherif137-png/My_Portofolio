import { useRef, useEffect } from "react";

export function ProfileCard() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const spotlightRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let curBx = 0,
      curBy = 0;
    let tgtBx = 0,
      tgtBy = 0;
    let rafId;

    const lerp = (a, b, t) => a + (b - a) * t;

    const animateBg = () => {
      curBx = lerp(curBx, tgtBx, 0.1);
      curBy = lerp(curBy, tgtBy, 0.1);

      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.1) translate(${curBx}px, ${curBy}px)`;
      }

      rafId = requestAnimationFrame(animateBg);
    };

    rafId = requestAnimationFrame(animateBg);

    const outer = outerRef.current;

    const updateCardEffect = (e) => {
      const rect = outer.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Mobile intensity أقل
      const isMobile = window.innerWidth < 1024;
      const intensity = isMobile ? 6 : 12;

      const rx = (y / rect.height - 0.5) * -intensity;
      const ry = (x / rect.width - 0.5) * intensity;

      if (innerRef.current) {
        innerRef.current.style.transform = `
        rotateX(${rx}deg)
        rotateY(${ry}deg)
        scale(1.035)
      `;
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `
          radial-gradient(
            circle 160px at ${x}px ${y}px,
            rgba(255,255,255,0.11),
            transparent 75%
          )
        `;

        spotlightRef.current.style.opacity = "1";
      }

      tgtBx = (x / rect.width - 0.5) * -8;
      tgtBy = (y / rect.height - 0.5) * -8;
    };

    const resetCardEffect = () => {
      if (innerRef.current) {
        innerRef.current.style.transform =
          "rotateX(0deg) rotateY(0deg) scale(1)";
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = "0";
      }

      tgtBx = 0;
      tgtBy = 0;
    };

    // Desktop + Mobile touch support
    outer.addEventListener("pointerenter", updateCardEffect);
    outer.addEventListener("pointermove", updateCardEffect);
    outer.addEventListener("pointerdown", updateCardEffect);

    outer.addEventListener("pointerup", resetCardEffect);
    outer.addEventListener("pointerleave", resetCardEffect);
    outer.addEventListener("pointercancel", resetCardEffect);

    return () => {
      cancelAnimationFrame(rafId);

      outer.removeEventListener("pointerenter", updateCardEffect);
      outer.removeEventListener("pointermove", updateCardEffect);
      outer.removeEventListener("pointerdown", updateCardEffect);

      outer.removeEventListener("pointerup", resetCardEffect);
      outer.removeEventListener("pointerleave", resetCardEffect);
      outer.removeEventListener("pointercancel", resetCardEffect);
    };
  }, []);

  return (
    <div className="h-fit flex items-center justify-center lg:mb-16">
      {/* OUTER */}
      <div
        ref={outerRef}
        className="
          relative
          lg:w-[400px]
          lg:h-[510px]
          w-[310px]
          h-[420px]
          rounded-[24px]
          touch-none
        "
        style={{
          perspective: "900px",
        }}
      >
        {/* INNER */}
        <div
          ref={innerRef}
          className="
            w-full
            h-full
            rounded-[24px]
            overflow-hidden
            border
            border-white/[0.08]
            bg-[#111]
            relative
            will-change-transform
            transition-transform
            duration-[180ms]
            ease-out
          "
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Spotlight */}
          <div
            ref={spotlightRef}
            className="
              absolute
              inset-0
              z-[5]
              pointer-events-none
              opacity-0
              transition-opacity
              duration-200
            "
            style={{
              mixBlendMode: "screen",
            }}
          />

          {/* Background image */}
          <img
            ref={bgRef}
            src="/Photos/photo_2026-05-09_06-04-45.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: "scale(1.1) translate(0px, 0px)",
              willChange: "transform",
            }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 z-[2]"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.38) 50%, transparent 100%)",
            }}
          />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
            <p className="text-white/[0.38] text-[11px] tracking-[2px] uppercase mb-1">
              Hello, I am
            </p>

            <h1 className="text-white text-[22px] font-medium mb-0.5">
              Mohamed Elsherif
            </h1>

            <p className="text-white/[0.38] text-[13px] mb-4">
              software engineer
            </p>

            <div
              className="
                flex
                justify-between
                items-center
                bg-white/[0.07]
                backdrop-blur-md
                border
                border-white/[0.09]
                rounded-[12px]
                p-[10px_14px]
              "
            >
              <span className="text-white/65 text-[13px]">Contact me</span>

              <a
                href="#Contact"
                className="
                  bg-[#295a486f]
                  hover:bg-[#1f3f35]
                  active:bg-[#1f3f35]
                  text-white
                  text-[13px]
                  px-[14px]
                  py-[6px]
                  rounded-[8px]
                  border-none
                  cursor-pointer
                  transition-colors
                  duration-200
                "
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
