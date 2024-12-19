import React from "react";
import { Metadata } from "next";

import { getPageMetadata } from "@/utils/meta-data";

import ContactUsPage from "@/pages/contact-us-page";

export const metadata: Metadata = getPageMetadata({
  title: "Contact Us - Legal Trademark Office",
  description:
    "Get in touch with Legal Trademark Office for inquiries, support, and expert guidance. We're here to assist you with all your trademark registration needs and questions.",
});

const page = () => {
  return <ContactUsPage />;
};

export default page;
