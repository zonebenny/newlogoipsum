
import React from 'react';
import { pagedata } from '@/app/data'
import WeddingreceptionCard from '@/components/WeddingreceptionCard'


const WeddingReception = () => {


  

  return (
    <section className='py-6 md:py-[50px] 2xl:py-[130px] bg-custom-beige-color  weddingSecWrap'>
      <div className='container'>
        <div className='flex justify-center flex-col mb-[30px] 2xl:mb-[80px] text-center '>
          <div className='flex justify-center mb-[30px] linewrap'>
            <span className='w-[2px] h-12 bg-custom-line-bgcolor block opacity-50'></span>
          </div>
          <span className='wedTitleWrap  text-lg text-custom-black text-center font-normal leading-5 mb-5 block'>{pagedata?.weddingreception?.title}</span>
          <h3 className='wedSubtitleWrap font-cormorantFont text-[30px] 2xl:text-[50px] text-center font-normal leading-[38px] 2xl:leading-[60px]'>{pagedata?.weddingreception?.subtitle}</h3>
        </div>
        <WeddingreceptionCard></WeddingreceptionCard>
      </div>
    </section>
  )
}

export default WeddingReception;
