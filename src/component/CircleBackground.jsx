import React from "react";
import { useEffect, useState } from "react";

export default function CircleBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { x, y } = mouse;
  useEffect(() => {
    // handle mouse move cursor not touch screen
    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", (e) =>
        setMouse({ x: e.clientX, y: e.clientY }),
      );
    }

    return () => {
      window.removeEventListener("mousemove", (e) =>
        setMouse({ x: e.clientX, y: e.clientY }),
      );
    };
  }, []);

  return (
    <div
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
      className="fixed h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial opacity-30 md:h-[1000px] md:w-[1000px] lg:h-[1500px] lg:w-[1500px]"
    ></div>
  );
}
