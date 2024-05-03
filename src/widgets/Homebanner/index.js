"use client"
import React, {useLayoutEffect} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import "./style.css";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger);

const Homebanner = () => {

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    const rule = CSSRulePlugin.getRule('.img-container:after');
    const img = '.img-container img';

    tl.to(rule, { duration: 1, width: '100%', ease: 'Power2.ease' })
      .set(rule, { duration: 0.5, right: 0 })
      .to(rule, { duration: 1, width: '0%', ease: 'Power2.ease' })
      .to(img, { duration: 0.2, opacity: 1, delay: -1 })
      .from(img, { duration: 1, scale: 1.4, ease: 'Power2.easeInOut', delay: -1.2 });
    return () => {
      tl.kill(); 
    };
  }, []);

  return (
    <section className=' relative bannerWrapper'>
      <div className='w-full  '>
        <figure className='relative pb-[52.165%]  overflow-hidden img-container'>
          <Image src="/bannerimages.png" fill alt='homebanner' className='bannerImg scale-[1.2] object-cover' loading="eager" priority={true} quality={100} sizes='100vw'  />
        </figure>
      </div>
    </section>
  );
}

export default Homebanner;


// "use client"
// import React, { useLayoutEffect } from 'react'
// import Image from 'next/image'
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
// import "./style.css"
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";

// const Homebanner = () => {


//   useLayoutEffect(() => {

//     const tl = gsap.timeline();

//     const rule = CSSRulePlugin.getRule(".img-container:after");

//     tl
//       .to(rule, 
//         { duration: 1,
//           width: "100%", 
//           ease: "Power2.ease" })
//       .set(rule, 
//         { duration: 0, 
//           right: 0, 
//           left: "unset" })
//       .to(rule, 
//         { duration: 1, 
//           width: "0%", 
//           ease: "Power2.ease" })
//       .to("img", 
//       { duration: 0.2, 
//         opacity: 1, 
//         delay: -1 })
//       .from(".img-container img", {
//         duration: 1,
//         scale: 1.4,
//         ease: "Power2.easeInOut",
//         delay: -1.2
//       });


//   },

//     []);



//   return (
//     <section className=' relative bannerWrapper'>
//       <div className='w-full  '>
//         <figure className='relative pb-[52.165%]  overflow-hidden img-container'>
//           <Image src="/bannerimages.png" fill alt='homebanner' className='bannerImg scale-[1.2] object-cover' loading="eager" priority={true} quality={100} sizes='100vw' />
//         </figure>
//       </div>
//       {/* <div className='hidden 2xl:block'>

//         <div className=' bg-custom-gradient w-[354px] h-[138px] flex px-[22px] py-[26px] justify-between rounded-lg absolute right-[138px] bottom-[69px]'>
//           <div className='flex items-center'>
//             <Image src="/awardlogo.png" width={105} height={94} alt="award logo" />
//           </div>
//           <div><span className='w-[2px] h-full bg-custom-white block opacity-40'></span></div>
//           <div className='w-[161px]'>
//             <span className='text-custom-white opacity-80 text-[25px] font-light leading-6'>ABIA AWARD WINNER 2023</span>
//           </div>
//         </div>
//       </div> */}

//     </section>
//   )
// }

// export default Homebanner
