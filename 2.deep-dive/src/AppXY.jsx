import React, { useEffect, useRef, useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [XY, setXY] = useState({ x: 0, y: 0 });

  return (
    <div
      className="container"
      onMouseMove={(e) => {
        const x = e.clientX;
        const y = e.clientY;
        setXY({ x, y });
      }}
    >
      <div className="pointer" style={{ transform: `translate(${XY.x}px, ${XY.y}px)` }} />
    </div>
  );
}
