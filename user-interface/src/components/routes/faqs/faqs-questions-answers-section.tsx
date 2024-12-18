import React from "react";

import { FaqPageData } from "@/constants/faqs-page-data";

import { Separator } from "@/components/ui/separator";

const FaqsQuestionsAnswersSection = () => {
  return (
    <section className="layout-standard mt-4 mb-16">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-12">
        {FaqPageData.map((faq, index) => (
          <div key={index} className="col-span-1 flex flex-col gap-8">
            <div className="flex items-start gap-4 lg:h-[70px] md:h-[120px]">
              <span className="w-fit p-2 border rounded-sm">{faq.icon}</span>
              <div className="flex flex-col gap-2">
                <h1 className="font-inter font-bold text-heading-color md:text-[16px] text-[14px] md:leading-[20px] leading-[18px]">
                  {faq.question}
                </h1>
                <p className="md:text-[14px] md:leading-[18px] text-[12px] leading-[16px]">
                  {faq.answer}
                </p>
              </div>
            </div>

            <Separator
              className={`${faq.id === 13 || faq.id === 14 ? "hidden" : ""}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsQuestionsAnswersSection;
