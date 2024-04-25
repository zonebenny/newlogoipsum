"use client"
import Image from 'next/image'
import { useRef, useState } from 'react';
import "./style.css"
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { pagedata } from '@/app/data';
import Button from '@/components/Button';



const Reviewsection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    const togglePlayPause = () => {
      const video = videoRef.current;
  
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
  
      setIsPlaying(!isPlaying);
    };
  
    const handleVideoClick = () => {
      togglePlayPause();
    };
    return (
        <section className='py-[50px] 2xl:py-[140px] bg-custom-wheat-color swiper_review'>
            <div className='container'>
                <div className='flex flex-wrap xl:flex-nowrap xl:gap-[50px] 2xl:gap-[154px]'>
                    <div className='xl:max-w-[536px] w-full '>
                        <div >
                             <figure className='relative pb-[56%]'  onClick={handleVideoClick}>
                             <video ref={videoRef} src="/review-video.mp4" loop  muted alt="video Section" className="absolute top-0 left-0 w-full h-full rounded-lg cursor-pointer"></video>
                             <button onClick={togglePlayPause} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                {isPlaying ? (
                                    <Image src="/pause-button.svg" width="80" height="80" alt="Pause" className='w-[30px] h-[30px] md:w-[80px] md:h-[80px]' />
                                ) : (
                                    <Image src="/play-button.svg" width="80" height="80" alt="Play"  className='w-[30px] h-[30px] md:w-[80px] md:h-[80px]'/>
                                )}
                                </button>
                             </figure>
                        </div>
                        <div className='flex flex-wrap 2xl:flex-nowrap gap-[14px] mt-[14px]'>
                            <Image className='rounded-lg w-[80px] h-[80px] md:w-[168px] md:h-[168px]' src="/review2.png" width={168} height={168} alt="review1" />
                            <Image className='rounded-lg w-[80px] h-[80px] md:w-[168px] md:h-[168px]' src="/review3.png" width={168} height={168} alt="review1"/>
                            <div className='max-w-[80px] md:max-w-[168px]  w-full relative cursor-pointer'>
                                <Image className='rounded-lg w-[80px] h-[80px] md:w-[168px] md:h-[168px]' src="/review2.png" width={168} height={168} alt="review1"/>
                                <div className='viewGallery  absolute top-0 left-0 rounded-lg   text-center bg-[#2b2a2a93] w-full h-full flex justify-center items-center p-8'>
                                  <span className='text-[12px] md:text-[16px] font-medium leading-5  text-custom-white opacity-80 hover:opacity-100'>VIEW GALLERY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:max-w-[674px] w-full relative mt-[50px] 2xl:mb-0'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 5500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}

                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <div >
                                {pagedata?.reviewsection?.content?.map((ele, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='flex flex-col 2xl:flex-grow h-full'>
                                            <div className='h-full'>
                                                <p className='font-cormorantFont text-3xl 2xl:text-[50px] leading-[35px] 2xl:leading-[52px] font-normal text-custom-black line-clamp-5'>{ele?.description}</p>
                                            </div>
                                            <div className=' mt-[40px] 2xl:mt-auto mb-14'>
                                                <span className='font-cormorantFont font-medium text-lg xl:text-xl leading-5  mb-1 xl:mb-[10px] block text-custom-black'>{ele?.authorname}</span>
                                                <span className='font-normal text-base leading-4 text-custom-black opacity-75'>{ele?.location}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </div>
                        </Swiper>
                        <div className='absolute bottom-0 right-0 z-10'>
                            <Button href={pagedata?.reviewsection?.view_all_btn?.url} variant="btnPrimary" outline="outline-Secondary" name={pagedata?.reviewsection?.view_all_btn?.text}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviewsection