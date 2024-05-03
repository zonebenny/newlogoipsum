"use client"
import React, { useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { pagedata } from '@/app/data';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const Instagrampages = () => {
  useLayoutEffect(() => {
    if (window.innerWidth > 1024) { 
      const tl = gsap.timeline();
      const rule = CSSRulePlugin.getRule('.imageContainer:after');
  
      tl
        .to(rule, { duration: 1, width: '100%', ease: 'Power2.ease' })
        .set(rule, { duration: 0.5, right: 0, left: 'unset' })
        .to(rule, { duration: 1, width: '0%', ease: 'Power2.ease' })
        .to('img', { duration: 0.2, opacity: 1, delay: -1 })
        .from('.imageContainer img', { duration: 1, scale: 1.4, ease: 'Power2.easeInOut', delay: -1.2 });

      ScrollTrigger.create({
        trigger: '.instaPage',
        start: 'top 80%', 
        end: 'bottom 20%', 
        animation: tl,
        // once: true
      });
    }
  }, []);

  return (
    <section className='bg-custom-beige-color py-[50px] 2xl:py-[150px] instaPage'>
      <div className='container '>
        <div className='flex flex-wrap justify-center gap-5 overflow-hidden'>
          {pagedata?.instagramsection?.instadata?.tabs?.map((ele, index) => (
            <div key={index} className='instaWrap max-w-[326px] w-full overflow-hidden rounded-lg instaImage'>
              <figure className='relative pb-[100%] imageContainer'>
                <Image src={ele?.image} fill alt={ele?.alt} className='instaImg object-cover'/>
              </figure>
            </div>
          ))}
          <div className='instaWrap bg-custom-darkgrey-color max-w-[326px] w-full p-[42px] flex justify-center items-center text-center rounded-lg cursor-pointer group instaImg'>
            <div className='group-hover:opacity-100 opacity-80 '>
              <Image className='m-auto ' src={pagedata?.instagramsection?.instadata?.logo} width={24} height={24} alt='instagramlog'/>
              <span className='text-[20px] 2xl:text-[30px] font-cormorantFont leading-5  2xl:leading-8 text-custom-white  font-light py-5 block'>{pagedata?.instagramsection?.instadata?.subtitle}</span>
              <Link className='relative hover:opacity-100' href={pagedata?.instagramsection?.instadata?.link?.url}>
                <span className=' block  text-custom-white  text-[15px] leading-5  borderline border-b-[1px] border-custom-white border-opacity-80 w-[max-content] m-auto '>{pagedata?.instagramsection?.instadata?.link?.text}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagrampages;


// "use client"
// import React, {  useLayoutEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
// import "./style.css"


// import { pagedata } from '@/app/data'


// const Instagrampages = () => {
//   useLayoutEffect(() => {
//     gsap.set(".instaImg", {
//       x: -50,
//       opacity: 0
//     });
  
//     gsap.to(".instaImg", {
//       duration: 0.3,
//       // delay: 1,
//       x: 0,
//       opacity: 1,
//       // each:1,
//       stagger: {
//         each: 0.3,
//         // amount: 0.1,
//         from: "start" 
//       },
//       scrollTrigger: {
//         trigger: ".instaPage", 
//         start: "top bottom", 
//         end: "bottom ", 
    
//       }
//     });
//   }, []);
  
  
//   return (
//     <section className='bg-custom-beige-color py-[50px] 2xl:py-[150px] instaPage'>
//       <div className='container '>
//           <div className=' flex flex-wrap justify-center gap-5 overflow-hidden'>{pagedata?.instagramsection?.instadata?.tabs?.map((ele, index) => (
//             <div key={index} className='instaWrap max-w-[326px] w-full overflow-hidden rounded-lg instaImage'>
//               <figure className='relative pb-[100%] '  >
//                 <Image src={ele?.image} fill alt={ele?.alt} className='instaImg'/>
//               </figure>
//             </div>
//           ))}
//             <div className='instaWrap bg-custom-darkgrey-color max-w-[326px] w-full p-[42px] flex justify-center items-center text-center rounded-lg cursor-pointer group instaImg'>
//               <div className='group-hover:opacity-100 opacity-80 '>
//                 <Image className='m-auto ' src={pagedata?.instagramsection?.instadata?.logo} width={24} height={24} alt='instagramlog'/>
//                  <span className='text-[20px] 2xl:text-[30px] font-cormorantFont leading-5  2xl:leading-8 text-custom-white  font-light py-5 block'>{pagedata?.instagramsection?.instadata?.subtitle}</span>
//                 <Link className='relative hover:opacity-100' href={pagedata?.instagramsection?.instadata?.link?.url}>
//                   <span className=' block  text-custom-white  text-[15px] leading-5  borderline border-b-[1px] border-custom-white border-opacity-80 w-[max-content] m-auto '>{pagedata?.instagramsection?.instadata?.link?.text}</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//       </div>
//     </section>
//   )
// }

// export default Instagrampages