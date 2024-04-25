"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import "./style.css"


import { pagedata } from '@/app/data'


const Instagrampages = () => {

  useEffect(() => {
 
    gsap.fromTo(
      ".instaWrap:not(:first-child)",
      {
        x: () => window.innerWidth / 2 + 600,
      
      },
      {
        x: 0,
        stagger: 0.1,
       
        duration: 0.1,
        ease: "power2.out",
       
        scrollTrigger: {
          trigger: ".instaPage", 
          // scrub: true,
          start: "top center",
          end: "top top",
          once:true
         
        }
      }
    );
  }

, []); 

  return (
    <section className='bg-custom-beige-color py-[50px] 2xl:py-[150px] instaPage'>
      <div className='container '>
          <div className=' flex flex-wrap justify-center gap-5 overflow-hidden'>{pagedata?.instagramsection?.instadata?.tabs?.map((ele, index) => (
            <div key={index} className='instaWrap max-w-[326px] w-full overflow-hidden rounded-lg instaImage'>
              <figure className='relative pb-[100%] '  >
                <Image src={ele?.image} fill alt={ele?.alt} />
              </figure>
            </div>
          ))}
            <div className='instaWrap bg-custom-darkgrey-color max-w-[326px] w-full p-[42px] flex justify-center items-center text-center rounded-lg cursor-pointer group '>
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
  )
}

export default Instagrampages