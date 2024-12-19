import React from "react";

import ContactUsForm from "@/components/routes/contact-us/contact-us-form";
import { Badge } from "@/components/ui/badge";

import ContactUsHeroImg from "../../public/images/contact-us-hero-img.jpg";
import { Building, Mail, Phone } from "lucide-react";

const ContactUsPage = () => {
  return (
    <main>
      <section className="w-full grid lg:grid-cols-2 lg:gap-8">
        {/* RIGHT SIDE HERO IMAGE */}
        <div
          className="col-span-1 lg:h-full md:h-[500px] h-[300px] w-full bg-cover bg-[50%_50%] bg-no-repeat"
          style={{ backgroundImage: `url(${ContactUsHeroImg.src})` }}
        />

        {/* CONTACT US FORM */}
        <ContactUsForm />
      </section>

      <section className="layout-standard section-padding-standard lg:section-margin-standard max-lg:mb-8 flex flex-col gap-8">
        <Badge className="w-fit text-[14px] font-inter border-border">
          Reach Out To Us
        </Badge>
        <div className="flex flex-col gap-2">
          <h1 className="font-inter md:text-[42px] text-[32px] md:leading-[46px] leading-[36px] font-bold text-heading-color">
            We&apos;d Love to Hear From You.
          </h1>
          <p className="md:text-[16px] text-[14px] md:leading-[24px] leading-[22px]">
            Or just reah out manually to{" "}
            <span className="text-blue-500 cursor-pointer">
              support@legaltrademarkoffice.com
            </span>
          </p>
        </div>

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-4 max-lg:gap-y-8">
          <div className="flex flex-col gap-4 lg:col-span-1 md:col-span-2 md:order-1 max-md:items-center">
            <Badge className="bg-primary-theme shadow-md shadow-blue-500/50 rounded-full h-[40px] w-[40px] flex-center text-white">
              <Mail />
            </Badge>
            <div className="flex flex-col gap-1 max-md:items-center">
              <h1 className="text-[20px] leading-[26px] text-heading-color font-inter font-bold">
                Email Support
              </h1>
              <p className="text-[16px] leading-[24px]">
                Our team can respond in real time.
              </p>
            </div>
            <p className="text-blue-500 cursor-pointer text-[14px] leading-[22px]">
              support@legaltrademarkoffice.com
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-1 md:col-span-4 lg:order-2 md:order-3 max-md:items-center">
            <Badge className="bg-primary-theme shadow-md shadow-blue-500/50 rounded-full h-[40px] w-[40px] flex-center text-white">
              <Building />
            </Badge>
            <div className="flex flex-col gap-1 max-md:items-center">
              <h1 className="text-[20px] leading-[26px] text-heading-color font-inter font-bold">
                Visit Our Office
              </h1>
              <p className="text-[16px] leading-[24px]">
                Visit our office in real time.
              </p>
            </div>
            <p className="text-blue-500 cursor-pointer text-[14px] leading-[22px] max-md:text-center">
              2121 Crystal Dr, VA , Arlington, VA, United States, Virginia
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-1 md:col-span-2 lg:order-3 md:order-2 max-md:items-center">
            <Badge className="bg-primary-theme shadow-md shadow-blue-500/50 rounded-full h-[40px] w-[40px] flex-center text-white">
              <Phone />
            </Badge>
            <div className="flex flex-col gap-1 max-md:items-center">
              <h1 className="text-[20px] leading-[26px] text-heading-color font-inter font-bold">
                Call Us Directly
              </h1>
              <p className="text-[16px] leading-[24px]">
                Available during working hours.
              </p>
            </div>
            <p className="text-blue-500 cursor-pointer text-[14px] leading-[22px]">
              +1 (310) 424-4909
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;
