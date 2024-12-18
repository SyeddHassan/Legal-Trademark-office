"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  HeaderNavigationsData,
  SidebarNavigationsData,
} from "@/constants/layouts-data";

import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "../ui/separator";

import Logo from "../../../public/logos/logo.svg";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <header className="w-full h-[90px] bg-white sticky top-0 left-0 z-50 border-b">
      <div className="layout-standard h-full flex items-center justify-between">
        {/* WEBSITE LOGO */}
        <div className="flex items-center gap-2">
          <Link href={"/"} passHref>
            <Image
              src={Logo}
              alt="Legal Trademark Office"
              className="w-full h-full"
              priority
            />
          </Link>

          <div className="flex items-center gap-1">
            <HiOutlineArrowLongLeft className="text-[14px]" />
            <p className="text-[12px] leading-[18px]">
              Register your trademark here
            </p>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <ul className="lg:flex items-center gap-8 hidden">
          {HeaderNavigationsData.map((pages, index) => (
            <Link key={index} passHref href={pages.path}>
              <li
                className={`text-[16px] font-inter leading-[24px] ${
                  pages.path === pathname
                    ? "text-primary-theme"
                    : "text-heading-color hover:text-primary-theme"
                }`}
              >
                {pages.title}
              </li>
            </Link>
          ))}
        </ul>

        {/* CALL TO ACTION BUTTON */}
        <div className="lg:flex items-center gap-2 hidden">
          <Button
            onClick={() => handleNavigation("/contact-us")}
            className="h-[54px] border border-heading-color text-heading-color hover:bg-blue-50 font-inter"
          >
            Contact Us
          </Button>
          <Button
            onClick={() => handleNavigation("/registration/trademark/step-1")}
            className="h-[54px] bg-primary-theme text-white hover:bg-primary-hover font-inter"
          >
            Register Your Mark Now
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <HiMenuAlt3 className="text-[25px] lg:hidden" />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader className="h-[130px]">
              <SheetTitle className="text-start text-heading-color text-[18px] font-inter">
                Legal <span className="text-primary-theme">Trademark</span>{" "}
                Office
              </SheetTitle>
              <SheetDescription className="text-[12px] text-start">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>

              <Separator className="!mt-6" />
            </SheetHeader>

            <div className="overflow-y-auto h-[calc(100%-130px)] max-md:py-4">
              <ul className="flex flex-col gap-8">
                {SidebarNavigationsData.map((page, index) => (
                  <React.Fragment key={index}>
                    {page.path ? (
                      <Link href={page.path} passHref>
                        <li className="text-[14px] font-inter leading-[24px] text-heading-color">
                          {page.title}
                        </li>
                      </Link>
                    ) : (
                      <div className="space-y-2">
                        <li className="text-[14px] font-inter leading-[24px] text-heading-color underline">
                          {page.title}
                        </li>
                        <ul className="flex flex-col gap-4 ml-2">
                          {page.subItems?.map((subItem, subIndex) => (
                            <Link href={subItem.path} key={subIndex} passHref>
                              <li className="text-[14px] font-inter leading-[24px] text-heading-color hover:text-primary-theme cursor-pointer">
                               {subIndex + 1}. {subItem.title}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
