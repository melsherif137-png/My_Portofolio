import { useEffect, useRef } from "react";

const interactiveSelector =
  "a, button, input, textarea, select, [role='button'], [tabindex]:not([tabindex='-1'])";

const CursorFollower = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!canHover.matches || reduceMotion.matches) {
      return undefined;
    }

    const cursor = cursorRef.current;
    if (!cursor) return undefined;

    let frameId = 0;
    let visible = false;
    let isActive = false;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.16;
      cursorY += (mouseY - cursorY) * 0.16;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(${isActive ? 1.75 : 1})`;

      frameId = requestAnimationFrame(render);
    };

    const setVisible = (nextVisible) => {
      visible = nextVisible;
      cursor.style.opacity = visible ? "1" : "0";
    };

    const handlePointerMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      isActive = Boolean(event.target.closest(interactiveSelector));

      cursor.classList.toggle("cursor-follower--active", isActive);
      if (!visible) setVisible(true);
    };

    const handlePointerLeave = () => setVisible(false);
    const handlePointerDown = () => cursor.classList.add("cursor-follower--down");
    const handlePointerUp = () => cursor.classList.remove("cursor-follower--down");

    frameId = requestAnimationFrame(render);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <span ref={cursorRef} className="cursor-follower" aria-hidden="true" />
  );
};

export default CursorFollower;
