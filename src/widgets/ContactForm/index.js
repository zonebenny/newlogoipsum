"use client"
import React, { useEffect, useState } from 'react';
import { pagedata } from '@/app/data';
import Image from 'next/image';
import FormContact from '@/components/FormContact';
import './style.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const [contentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!contentVisible);

  };

  useEffect(() => {
    gsap.set([".formImg", ".formTitle"], {
      x: -50,
      opacity: 0
    });
        
    gsap.to(".formImg", {
      duration: 1,
      delay: 0.5,
      x: 0,
      opacity: 1,
      stagger: {
        amount: 0.1,
        from: "start" 
      },
      scrollTrigger: {
        trigger: ".contactWrapper", 
        start: "top bottom", 
        end: "bottom top"
      }
    });
    
    gsap.to(".formTitle", {
      duration: 1,
      delay: 1.5,
      x: 0,
      opacity: 1,
      stagger: {
        amount: 0.1,
        from: "start" 
      },
      scrollTrigger: {
        trigger: ".contactWrapper", 
        start: "top bottom", 
        end: "bottom "
      }
    });
  }, []);
  

  return (
    <section className='py-[50px] 2xl:py-[150px] relative contactWrapper'>
      <div className='container'>
        <div className='flex flex-wrap xl:flex-nowrap gap-[50px] xl:gap-[112px] justify-center'>
          <div className='lg:max-w-[578px] w-full  rounded-lg wrap-image'>
            <figure className='relative pb-[131.198%]'>
              <Image src='/contactimg.png' className='formImg ' alt='contactimg' fill />
            </figure>
          </div>
          <div id='contactForm' className='max-w-[675px]'>
            <h3 className='text-3xl 2xl:text-[50px] font-cormorantFont font leading-8 2xl:leading-[50px] text-custom-black max-w-[491px] mb-8 2xl:mb-[90px] formTitle'>
              {pagedata?.formdatasection?.title}
            </h3>
            <FormContact />
          </div>
        </div>
      </div>
      <div className='relative hidden 2xl:block'>
      <div className='avatarImg ' onClick={toggleContent}>
        <Image src='/avatar.png' width={240} height={240} alt='avar' />
      {contentVisible && (
        <div className='contentBox flex justify-center items-center rounded-xl speech-bubble'>
          <p className='text-2xl text-custom-line-bgcolor font-bold italic  '>How are you?</p>
        </div>
      )}
      </div>

      </div>
    </section>
  );
};

export default ContactForm;



// "use client"
// import React, { useState } from 'react';
// import Button from '@/components/Button';
// import Image from 'next/image';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     typeofevent:'',
//     noofguests: '',
//     estimatedbudget:'',
//     date:'',
//     eventlocation: '',
//     message: ''
//   });

//   const handleChange = (event) => {
//     const { id, value } = event.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   return (
//     <div className='py-[150px]'>
//       <div className='container'>
//         <div className='flex gap-[112px]'>
//           {/* <div className='max-w-[578px]'>
//               <Image src='/contactimg.png' width="578" height="757" alt="conactimg"></Image>
//           </div> */}
//          <div className='max-w-[578px] w-full'>
//           <figure  className='relative  pb-[131.198%]' >
//               <Image src='/contactimg.png' className='object-cover'  alt="conactimg" fill></Image>
//           </figure>
//          </div>
        
//           <div id="contactForm" className='max-w-[675px]'>
//             <h3 className='text-[50px] font-cormorantFont font leading-[50px] text-custom-black max-w-[491px] mb-[90px]'>EXCITED TO ENGAGE WITH OUR TEAM?</h3>
//             <form >
//               <div className='flex flex-wrap '>
//                   <div className='mb-[45px] w-1/2 pr-[30px]'>
//                       <label className='block' >Name*</label>
//                       <input className='border-b-2 w-full outline-none' type="text" id="name"   value={formData.name} onChange={handleChange} />
//                   </div>
//                   <div className='mb-[45px]  w-1/2 '>
//                       <label className='block' >Email*</label>
//                       <input className='border-b-2 w-full outline-none' type="email" id="email"  value={formData.email} onChange={handleChange} />
//                   </div>
//                   <div className='mb-[45px] w-1/2 pr-[30px]'>
//                       <label className='block' >mobile*</label>
//                       <input className='border-b-2 w-full outline-none' type="text" id="mobile"  value={formData.mobile} onChange={handleChange} />
//                   </div>
//                   <div className='mb-[45px] w-1/2 '>
//                       <label className='block' >Type of event*</label>
//                       <input className='border-b-2 w-full outline-none' type="text" id="typeofevent"  value={formData.typeofevent} onChange={handleChange} />
//                   </div>
//                   <div className='mb-[45px] w-1/2 pr-[30px]'>
//                       <label className='block' >Number of guests*</label>
//                       <input className='border-b-2 w-full outline-none' type="text" id="noofguests"  value={formData.noofguests} onChange={handleChange} />
//                   </div>
//                   <div className='mb-[45px] w-1/2 '>
//                       <label className='block' >Type of event*</label>
//                       <input className='border-b-2 w-full outline-none' type="text" id="estimatedbudget"  value={formData.estimatedbudget} onChange={handleChange} />
//                   </div>
//                   <div className='mb-[45px] w-1/2 pr-[30px]'>
//                       <label className='block' >Date*</label>
//                       <input className='border-b-2 w-full outline-none' type="text" id="date"  value={formData.date} onChange={handleChange} />
//                   </div>
//                   <div className='mb-[45px] w-1/2 '>
//                       <label className='block'>Event location*</label>
//                       <input className='border-b-2 w-full outline-none' type="text" id="eventlocation"  value={formData.eventlocation} onChange={handleChange} />
//                   </div>
//                   <div className='w-full mb-10 '>
//                       <label className='block mb-4' >Tell us About Your Event*</label>
//                       <textarea className='border-b-2 w-full resize-none outline-none' id="message"  value={formData.message} onChange={handleChange} ></textarea>
//                   </div>
//               </div>
//                 <Button  href="/submit" variant="btnPrimary" outline="outline-Secondary" name="Submit"></Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
