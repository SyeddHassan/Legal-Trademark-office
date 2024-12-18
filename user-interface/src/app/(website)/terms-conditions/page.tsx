import React from "react";
import { Metadata } from "next";

import { getPageMetadata } from "@/utils/meta-data";

import TermsConditionsPage from "@/pages/terms-conditions-page";

export const metadata: Metadata = getPageMetadata({
  title: "Terms and Conditions - Legal Trademark Office",
  description:
    "Understand the guidelines and policies governing the use of Legal Trademark Office services. Our terms ensure fairness, transparency, and mutual trust to protect your rights and ours.",
});

const page = () => {
  return <TermsConditionsPage />;
};

export default page;
