import {useEffect, useRef} from "react";
import gsap from "gsap";
import {lerp} from "@/utils/lerp";

export const GradientCursor = ({isHovered}) => {
  const size = isHovered ? 400 : 30;
  const mouse = useRef({x: 0, y: 0});
  const circles = useRef([]);
  const delayedMouse = useRef({x: 0, y: 0});
  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

  const mouseMoveEvent = (e) => {
    const {clientX, clientY} = e;
    mouse.current.x = clientX; // - size / 2;
    mouse.current.y = clientY; // - size / 2;
  };

  const moveCircle = (x, y) => {
    circles.current.forEach((circle) => {
      gsap.to(circle, {
        x,
        y,
        xPercent: -50,
        yPercent: -50,
      });
    });
  };

  const animate = () => {
    const {x, y} = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.085),
      y: lerp(y, mouse.current.y, 0.085),
    };
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
    <>
      {colors.map((color, index) => (
        <div
          key={color}
          ref={(ref) => (circles.current[index] = ref)}
          className="fixed top-0 left-0 rounded-full mix-blend-difference pointer-events-none "
          style={{
            background: color,
            width: size * index * 0.2,
            height: size * index * 0.2,
            filter: `blur(${isHovered ? 30 : 10}px)`,
            transition: `width 0.3s ease-out, height 0.3s ease-out, border 0.3s ease-out, transform ${0.05 * index}s linear`,
          }}
        />
      ))}
    </>
  );
};
