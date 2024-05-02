import React from 'react'

import FooterLinks from './FooterLinks'
import { FooterData } from './FooterDatas'
import Link from 'next/link'

const Footer = () => {

  return (
    <footer className='bg-custom-darkgrey-color '>
      <div className='container'>
        <div className='py-[50px] 2xl:py-[150px]  border-b  border-slate-400 border-opacity-50'>

          <FooterLinks></FooterLinks>

        </div>
        <div className='py-10 '>
          <div className='flex flex-wrap 2xl:flex-nowrap justify-between   '>{FooterData?.policyarea?.links.map((ele, inde) => (
            <Link className='py-2 2xl:py-0 text-custom-white opacity-60 hover:opacity-100 duration-500 transition-all' href={'#'} key={inde}>{ele?.title}</Link>
          ))}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer