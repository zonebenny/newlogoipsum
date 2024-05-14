import Link from "next/link";
import React from "react";
import { FooterData } from "./FooterDatas";
import Image from "next/image";


const FooterLinks = () => {
  return (
    <div className="flex flex-wrap 2xl:flex-nowrap justify-between">
      <div>
        <ul className='font-workSans '>
          {FooterData?.navLinks?.map((item, index) => (
            <li key={index} >
              <Link className='text-2xl 2xl:text-4xl font-light mb-2 md:mb-5 leading-[40px] text-custom-white opacity-70 block whitespace-nowrap hover:opacity-100 duration-500 transition-all' key={index} href={item?.link}>
                {item?.title}&nbsp;
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* ******************************** */}
      <div className=" flex my-6 lg:my-0 flex-wrap 2xl:flex-nowrap gap-[50px] 2xl:gap-[151px]">
        {FooterData?.nav?.map((items, indexx) => (
          <div key={indexx}>
            <span className='text-base font-medium mb-[30px] leading-[18px] font-workSans text-custom-white block whitespace-nowrap opacity-85'>
                {items?.title}
            </span>
            <ul className='font-workSans '>{items?.SubMenu?.map((element, id) => (
              <li key={id} className='text-base font-normal mb-[18px] leading-[18px] text-custom-white opacity-70 block whitespace-nowrap hover:opacity-100 hover:text-shadow-2xl duration-500 transition-all'>
                <Link href="/">{element?.title}</Link>
              </li>
            ))}
            </ul>
          </div>
        ))}

        {/* ******************************** */}
        <div className="block font-workSans">
          <div className="mb-7 ">
            <span className="block text-custom-white opacity-75">{FooterData?.address?.line1}</span>
            <span className="block text-custom-white opacity-75">{FooterData?.address?.line2}</span>
            <span className="block text-custom-white opacity-75">{FooterData?.address?.line3}</span>
          </div>
          <div className="mb-[40px] xl:mb-[93px] ">
            <Link href="/" className="block text-custom-white opacity-75 hover:opacity-100 duration-500 transition-all" >{FooterData?.contact?.phone?.text}</Link>
            <Link href={'FooterData.contact.email.link'}><span className="block text-custom-white opacity-75 hover:opacity-100 duration-500 transition-all">{FooterData?.contact?.email?.text}</span></Link>
          </div>
          <div>
            <span className="block text-custom-white mb-8 opacity-75" >{FooterData?.socialmedia?.title}</span>
            <div>
                <ul className="flex items-center justify-between w-full">{FooterData?.socialmedia?.icons.map((icons, indx) => (
                  <li key={indx} className=" opacity-75 hover:opacity-100 duration-500 transition-all">
                        <Link  href="/">
                          <Image width="20" height="20" src={icons?.logo} alt="social_icons"/>
                        </Link>    
                  </li>
                ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ******************************** */}
    </div>
  );
};

export default FooterLinks;



// "use client"
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { FooterData } from "./FooterDatas";
// import Image from "next/image";

// const AccordionItem = ({ title, subMenu, mobileOnly }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     if (mobileOnly && window.innerWidth > 768) {
//       // If mobileOnly is true and the screen width is greater than 768px (typical tablet width), do not toggle
//       return;
//     }
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <div
//         className="flex items-center justify-between cursor-pointer lign-baseline gap-3"
//         onClick={handleClick}
//       >
//         <span className="text-base font-medium xl:mb-[30px] leading-[18px] font-workSans text-custom-white block whitespace-nowrap opacity-85 a">
//           {title}
//         </span>
//         {mobileOnly && window.innerWidth <= 768 && (
//           <span className="text-custom-white">{isOpen ? "-" : "+"}</span>
//         )}
//       </div>
//       <ul className="font-workSans" style={{ display: mobileOnly && window.innerWidth > 768 ? "block" : (isOpen ? "block" : "none") }}>
//         {subMenu.map((element, id) => (
//           <li
//             key={id}
//             className="text-base font-normal mb-[18px] leading-[18px] text-custom-white opacity-70 block whitespace-nowrap hover:opacity-100 hover:text-shadow-2xl duration-500 transition-all"
//           >
//             <Link href={element.link}>{element.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const FooterLinks = () => {
//   useEffect(() => {
//     const handleResize = () => {
//       // Force update on window resize to ensure proper rendering of accordion on mobile
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   return (
//     <div className="flex flex-wrap 2xl:flex-nowrap justify-between">
//       <div>
//         <ul className="font-workSans">
//           {FooterData?.navLinks?.map((item, index) => (
//             <li key={index}>
//               <Link
//                 className="text-2xl 2xl:text-4xl font-light mb-2 md:mb-5 leading-[40px] text-custom-white opacity-70 block whitespace-nowrap hover:opacity-100 duration-500 transition-all"
//                 href={item?.link}
//               >
//                 {item?.title}&nbsp;
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className=" flex my-6 lg:my-0 flex-wrap 2xl:flex-nowrap gap-[50px] 2xl:gap-[151px]">
//         {FooterData?.nav?.map((items, indexx) => (
//           <AccordionItem
//             key={indexx}
//             title={items.title}
//             subMenu={items.SubMenu}
//             mobileOnly={true}
//           />
//         ))}
//       </div>
//       <div className="block font-workSans">
//         <div className="mb-7 ">
//           <span className="block text-custom-white opacity-75">{FooterData?.address?.line1}</span>
//           <span className="block text-custom-white opacity-75">{FooterData?.address?.line2}</span>
//           <span className="block text-custom-white opacity-75">{FooterData?.address?.line3}</span>
//         </div>
//         <div className="mb-[93px] ">
//           <Link href="/" className="block text-custom-white opacity-75 hover:opacity-100 duration-500 transition-all">
//             {FooterData?.contact?.phone?.text}
//           </Link>
//           <Link href={'FooterData.contact.email.link'}>
//             <span className="block text-custom-white opacity-75 hover:opacity-100 duration-500 transition-all">
//               {FooterData?.contact?.email?.text}
//             </span>
//           </Link>
//         </div>
//         <div>
//           <span className="block text-custom-white mb-8 opacity-75">{FooterData?.socialmedia?.title}</span>
//           <div>
//             <ul className="flex items-center justify-between w-full">
//               {FooterData?.socialmedia?.icons.map((icons, indx) => (
//                 <li key={indx} className=" opacity-75 hover:opacity-100 duration-500 transition-all">
//                   <Link href="/">
//                     <Image width="20" height="20" src={icons?.logo} alt="social_icons" />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FooterLinks;
