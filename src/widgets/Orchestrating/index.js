"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { pagedata } from "@/app/data";
import Button from "@/components/Button";
import "./style.css";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Orchestrating = () => {
    useEffect(() => {
        // Check if the screen width is greater than a certain threshold (e.g., 768px)
        if (window.innerWidth > 768) {
        
            gsap.set([".celebWrap"], {
              x: -50,
              opacity: 0
            });
                
            gsap.to(".celebWrap", {
              // duration: 1,
              delay: 0.3,
              x: 0,
              opacity: 1,
              stagger: {
                each:0.3,
                // amount: 0.1,
                from: "start" 
              },
              scrollTrigger: {
                trigger: ".orchestringWrappeer", 
                start: "top bottom", 
                end: "bottom "
              }
            });
            
      
         
        }
      }, []);
      

    return (
        <section className="py-[50px] 2xl:py-[120px] orchestringWrappeer">
            <div className="container">
                <div className="sm:px-[120px] lg:px-[175px] mb-[40px] 2xl:mb-[90px]">
                    <h3 className="font-cormorantFont text-custom-black text-3xl md:text-4xl 2xl:text-[50px] leading-[35px] 2xl:leading-[60px] font-normal text-center ">
                        {pagedata?.orchestrating?.title}
                    </h3>
                </div>
                <div className="flex flex-wrap gap-[50px] justify-center xl:justify-start ">
                    {pagedata?.orchestrating?.subcontent?.map((ele, index) => (
                        <div key={index} className="relative overflow-hidden max-w-[657px] group w-full rounded-lg figure-wrapper group transition-all duration-1000 ease-in-out  bgColorWrap cursor-pointer  workimgBlock celebWrap">
                           <div className="hoverBg">
                            <figure className="pb-[104.72%]">
                                <Image className="group-hover:scale-105 transition-all duration-1000 ease-in-out workImg " src={ele?.image} fill alt={ele?.alt}/>
                            </figure>
                          
                            <div className="absolute bottom-4 left-3 lg:left-14 mt-3 mx-auto mb-6 block h-[77%]  lg:h-[23%] z-10 ">
                                <div className="card-title mt-[72px] mx-0 h-[21%] lg:h-[79%] w-full transition-all duration-700">
                                    <span className="font-cormorantFont max-w-[200px] text-custom-white text-3xl md:text-[40px] 2xl:text-[50px] md:leading-[40px] 2xl:leading-[50px] font-normal block mb-5 ">{ele?.title}</span>
                                </div>
                                <div className=" w-full lg:max-w-[400px]">
                                    <p className="text-custom-white text-base lg:text-xl  leading-6 font-light mb-4">{ele?.discription}</p>
                                    <Button
                                        href={ele?.about_us_btn?.url}
                                        variant="btnPrimary"
                                        outline="outline-primary"
                                        name={ele?.about_us_btn?.text}>
                                    </Button>
                                </div>
                            </div>
                           </div>
                        </div>
                    ))}
                </div>
              
            </div>
        </section>
    );
};

export default Orchestrating;
