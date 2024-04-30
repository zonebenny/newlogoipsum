

"use client"
import React, {  useLayoutEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import "./style.css"

const Homebanner = () => {


  useLayoutEffect(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 3,
          trigger: ".bannerWrapper",
          start: "top center",
          end: "bottom 60%",
          // once: true,
          
        },
      });
      
      tl.fromTo(".bannerImg", {
        y: -50,
        ease: 'none'
      }, {
        y: 50,
        ease: 'none',
        duration:1
      });
  }, 

  []);



  return (
    <section className=' relative bannerWrapper'>
      <div className='w-full  '>
        <figure className='relative pb-[52.165%]  overflow-hidden'>
          <Image src="/bannerimages.png" fill alt='homebanner' className='bannerImg scale-[1.2]' />
        </figure>
      </div>
      <div className='hidden 2xl:block'>

        <div className=' bg-custom-gradient w-[354px] h-[138px] flex px-[22px] py-[26px] justify-between rounded-lg absolute right-[138px] bottom-[69px]'>
          <div className='flex items-center'>
            <Image src="/awardlogo.png" width={105} height={94} alt="award logo" />
          </div>
          <div><span className='w-[2px] h-full bg-custom-white block opacity-40'></span></div>
          <div className='w-[161px]'>
            <span className='text-custom-white opacity-80 text-[25px] font-light leading-6'>ABIA AWARD WINNER 2023</span>
          </div>
        </div>
      </div>

      </section>
        )
}

        export default Homebanner
