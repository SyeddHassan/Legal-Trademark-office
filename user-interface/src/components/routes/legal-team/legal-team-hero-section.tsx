import React from "react";
import Image from "next/image";

import { Users } from "lucide-react";
import LegalTeamHeroSectionImage from "../../../../public/images/legal-team-hero-section-img.png";

const LegalTeamHeroSection = () => {
  return (
    <section className="layout-standard section-padding-standard flex flex-col lg:gap-16 gap-8">
      <div className="flex flex-col justify-center order-2">
        <div
          className="w-fit py-2 px-3 rounded-sm flex items-center gap-1 bg-primary-theme mb-4"
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          <Users className="h-[14px] w-[14px] text-white/70" />
          <h1 className="text-[14px] leading-[18px] font-inter text-white font-bold tracking-wider">
            Our Legal Team
          </h1>
        </div>

        <h1 className="lg:text-[88px] md:text-[52px] text-[32px] font-[700] leading-[120%] text-heading-color font-inter">
          Meet The Experts Behind Your{" "}
          <span className="text-primary-theme">Success</span>
        </h1>

        <p className="lg:text-[16px] md:text-[14px] text-[12px] font-[400] lg:mt-6 mt-4 lg:max-w-[1300px] text-justify">
          At Legal Trademark Office, our skilled team is dedicated to helping
          you safeguard your brand, protect your intellectual property, and
          navigate complex legal and procedural landscapes with ease. With years
          of experience and a deep understanding of industry requirements, we
          offer tailored solutions that align with your unique needs and goals.
          <br />
          <br />
          Our commitment to excellence extends beyond technical expertise we
          pride ourselves on fostering strong, collaborative relationships with
          our clients. From offering personalized advice to addressing intricate
          challenges, we ensure a seamless and confident journey toward securing
          your brand&apos;s success.
          <br />
          <br />
          Get to know the professionals who bring a wealth of knowledge,
          attention to detail, and unwavering dedication to every step of the
          process. We&apos;re here to empower your business, protect your vision, and
          pave the way for long term success.
        </p>
      </div>

      <div className={`relative flex items-start h-fit order-1`}>
        <Image
          src={LegalTeamHeroSectionImage}
          alt="Legal Team of Legal Trademark Office"
        />
        <div className="absolute -bottom-1 left-0 w-full lg:h-[100px] h-[50px] bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
};

export default LegalTeamHeroSection;
