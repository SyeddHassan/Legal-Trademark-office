import React from "react";
import Image from "next/image";

import { FileText } from "lucide-react";
import TermsConditionsHeroSectionImage from "../../../../public/images/terms-conditions-section-img.png";

const TermsConditionsHeroSection = () => {
  return (
    <section className="layout-standard section-padding-standard flex lg:flex-row flex-col gap-16">
      <div className="lg:w-[calc(100%-700px)] flex flex-col justify-center lg:order-1 order-2">
        <div
          className="w-fit py-2 px-3 rounded-sm flex items-center gap-1 bg-primary-theme mb-4"
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <FileText className="h-[14px] w-[14px] text-white/70" />
          <h1 className="text-[14px] leading-[18px] font-inter text-white font-bold tracking-wider">
            Terms & Conditions
          </h1>
        </div>

        <h1 className="lg:text-[88px] md:text-[52px] text-[32px] font-[700] leading-[120%] text-heading-color font-inter">
          Our Terms of <span className="text-primary-theme">Services</span>
        </h1>

        <p className="lg:text-[16px] md:text-[14px] text-[12px] font-[400] lg:mt-6 mt-4 lg:max-w-[750px] text-justify">
          At Legal Trademark Office, our terms and conditions are designed to
          promote fairness, transparency, and mutual trust in all interactions.
          They outline the rights and responsibilities of both parties, ensuring
          a clear understanding of our services and how they can be used. By
          establishing these guidelines, we aim to protect your interests and
          maintain a secure, trustworthy environment. Whether you're exploring
          our trademark registration offerings or engaging with our platform,
          our policies ensure a seamless and reliable experience.
        </p>
      </div>

      <div
        className={`relative flex items-start lg:w-[700px] h-fit lg:order-2 md:order-1`}
      >
        <Image
          src={TermsConditionsHeroSectionImage}
          alt="Terms and Conditions of Legal Trademark Office"
        />
        <div className="absolute -bottom-1 left-0 w-full h-[100px] bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
};

export default TermsConditionsHeroSection;
