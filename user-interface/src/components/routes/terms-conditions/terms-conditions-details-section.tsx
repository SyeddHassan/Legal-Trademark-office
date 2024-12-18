import React from "react";

import {
  TermsAndConditionsData01,
  TermsAndConditionsData02,
} from "@/constants/terms-conditions-page-data";

const TermsConditionsDetailsSection = () => {
  return (
    <section className="layout-standard lg:py-8 flex flex-col gap-4">
      <h1 className="text-[20px] leading-[28px] font-inter font-bold">
        Last Updated: December 12, 2023
      </h1>

      {TermsAndConditionsData01.map((desc) => (
        <p
          key={desc.id}
          className="lg:text-[16px] md:text-[14px] text-[12px] font-[400] text-justify"
        >
          {desc.description}
        </p>
      ))}

      <div className="mt-8">
        {TermsAndConditionsData02.map((data) => (
          <div key={data.id} className="flex flex-col gap-2 mb-8">
            <h1 className="text-heading-color font-bold font-inter text-[20px] leading-[28px]">
              {data.id}. {data.heading}
            </h1>

            <p className="lg:text-[16px] md:text-[14px] text-[12px] font-[400] text-justify">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsConditionsDetailsSection;
