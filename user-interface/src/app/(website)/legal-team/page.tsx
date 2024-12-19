import React from "react";
import { Metadata } from "next";

import { getPageMetadata } from "@/utils/meta-data";

import LegalTeamPage from "@/pages/legal-team-page";

export const metadata: Metadata = getPageMetadata({
  title: "Our Legal Team - Legal Trademark Office",
  description:
    "Meet the dedicated experts at Legal Trademark Office who are committed to guiding you through your trademark journey. Our team provides professional insights and support to ensure your brand's protection.",
});

const page = () => {
  return <LegalTeamPage />;
};

export default page;
