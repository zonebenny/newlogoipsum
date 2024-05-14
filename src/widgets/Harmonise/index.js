// "use client"
// import React, { useLayoutEffect, useRef } from 'react';
// import Image from 'next/image';
// import { pagedata } from '@/app/data';
// import Button from '@/components/Button';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
// import "./style.css";

// const Harmonise = () => {
//   const counters = useRef([]);

//   useLayoutEffect(() => {
//     if (window.innerWidth > 1024) { 
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".harmoniseImgBlock",
//           start: "top center",
//           end: "bottom ",
//           scrub: 3
//         },
//       });
      
//       tl.fromTo(".harmoniseImg", {
//         y: -30,
//         ease: 'none'
//       }, {
//         y: 30,
//         ease: 'none',
//         duration: 0.3
//       });

//       gsap.set(".harmoniseTitle", {
//         x: -50, 
//         opacity: 0
//       });
    
//       gsap.to(".harmoniseTitle", {
//         duration: 1,
//         delay: 0.2,
//         x: 0,
//         opacity: 1,
//         stagger: {
//           from: "start" 
//         },
//         scrollTrigger: {
//           trigger: ".harmonisewrap", 
//           start: "top bottom", 
//           end: "+=500"
//         }
//       });

//       counters.current.forEach((counter, index) => {
//         const updateCount = () => {
//           const target = +counter.getAttribute('data-target');
//           const count = +counter.innerText;
//           const increment = target / 100;

//           if(count < target) {
//             counter.innerText = Math.ceil(count + increment );
//             requestAnimationFrame(updateCount);
//           } else {
//             counter.innerText = target;
//           }
//         };

//         gsap.to(counter, {
//           scrollTrigger: {
//             trigger: counter,
//             start: "top bottom",
//             onEnter: updateCount
//           }
//         });
//       });
//     }
//   }, []);

//   return (
//     <section className='harmonisewrap'>
//       <div className='container'>
//         <div className='block lg:flex gap-[50px] 2xl:gap-[105px] py-6 md:py-[50px] 2xl:py-[150px] harmoniseImgBlock'>
//           <div className='lg:max-w-[536px] w-full featured-img'>
//             <figure className="relative pb-[109%] lg:pb-[131.346%] overflow-hidden rounded-lg">
//               <Image className='harmoniseImg lg:scale-[1.2] object-contain' src="/harmoniseimg.png" fill alt='sec-img' />
//             </figure>
//           </div>
//           <div className='flex flex-col justify-center pt-8 lg:pt-0'>
//             <h2 className='text-3xl md:text-4xl xl:text-[59px] font-cormorantFont font-normal xl:leading-[60px] text-custom-black pb-[20px] 2xl:pb-[50px] harmoniseTitle'>{pagedata?.harmonisearea?.title}</h2>
//             <div className='harmoniseTitle'>
//               <Button href={pagedata?.harmonisearea?.about_us_btn?.url} variant="btnPrimary" outline="outline-Secondary" name={pagedata?.harmonisearea?.about_us_btn?.text} />
//             </div>
//             <div className='flex flex-wrap 2xl:flex-nowrap gap-5 2xl:gap-0 md:justify-evenly 2xl:justify-between pt-[20px] 2xl:pt-[80px] conter'>
//               {pagedata?.harmonisearea?.content?.map((item, index) => (
//                 <div key={index} className='py-6'>
//                   <span 
//                     className='block text-[45px] xl:text-[80px] text-custom-counter-color leading-[45px] xl:leading-[93px] font-light font-workSans counter' 
//                     data-target={item.title} 
//                     ref={el => counters.current[index] = el}>
//                     0
//                   </span>
//                   <span className='block text-base xl:text-[18px] text-custom-counter-textcolor leading-4 xl:leading-[20px] font-normal font-workSans'>{item?.description}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Harmonise;
// ***************************************************************
"use client"
import React, { useLayoutEffect } from 'react';
import Image from 'next/image';
import { pagedata } from '@/app/data';
import Button from '@/components/Button';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import "./style.css";

