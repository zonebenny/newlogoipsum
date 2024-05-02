"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { pagedata } from "@/app/data";

const Ourhighlights = () => {
  const [activeTab, setActiveTab] = useState("WEDDING STYLING");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevActiveTab) => {
        const currentIndex = pagedata?.ourhighlight?.tabs?.findIndex(
          (tab) => tab.id === prevActiveTab
        );
        const nextIndex = (currentIndex + 1) % pagedata?.ourhighlight?.tabs?.length;
        const nextTabId = pagedata?.ourhighlight?.tabs[nextIndex].id;
        return nextTabId;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-[1526px] m-auto px-3 py-[40px] 2xl:py-[150px] ml-0 2xl:ml-[157px]">
      <div className=" flex flex-wrap md:flex-nowrap md:gap-[50px] md:justify-evenly 2xl:gap-[150px] items-center">

        <div>
          <h4 className="text-lg font-medium mb-10 leading-5">
            {pagedata?.ourhighlight?.title}
          </h4>
          <ul className="-mb-px" id="default-tab" role="tablist">
            {pagedata?.ourhighlight?.tabs?.map((tab) => (
              <li
                className="mb-[20px] 2xl:mb-[60px] UnderLinemove "
                role="presentation"
                key={tab?.id}>
                <button
                  className={`custom-underline ${activeTab === tab?.id ? "active" : ""}`}
                  onClick={() => handleTabClick(tab?.id)}
                  role="tab"
                  id={`${tab?.id}-tab`}
                  aria-controls={tab?.id}
                  aria-selected={activeTab === tab?.id}
                >
                  <div className={`cursor-pointer text-2xl md:text-3xl xl:text-5xl 2xl:text-[60px] xl:leading-[60px] font-cormorantFont font-normal whitespace-nowrap text-custom-black ${activeTab === tab.id ? "opacity-[1]" : "opacity-65 hover:opacity-100"}`}>
                    {tab.label}
                  </div>
                </button>

              </li>
            ))}
          </ul>
        </div>


        <div id="default-tab-content" className="md:max-w-[300px] xl:max-w-[674px] w-full">
          {pagedata?.ourhighlight?.tabs?.map((tab) => (
            <figure
              className={`${activeTab === tab.id ? "block" : "hidden"} relative pb-[100%]`}
              id={tab?.id}
              role="tabpanel"
              aria-labelledby={`${tab?.id}-tab`}
              key={tab?.id}
            >
              <Image src={tab?.image} fill alt={tab?.label} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourhighlights;

