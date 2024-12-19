import React from "react";

import LegalTeamCard from "./legal-team-card";
import { LegalTeamCardData } from "@/constants/legal-team-page-data";

const LegalTeamSection = () => {
  return (
    <section className="layout-standard section-margin-standard grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8">
      {LegalTeamCardData.map((member, index) => (
        <LegalTeamCard
          key={index}
          img={member.img}
          title={member.name}
          designation={member.position}
        />
      ))}
    </section>
  );
};

export default LegalTeamSection;
