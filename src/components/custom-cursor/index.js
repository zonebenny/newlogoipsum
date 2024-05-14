"use client"
import React, {useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  // Reference to the cursor element
  const cursorRef = useRef(null);
  // State to track cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });

 

  useEffect(() => {
    // Event listener for mouse movement
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
  

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    

    };
  }, []); 
  return (
 

    <div
   
        style={{ top: position.y, left: position.x }}
        ref={cursorRef}
        className={`fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-linear duration-0 rounded-full w-3 h-3 bg-[#e75f31] `}>
    

    </div>

  );
};

export default CustomCursor;