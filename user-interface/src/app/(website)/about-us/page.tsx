import React from "react";
import { Metadata } from "next";

import { getPageMetadata } from "@/utils/meta-data";

import AboutUsPage from "@/pages/about-us-page";

export const metadata: Metadata = getPageMetadata({
  title: "About Us - Legal Trademark Office",
  description:
    "Discover the mission, vision, and values that define Legal Trademark Office. Learn about our commitment to helping businesses protect their brands and achieve success.",
});

const page = () => {
  return <AboutUsPage />;
};

export default page;