const Harmonise = () => {
  useLayoutEffect(() => {
    if (window.innerWidth > 1024) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".harmoniseImgBlock",
          start: "top center",
          end: "bottom ",
          scrub: 3
        },
      });

      tl.fromTo(".harmoniseImg", {
        y: -30,
        ease: 'none'
      }, {
        y: 30,
        ease: 'none',
        duration: 0.3
      });

      gsap.set(".harmoniseTitle", {
        x: -50,
        opacity: 0
      });

      gsap.to(".harmoniseTitle", {
        duration: 1,
        delay: 0.2,
        x: 0,
        opacity: 1,
        stagger: {
          from: "start"
        },
        scrollTrigger: {
          trigger: ".harmonisewrap",
          start: "top bottom",
          end: "+=500"
        }
      });

      // Counter animation
    }
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      gsap.fromTo(counter, {
        innerText: 0
      }, {
        innerText: counter.getAttribute('data-target'),
        duration: 2,
        scrollTrigger: {
          trigger: counter,
          start: "top bottom",
          onEnter: () => {
            const endVal = parseInt(counter.getAttribute('data-target'), 10);
            gsap.to(counter, {
              duration: 2,
              innerText: endVal,
              snap: { innerText: 1 },
              ease: 'none',
              onUpdate: () => {
                counter.innerText = Math.ceil(counter.innerText) + '+';
              }
            });
          }
        }
      });
    });

  }, []);

  return (
    <section className='harmonisewrap'>
      <div className='container'>
        <div className='block lg:flex gap-[50px] 2xl:gap-[105px] py-6 md:py-[50px] 2xl:py-[150px] harmoniseImgBlock'>
          <div className='lg:max-w-[536px] w-full featured-img'>
            <figure className="relative pb-[109%] lg:pb-[131.346%] overflow-hidden rounded-lg">
              <Image className='harmoniseImg lg:scale-[1.2] object-contain' src="/harmoniseimg.png" fill alt='sec-img' />
            </figure>
          </div>
          <div className='flex flex-col justify-center pt-8 lg:pt-0'>
            <h2 className='text-3xl md:text-4xl xl:text-[59px] font-cormorantFont font-normal xl:leading-[60px] text-custom-black pb-[20px] 2xl:pb-[50px] harmoniseTitle'>
              {pagedata?.harmonisearea?.title}
            </h2>
            <div className='harmoniseTitle'>
              <Button href={pagedata?.harmonisearea?.about_us_btn?.url} variant="btnPrimary" outline="outline-Secondary" name={pagedata?.harmonisearea?.about_us_btn?.text} />
            </div>
            <div className='flex flex-wrap 2xl:flex-nowrap gap-5 2xl:gap-0 md:justify-evenly 2xl:justify-between pt-[20px] 2xl:pt-[80px]'>
              {pagedata?.harmonisearea?.content?.map((item, index) => (
                <div key={index} className='py-6 2xl:w-[200px]'>
                  <span className='counter block text-[45px] xl:text-[80px]  text-custom-counter-color leading-[45px] xl:leading-[93px] font-light font-workSans' data-target={item.title}>
                    0
                  </span>
                  <span className='block text-base xl:text-[18px] text-custom-counter-textcolor leading-4 xl:leading-[20px] font-normal font-workSans'>
                    {item?.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Harmonise;







// ***************************************************************
// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { pagedata } from '@/app/data';
// import Button from '@/components/Button';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// const Harmonise = () => {

//     useEffect(() => {
//         const element = document.querySelector(".harmonisewrap");
//         gsap.set(element, {
//             x: -500,
//             opacity: 0
//         });
//         gsap.to(element, {
//             x: 0,
//             duration: 2,
//             opacity: 1,
//             scrollTrigger:{
//                 trigger: element,
//                 start: "top bottom",
//                 end: "top top",
//                 scrub: true,
//             }
//         });
//     }, []);
 

//     return (
//         <section className='harmonisewrap'>
//             <div className='container'>
//                 <div className='block lg:flex  gap-[50px] 2xl:gap-[105px]  py-6 md:py-[50px] 2xl:py-[150px] '>
//                     <div className='lg:max-w-[536px] w-full'>
//                         <figure className="relative pb-[131.346%] overflow-hidden rounded-lg">
//                             <Image className='drive-img' src="/harmoniseimg.png" fill alt='sec img' />
//                         </figure>
//                     </div>
//                     <div className=' flex flex-col justify-center pt-8 lg:pt-0 '>
//                         <h2  className='text-3xl md:text-4xl  xl:text-[59px] font-cormorantFont font-normal  xl:leading-[60px] text-custom-black pb-[20px] 2xl:pb-[50px]'>{pagedata?.harmonisearea?.title}</h2>
//                         <Button href={pagedata?.harmonisearea?.about_us_btn?.url} variant="btnPrimary" outline="outline-Secondary" name={pagedata?.harmonisearea?.about_us_btn?.text} />
//                         <div className='flex flex-wrap 2xl:flex-nowrap gap-5 2xl:gap-0 md:justify-evenly 2xl:justify-between pt-[20px] 2xl:pt-[80px]'>
//                             {pagedata?.harmonisearea?.content?.map((item, index) => (
//                                 <div key={index} className='py-6'>
//                                     <span className='block text-[45px] xl:text-[80px] text-custom-counter-color leading-[45px] xl:leading-[93px] font-light font-workSans'>{item.title}+</span>
//                                     <span className='block text-base xl:text-[18px] text-custom-counter-textcolor leading-4 xl:leading-[20px] font-normal font-workSans'>{item?.description}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Harmonise;






// import React from 'react'
// import Image from 'next/image'
// import { pagedata } from '@/app/data'
// import Button from '@/components/Button'

// const Harmonise = () => {
//     return (
//         <div className='container'>
//             <div className='flex gap-[105px]  py-[150px]'>
//                 <div className='max-w-[536px] w-full overflow-hidden rounded-lg'>
//                     <figure className='relative pb-[131.344%] hover:scale-105 transition-all duration-1000 ease-in-out '>
//                         <Image src="/harmoniseimg.png" fill alt='sec img' ></Image>
//                     </figure>
//                 </div>
//                 <div className='py-[60px]'>
//                     <h2 className='text-[59px] font-cormorantFont font-normal leading-[81px] text-custom-black pb-[50px]'>{pagedata.harmonisearea.title}</h2>
//                     <Button href={pagedata.harmonisearea.about_us_btn.url} variant="btnPrimary" outline="outline-Secondary" name={pagedata.harmonisearea.about_us_btn.text}></Button>
//                     <div className='flex justify-between pt-[80px]'>{pagedata.harmonisearea.content.map((item, index) => (
//                         <div key={index}>
//                             <span className='block text-[80px] text-custom-counter-color leading-[93px] font-light font-workSans'>{item.title}+</span>
//                             <span className='block text-[18px] text-custom-counter-textcolor leading-[20px] font-normal font-workSans'>{item.description}</span>
//                         </div>
//                     ))}</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Harmonise