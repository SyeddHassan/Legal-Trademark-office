import React from "react";
import { Metadata } from "next";

import { getPageMetadata } from "@/utils/meta-data";

import FAQsPage from "@/pages/faqs-page";

export const metadata: Metadata = getPageMetadata({
  title: "FAQs - Legal Trademark Office",
  description:
    "Find answers to common questions about our trademark registration services, processes, and policies. Discover how we help protect your brand.",
});

const page = () => {
  return <FAQsPage />;
};

export default page;
