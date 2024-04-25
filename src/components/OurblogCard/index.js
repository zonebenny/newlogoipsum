"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { pagedata } from '@/app/data'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./style.css"


const OurblogCard = () => {

  return (
    
    <div className='flex flex-wrap xl:flex-nowrap gap-[30px] justify-center xl:justify-start '>
        {pagedata?.ourblogsection?.content?.map((item,index)=>(
          <div key={index} className='max-w-[435px] w-full blogImgWrap '>
         
              <figure className='relative pb-[70.28%] overflow-hidden rounded-lg sliderModel '>
                <Image src={item?.image} fill alt="image" className='  object-cover  cursor-pointer blogImg  blogImgs '/>
              <div className='mt-6 xl:mt-[30px] blogContent '>
                <span className='text-base text-custom-white font-normal leading-4  mb-2 xl:mb-5 block opacity-80'>{item?.date}</span>
                <p className='text-lg text-[23px] font-light text-custom-white leading-7 opacity-80'>{item?.description}</p>
              </div>
              </figure>
           
           
           </div>
        ))}
        
    </div>
  )
}

export default OurblogCard;

// "use client"
// import React, { useEffect } from 'react'
// import Image from 'next/image'
// import { pagedata } from '@/app/data'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// import "./style.css"


// const OurblogCard = () => {
//   useEffect(() => {
  
//     const tl = gsap.timeline({
//         scrollTrigger: {
//           scrub:true,
//           trigger: ".blogImgWrap",
//           start: "top center",
//           end: "bottom 60%",
//           once: true,
//         },
//       });
      
//       tl.fromTo(".blogImg", {
//         yPercent: -10,
//         ease:'power3.inOut'
//       }, {
//         yPercent: 10,
//         ease:'power3.inOut'
//       });
//   }, 

//   []);
//   return (
    
//     <div className='flex flex-wrap xl:flex-nowrap gap-[30px] justify-center xl:justify-start '>
//         {pagedata?.ourblogsection?.content?.map((item,index)=>(
//           <div key={index} className='max-w-[435px] w-full blogImgWrap '>
         
//               <figure className='relative pb-[70.28%] overflow-hidden rounded-lg  '>
//                 <Image src={item?.image} fill alt="image" className='  object-cover  cursor-pointer blogImg scale-[1.2] blogImgs '/>
//               </figure>
           
           
//               <div className='mt-6 xl:mt-[30px]'>
//                 <span className='text-base text-custom-white font-normal leading-4  mb-2 xl:mb-5 block opacity-80'>{item?.date}</span>
//                 <p className='text-lg text-[23px] font-light text-custom-white leading-7 opacity-80'>{item?.description}</p>
//               </div>
//            </div>
//         ))}
        
//     </div>
//   )
// }

// export default OurblogCard