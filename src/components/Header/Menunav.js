import Link from "next/link";
import React from "react";

import Button from "../Button";

const Menulinks = () => {
  const MenuNav = [
    {
      title: "WEDDING PLANNING",
      link: "/",
    },
    {
      title: "EVENT PLANNING",
      link: "/EventPlanning",
    },
    {
      title: "WEDDING PACKAGES",
      link: "/WeddingPackages",
      // subMenu: [
      //   {
      //     title: "WEDDING",
      //     link: "/Wedding",
      //   },
      //   {
      //     title: "WEDD",
      //     link: "/Weddg",
      //   },
      // ],
    },
    {
      title: "ABOUT US",
      link: "/AboutUs",
    },
    {
      title: "PORTFOLIO",
      link: "/Portfolio",
    },
  ];
  return (
    <>
      <ul className="block 2xl:flex font-workSans  gap-[34px] ">
        {MenuNav?.map((item, index) => (
          <li className="p-3 2xl:p-0 text-xl UnderLine" key={index}>
            <Link className="custom-underline whitespace-nowrap 2xl:text-[15px] font-normal leading-4" key={index} href={item?.link}>
              {item.title}&nbsp;
            </Link>
          </li>
        ))}
      </ul>

            <div className="p-3 2xl:p-0">
              <Button variant={'btnPrimary'} outline={'outline-Secondary'} name="ENQUIRE NOW"  className="btnsAnim"/>
            </div>


    </>
  );
};

export default Menulinks;
