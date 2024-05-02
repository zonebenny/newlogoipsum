"use client"
import { pagedata } from '@/app/data';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);
import "./style.css";

const AchivementSection = () => {
  useLayoutEffect(() => {
   
    if (window.innerWidth > 1024) { 
      gsap.fromTo(
        ".cardWrap:not(:first-child)",
        {
          y: () => window.innerWidth / 2 + 600,
        },
        {
          y: 0,
          stagger: 0.1,
          duration: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cardWrap", 
            start: "top center",
            end: "+=500",
            once: true
          }
        }
      );
    }
  }, []); 

  return (
    <div className='ourvalue-wrapper overflow-hidden flex flex-wrap justify-center xl:flex-nowrap mb-[80px]'>
      {pagedata?.awardssection?.content?.map((item, index) => (
        <div className='cardWrap border-2 border-custom-wheat-color border-opacity-50 p-6 2xl:py-[41px] 2xl:px-[38px] max-w-[341px] w-full' key={index}>
          <div className='max-w-[172px] w-full mb-10 m-auto'>
            <figure className='relative pb-[100%]'>
              <Image src={item?.image} alt="sdsdsds" fill className='awardImages' />
            </figure>
          </div>
          <span className='block text-lg xl:text-xl font-medium leading-5 text-center text-custom-line-bgcolor opacity-80'>{item?.description}</span>
        </div>
      ))}
    </div>
  );
}

export default AchivementSection;


