import React from "react";
import Image from "next/image";

import { ShieldCheck } from "lucide-react";
import FaqsHeroSectionImage from "../../../../public/images/privacy-policy-section-img.png";

const PrivacyPolicyHeroSection = () => {
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
          <ShieldCheck className="h-[14px] w-[14px] text-white/70" />
          <h1 className="text-[14px] leading-[18px] font-inter text-white font-bold tracking-wider">
            Privacy Policy
          </h1>
        </div>

        <h1 className="lg:text-[88px] md:text-[52px] text-[32px] font-[700] leading-[120%] text-heading-color font-inter">
          Our Commitment to Your{" "}
          <span className="text-primary-theme">Privacy</span>
        </h1>

        <p className="lg:text-[16px] md:text-[14px] text-[12px] font-[400] lg:mt-6 mt-4 lg:max-w-[750px] text-justify">
          At Legal Trademark Office, we prioritize your privacy and are
          committed to protecting your personal data. Our privacy policy
          outlines how we collect, use, and safeguard the information you share
          with us. Transparency, trust, and compliance are the cornerstones of
          our data practices.
        </p>
      </div>

      <div
        className={`relative flex items-start lg:w-[700px] h-fit lg:order-2 md:order-1`}
      >
        <Image
          src={FaqsHeroSectionImage}
          alt="Privacy Policy of Legal Trademark Office"
        />
        <div className="absolute -bottom-1 left-0 w-full h-[100px] bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
};

export default PrivacyPolicyHeroSection;
