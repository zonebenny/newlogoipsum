"use client"
import React, { useEffect } from 'react'
import { pagedata } from '@/app/data'
import Button from '@/components/Button'
import OurblogCard from '@/components/OurblogCard'
// import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Ourblog = () => {
  useEffect(() => {
    gsap.set(".blogImgWrap", {
      x: -50,
      opacity: 0
    });
  
    gsap.to(".blogImgWrap", {
      duration: 0.3,
      // delay: 1,
      x: 0,
      opacity: 1,
      stagger: {
        // amount: 0.1,
        each:0.3,
        from: "start" 
      },
      scrollTrigger: {
        trigger: ".blogWrap", 
        start: "top 80%", 
        end: "bottom 20%", 
    
      }
    });
    gsap.set(".blogTitle", {
      x: -50,
      opacity: 0
    });
  
    gsap.to(".blogTitle", {
      duration: 0.3,
      // delay: 0.5,
      x: 0,
      opacity: 1,
      stagger: {
        amount: 0.1,
        from: "start" 
      },
      scrollTrigger: {
        trigger: ".blogWrap", 
        // start: "top bottom", 
        // end: "bottom bottom", 
        start: "top 80%", 
        end: "bottom 20%", 
    
      }
    });
  }, []);
  
  return (
    <section className='bg-custom-darkgrey-color py-[50px] 2xl:py-[150px] blogWrap'>
      <div className='container'>
        <div className='block md:flex justify-between mb-[60px] OurblogWrap'>
          <h4 className='text-3xl 2xl:text-[50px] font-cormorantFont leading-[50px] text-custom-white font-normal mb-[25px] md:mb-0 render blogTitle'>{pagedata?.ourblogsection?.title}</h4>
          <Button href={pagedata?.ourblogsection?.view_all_btn?.url} variant="btnPrimary" outline="outline-primary" name={pagedata?.ourblogsection?.view_all_btn?.text}></Button>
        </div>
          <OurblogCard></OurblogCard>
      </div>
    </section>
  )
}

export default Ourblog