import React from 'react'
import { pagedata } from '@/app/data'
import Button from '@/components/Button'
import OurblogCard from '@/components/OurblogCard'
// import "./style.css";

const Ourblog = () => {
  
  return (
    <section className='bg-custom-darkgrey-color py-[50px] 2xl:py-[150px]'>
      <div className='container'>
        <div className='block md:flex justify-between mb-[60px] '>
          <h4 className='text-3xl 2xl:text-[50px] font-cormorantFont leading-[50px] text-custom-white font-normal mb-[25px] md:mb-0 threeD'>{pagedata?.ourblogsection?.title}</h4>
          <Button href={pagedata?.ourblogsection?.view_all_btn?.url} variant="btnPrimary" outline="outline-primary" name={pagedata?.ourblogsection?.view_all_btn?.text}></Button>
        </div>
          <OurblogCard></OurblogCard>
      </div>
    </section>
  )
}

export default Ourblog