import React from "react";
import Image from "next/image";

import { Globe } from "lucide-react";
import AboutUsHeroSectionImage from "../../../../public/images/about-us-hero-section-img.png";

const AboutUsHeroSection = () => {
  return (
    <section className="layout-standard section-padding-standard flex lg:flex-row flex-col lg:gap-16 gap-8">
      <div className="lg:w-[calc(100%-800px)] flex flex-col justify-center lg:order-1 order-2">
        <div
          className="w-fit py-2 px-3 rounded-sm flex items-center gap-1 bg-primary-theme mb-4"
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <Globe className="h-[14px] w-[14px] text-white/70" />
          <h1 className="text-[14px] leading-[18px] font-inter text-white font-bold tracking-wider">
            About Us
          </h1>
        </div>

        <h1 className="lg:text-[88px] md:text-[52px] text-[32px] font-[700] leading-[120%] text-heading-color font-inter">
          Discover Our <span className="text-primary-theme">Story</span>
        </h1>

        <p className="lg:text-[16px] md:text-[14px] text-[12px] font-[400] lg:mt-6 mt-4 lg:max-w-[750px] text-justify">
          At Legal Trademark Office, we are committed to empowering businesses
          with the tools and knowledge needed to protect their identities. From
          small startups to established enterprises, our mission is to simplify
          complex processes and provide personalized, efficient, and trustworthy
          solutions. With a team passionate about brand protection and a vision
          rooted in innovation, we&apos;re here to support your journey toward
          success. Learn more about our story, our dedication, and what drives
          us to deliver excellence in every step of the process.
        </p>
      </div>

      <div
        className={`relative flex items-start lg:w-[800px] h-fit lg:order-2 md:order-1`}
      >
        <Image
          src={AboutUsHeroSectionImage}
          alt="About Legal Trademark Office"
        />
        <div className="absolute -bottom-1 left-0 w-full md:h-[100px] h-[50px] bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
