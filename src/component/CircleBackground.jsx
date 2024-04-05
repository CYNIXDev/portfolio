import React from "react";

export default function CircleBackground({ y, x }) {
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
