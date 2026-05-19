import { useRef, useEffect } from "react";

export function ProfileCard() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const spotlightRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;

    let rafId;

    // ───────── Desktop state ─────────
    let curX = 0,
      curY = 0;
    let tgtX = 0,
      tgtY = 0;

    const lerp = (a, b, t) => a + (b - a) * t;

    // ───────── Mobile float animation ─────────
    let floatT = 0;

    const animate = () => {
      if (isMobile) {
        // حركة خفيفة جدًا (floating)
        floatT += 0.02;

        const x = Math.sin(floatT) * 6;
        const y = Math.cos(floatT) * 5;
        if (bgRef.current) {
          bgRef.current.style.transform = `
            scale(1.1)
            translate(${x}px, ${y}px)
          `;
        }
      } else {
        // desktop smooth follow
        curX = lerp(curX, tgtX, 0.08);
        curY = lerp(curY, tgtY, 0.08);

        if (bgRef.current) {
          bgRef.current.style.transform = `
            scale(1.1)
            translate(${curX}px, ${curY}px)
          `;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    const outer = outerRef.current;
    if (!outer) return;

    // ───────── Desktop only 3D mouse ─────────
    const updateCardEffect = (e) => {
      if (isMobile) return;

      const rect = outer.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const intensity = 12;

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
        spotlightRef.current.style.opacity = "1";
        spotlightRef.current.style.background = `
          radial-gradient(
            circle 160px at ${x}px ${y}px,
            rgba(255,255,255,0.11),
            transparent 75%
          )
        `;
      }

      tgtX = (x / rect.width - 0.5) * -10;
      tgtY = (y / rect.height - 0.5) * -10;
    };

    const reset = () => {
      if (isMobile) return;

      if (innerRef.current) {
        innerRef.current.style.transform =
          "rotateX(0deg) rotateY(0deg) scale(1)";
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = "0";
      }

      tgtX = 0;
      tgtY = 0;
    };

    if (!isMobile) {
      outer.addEventListener("pointermove", updateCardEffect);
      outer.addEventListener("pointerleave", reset);
    }

    return () => {
      cancelAnimationFrame(rafId);

      if (!isMobile) {
        outer.removeEventListener("pointermove", updateCardEffect);
        outer.removeEventListener("pointerleave", reset);
      }
    };
  }, []);

  return (
    <div className="h-fit flex items-center justify-center lg:mb-16">
      <div
        ref={outerRef}
        className="relative lg:w-[400px] lg:h-[510px] w-[310px] h-[420px] rounded-[24px]"
        style={{ perspective: "900px" }}
      >
        <div
          ref={innerRef}
          className="w-full h-full rounded-[24px] overflow-hidden border border-white/[0.08] bg-[#111] relative will-change-transform transition-transform duration-[180ms] ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* spotlight */}
          <div
            ref={spotlightRef}
            className="absolute inset-0 z-[5] pointer-events-none opacity-0 transition-opacity duration-200"
            style={{ mixBlendMode: "screen" }}
          />

          {/* background */}
          <img
            ref={bgRef}
            src="/Photos/photo_2026-05-09_06-04-45.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: "scale(1.1)" }}
          />

          {/* gradient */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* content (مفيش تغيير) */}
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

            <div className="flex justify-between items-center bg-white/[0.07] backdrop-blur-md border border-white/[0.09] rounded-[12px] p-[10px_14px]">
              <span className="text-white/65 text-[13px]">Contact me</span>

              <a
                href="#Contact"
                className="bg-[#295a486f] hover:bg-[#1f3f35] text-white text-[13px] px-[14px] py-[6px] rounded-[8px]"
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
