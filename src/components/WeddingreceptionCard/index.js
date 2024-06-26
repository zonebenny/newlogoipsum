"use client"
import React, { useLayoutEffect } from 'react';
import Image from 'next/image';
import { pagedata } from '@/app/data';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import "./style.css";

const WeddingreceptionCard = () => {

  useLayoutEffect(() => {
   
    if (window.innerWidth > 1024) { 
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 3,
          trigger: ".weddingRecWrap",
          start: "top center",
          end: "bottom 60%",
        },
      });
      
      tl.fromTo(".recImg", {
        y: -30,
        // ease: 'none'
      }, {
        y: 30,
        // ease: 'none',
        duration: 0.2,
      });
    }
  }, []);

  return (
    <div className='flex justify-center flex-wrap gap-[50px] weddingRecWrap'>
      {pagedata?.weddingreception?.content?.map((items, index) => (
        <div key={index} className='max-w-[421px] w-full  WeddingRec'>
          <figure className='relative pb-[110%] 2xl:pb-[138.72%] mb-[30px] overflow-hidden rounded-lg'>
            <Image src={items?.image} fill alt='image' className='scale-[1.2]  cursor-pointer  recImg object-cover' />
          </figure>
          <span className='block font-cormorantFont font-normal text-[30px] 2xl:text-[40px] text-center leading-[30px] 2xl:leading-[48px]'>{items?.title}</span>
        </div>
      ))}
    </div>
  );
}

export default WeddingreceptionCard;
