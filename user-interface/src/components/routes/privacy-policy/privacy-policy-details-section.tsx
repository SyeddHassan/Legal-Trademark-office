import React from "react";

import {
  PrivacyPolicyData01,
  PrivacyPolicyData02,
} from "@/constants/privacy-policy-page-data";

const PrivacyPolicyDetailsSection = () => {
  return (
    <section className="layout-standard py-8 flex flex-col gap-4">
      <h1 className="text-[20px] leading-[28px] font-inter font-bold">
        Last Updated: June 20, 2024
      </h1>
      {PrivacyPolicyData01.map((desc) => (
        <p
          key={desc.id}
          className="lg:text-[16px] md:text-[14px] text-[12px] font-[400] text-justify"
        >
          {desc.description}
        </p>
      ))}

      <div className="grid md:grid-cols-2 gap-x-6 lg:my-12 my-6">
        {PrivacyPolicyData02.map((data) => (
          <div
            key={data.id}
            className={`flex flex-col gap-2 mb-8 ${
              data.id === 11 ? "md:col-span-2 col-span-1" : "col-span-1"
            }`}
          >
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

export default PrivacyPolicyDetailsSection;
