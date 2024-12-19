import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import LegalTeamEmployee01 from "../../../../public/images/our-legal-team-employee-01-img.png";

const LegalTeamCard = () => {
  return (
    <Card>
      <CardContent className="py-0 pt-4 px-4 w-full h-full relative">
        <Image
          src={LegalTeamEmployee01}
          alt="Our Legal Team Employee"
          className="relative"
        />
        <div className="w-[80%] p-2 bg-white/70 backdrop-blur-md absolute bottom-6 left-1/2 -translate-x-[50%] rounded-xl flex-center flex-col">
          <h1 className="text-heading-color font-inter font-bold leading-[26px]">
            Orlando Diggs
          </h1>
          <p className="text-[14px] leading-[22px]">Co-Founder abd CEO</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LegalTeamCard;
