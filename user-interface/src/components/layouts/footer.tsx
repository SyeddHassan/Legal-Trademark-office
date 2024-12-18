import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FooterContactInfoData,
  FooterPagesNavigationData,
  FooterSocialsData,
} from "@/constants/layouts-data";

import Logo from "../../../public/logos/logo.svg";

const Footer = () => {
  return (
    <footer className="flex-center lg:mb-12 mb-8 border-t">
      <div className="w-full flex flex-col lg:gap-14 gap-8">
        <div className="layout-standard section-padding-standard">
          <div className="flex flex-col md:items-start items-center justify-center gap-[10%] md:flex-row">
            <Link href="/" className="lg:mb-10 mb-4">
              <Image src={Logo} alt="logo" width={114} height={49} />
            </Link>

            <div className="flex flex-wrap gap-10 md:justify-between md:flex-1">
              {FooterPagesNavigationData.map((columns, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5 max-md:w-full max-md:items-center"
                >
                  <h4 className="text-[18px] font-[700] font-inter text-heading-color whitespace-nowrap">
                    {columns.title}
                  </h4>
                  <ul className="text-[14px] font-[400] flex flex-col gap-4 max-md:items-center">
                    {columns.links.map((item, columnIndex) => (
                      <Link
                        href={item.href}
                        key={columnIndex}
                        className="hover:text-primary-theme"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <h4 className="text-[18px] font-[700] font-inter text-heading-color whitespace-nowrap">
                    {FooterContactInfoData.title}
                  </h4>
                  {FooterContactInfoData.links.map((link) => (
                    <Link
                      href="/"
                      key={link.label}
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="text-[14px] whitespace-nowrap">
                        {link.label}:
                      </p>
                      <p className="text-[14px] font-[600] whitespace-nowrap text-blue-70">
                        {link.value}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <h4 className="text-[18px] font-[700] font-inter text-heading-color whitespace-nowrap">
                    {FooterSocialsData.title}
                  </h4>
                  <ul className="text-[14px] font-[400] flex gap-4">
                    {FooterSocialsData.links.map((link) => (
                      <Link href="/" key={link}>
                        <Image src={link} alt="logo" width={24} height={24} />
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border bg-border" />

        <p className="layout-standard text-[14px] font-[400] font-inter w-full text-center text-heading-color">
          2024 Legal Trademark Office | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
