"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const Homebansample = () => {
  useEffect(() => {
    const timelineHeader = gsap.timeline({
      scrollTrigger: {
        id: "ZOOM", 
        trigger: "#header-zoom",
        scrub: true, 
        // start: "top", 
        // end: "bottom", 
        pin: true, 
      }
    });
  
    timelineHeader
      .to(".image-1", { scale: 1.1 }, "sameTime")
      .to(".image-2", { scale: 5 }, "sameTime");
  
    return () => {
      timelineHeader.kill();
    };
  }, []);
  

  return (
    
  <section id="header-zoom">
    <div class="zoom">
      <figure class="image image-1 relative ">
        <Image src="/bannerimages.png" alt="" fill ></Image>
      </figure>
      <figure class="image image-2 relative ">
        <Image src="/herobannerfront.png" alt="" fill></Image>
      </figure>
    </div>
  </section>
  );
};

export default Homebansample;