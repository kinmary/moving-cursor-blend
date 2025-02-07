import {useEffect, useRef} from "react";
import gsap from "gsap";
import { lerp } from "@/utils/lerp";

export const Cursor = ({isHovered}) => {
  const size = isHovered ? 600 : 30;
  const mouse = useRef({x: 0, y: 0});
  const circle = useRef();
  const delayedMouse = useRef({x:0, y:0});

  const mouseMoveEvent = (e) => {
    const {clientX, clientY} = e;
    mouse.current.x = clientX; // - size / 2;
    mouse.current.y = clientY; // - size / 2;
  };

  const moveCircle = (x, y) => {
    gsap.set(circle.current, {x, y, xPercent: -50, yPercent: -50});
  };

  const animate = () => {
    const {x,y} = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.085),
      y: lerp(y, mouse.current.y, 0.085),
    }
    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", mouseMoveEvent);

    return () => {
      window.removeEventListener("mousemove", mouseMoveEvent);
    };
  }, []);
  return (
    <div
      ref={circle}
      className="fixed top-0 left-0 bg-[yellow] rounded-full mix-blend-difference pointer-events-none "
      style={{
        width: size,
        height: size,
        filter: `blur(${isHovered ? 30 : 0}px)`,
        transition: "width 0.3s ease-out, height 0.3s ease-out, border 0.3s ease-out",
      }}
    />
  );
};
