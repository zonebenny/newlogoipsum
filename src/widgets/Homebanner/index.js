// "use client";
// import React, { useLayoutEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const HomeBanner = () => {
//   const bannerRef = useRef(null);
//   const cameraImgRef = useRef(null);
//   const enable = useRef(true);

//   useLayoutEffect(() => {
//     const bannerElement = bannerRef.current;
//     const animationElement = cameraImgRef.current;

//     // gsap.set(animationElement, {
//     //   scale: 1,
//     // });

//     const scaleBox = (output) => {
//       gsap.to(animationElement, {
//         scale: output,
//       });
//     };

//     let timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: bannerElement,
//         pin: true,
//         // markers: true,

//         // start: "top",
//         // end: "+=200%",
//         onUpdate: (e) => {
//           const output = Math.round(e.progress * 9) + 1;
//           if (enable.current) {
//             scaleBox(output);
//           }
//         },

//         onLeave: () => (enable.current = false),
//       },
//     });

//     // timeline.to(animationElement, {
//     //   scale: 12,
//     //   ease: "none",
//     // });

//     return () => {
//       timeline.kill();
//     };
//   }, [bannerRef, cameraImgRef]);

//   return (
//     <section
//       ref={bannerRef}
//       className="banner-sec  relative homeBanner overflow-hidden"
//     >
//       <figure className="relative pb-[52.165%] scale-100 banner-img w-full h-screen">
//         <Image
//           loading="eager"
//           priority={true}
//           src="/bannerimages.png"
//           fill
//           objectFit="cover"
//           alt="banner"
//         />
//       </figure>
//       {/* <figure  ref={cameraImgRef} className="absolute top-0  left-0 w-full overflow-hidden scale-100  -translate-y-[530px]  pb-[80%] camera-img">
//         <Image src="/bgle.png" fill alt="banner" />
//       </figure> */}
//       <figure
//         ref={cameraImgRef}
//         className="absolute top-0  left-0 w-full overflow-hidden scale-100  -translate-y-[404px]  pb-[73%] camera-img"
//       >
//         <Image src="/bglenssdd.png" fill alt="banner" />
//       </figure>
//       {/* <figure
//         ref={cameraImgRef}
//         className="absolute top-0  left-0 w-full overflow-hidden transform translate-x-[-325px] translate-y-[-163px]  pb-[73%] camera-img">
//         <Image src="/camerimg.png" fill alt="banner" />
//       </figure> */}
//     </section>
//   );
// };

// export default HomeBanner;

// "use client"
// import React, { useEffect } from 'react';
// import { gsap , timeline} from 'gsap'; // Import GSAP directly
// import Image from 'next/image';
// import "./style.css";

// const Homebanner = () => {

//   useEffect(() => {
//     let tl = gsap.timeline();

//     tl.to(".courtine", { height: 0 , stagger: 0.3 });

//   }, []);

//   return (
//     <section className='relative overflow-hidden'>
//       <div className='containerss '>
//         <figure>
//           <Image  src="/bannerimages.png" fill alt='homebanner'/>
//         </figure>
//         <div class="courtine"></div>
//         <div class="courtine"></div>
//         <div class="courtine"></div>
//       </div>
//       {/* <div className='w-full overflow-hidden'>
//         <figure className='relative pb-[52.165%] z-[-1]'>
//           <Image className="image " src="/bannerimages.png" fill alt='homebanner'/>
//         </figure>

//       </div> */}
//       <div className='hidden 2xl:block'>
//         <div className='bg-custom-gradient w-[354px] h-[138px] flex px-[22px] py-[26px] justify-between rounded-lg absolute right-[138px] bottom-[69px]'>
//           <div className='flex items-center'>
//             <Image src="/awardlogo.png" width={105} height={94} alt="award logo"/>
//           </div>
//           <div><span className='w-[2px] h-full bg-custom-white block opacity-40'></span></div>
//           <div className='w-[161px]'>
//             <span className='text-custom-white opacity-80 text-[27px] font-light leading-6'>ABIA AWARD WINNER 2023</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Homebanner;

"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import "./style.css"

const Homebanner = () => {
  // useEffect(() => {

  //   const tl = gsap.timeline({
  //       scrollTrigger: {
  //         scrub: 3,
  //         trigger: ".bannerWrapper",
  //         start: "top ",
  //         end: "bottom ",
  //         // pin:true,
  //         // once: true,
  //       },
  //     });

  //     tl.fromTo(".bannerImg", {
  //       yPercent: -10,
  //       ease: 'none'
  //     }, {
  //       yPercent: 10,
  //       ease: 'none'
  //     });
  // }, 

  // []);



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
