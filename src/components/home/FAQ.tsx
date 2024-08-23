"use client";
import React, { useState } from "react";
import { DOWN_ARROW } from "../common/Icon";
import { ACCORDION_DATA } from "@/utils/helper";

const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<null | number>(null);
  const TOGGLE_ACCORDION = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <div className="min-h-screen px-5 py-20">
      <h2 className="mb-[60px] font-bold text-4xl leading-[46px] text-center text-black-90">
        Frequently <span className="text-orange-80">Asked Questions</span>
      </h2>
      {/* accordion */}
      <div className="lg:max-w-[1092px] max-w-[800px] mx-auto w-full flex flex-col sm:gap-6 gap-4">
        {/* accordion-item */}
        {ACCORDION_DATA.map((value, index) => (
          <div
            className={`border-b border-grey rounded-[20px] bg-white overflow-hidden duration-300 ease-linear  ${
              openAccordion === index && "bg-orange-75 border pb-4"
            }`}
          >
            {/* accordion-head */}
            <div
              key={index}
              onClick={() => TOGGLE_ACCORDION(index)}
              className="py-[10px] px-6 flex items-center gap-4 justify-between duration-300 ease-linear cursor-pointer"
            >
              <p className="font-semibold text-base leading-6 text-black-90">
                {value}
              </p>
              <span>
                <DOWN_ARROW />
              </span>
            </div>
            {/* accordion-body */}
            <div
              className={`max-w-[990px] w-full px-6 max-h-0 duration-300 ease-linear ${
                openAccordion === index &&
                "xl:max-h-[288px] sm:max-h-[72px] pt-[2px]"
              }`}
            >
              <p className="font-normal text-base leading-6 text-black-90 opacity-70">
                We assist you in connecting essential services such as
                electricity, gas, internet, and insurance. Our goal is to make
                your move as seamless as possible by handling all these
                connections in just one phone call.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
