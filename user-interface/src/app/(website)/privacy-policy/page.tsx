import React from "react";
import { Metadata } from "next";

import { getPageMetadata } from "@/utils/meta-data";

import PrivacyPolicyPage from "@/pages/privacy-policy-page";

export const metadata: Metadata = getPageMetadata({
  title: "Privacy Policy - Legal Trademark Office",
  description:
    "Learn how Legal Trademark Office collects, uses, and protects your personal data. Our privacy policy ensures transparency, security, and trust for all users.",
});

const page = () => {
  return <PrivacyPolicyPage />;
};

export default page;
