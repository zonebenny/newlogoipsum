import React from 'react'
import { pagedata } from '@/app/data'
import Button from '@/components/Button'
import AchivementSection from '@/components/AchivementSection'

const Awardsection = () => {
  return (
    <section className='py-[50px] 2xl:py-[150px]'>
      <div className='container'>
        <div className='flex justify-center flex-col mb-[80px] text-center'>
          <div className='flex justify-center mb-[30px]'>
            <span className='w-[2px] h-12 bg-custom-line-bgcolor block opacity-50'></span>
          </div>
          <span className='text-base xl:text-lg text-custom-black font-normal leading-5 mb-5 block'>{pagedata?.awardssection?.title}</span>
          <h4 className='font-cormorantFont text-3xl 2xl:text-[50px] font-normal leading-[35px] 2xl:leading-[60px]'>{pagedata?.awardssection?.subtitle}</h4>
        </div>
        <div>
            <AchivementSection></AchivementSection>
          <div className='flex justify-center'>
            <Button href={pagedata?.awardssection?.know_more_btn?.url} variant="btnPrimary" outline="outline-Secondary" name={pagedata?.awardssection?.know_more_btn?.text}></Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awardsection 