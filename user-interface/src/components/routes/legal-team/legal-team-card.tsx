import React from "react";
import Image from "next/image";

import { LegalTeamCardProps } from "@/interfaces/legal-team-page-interfaces";

import { Card, CardContent } from "@/components/ui/card";

const LegalTeamCard = ({ img, title, designation }: LegalTeamCardProps) => {
  return (
    <Card>
      <CardContent className="py-0 pt-4 px-4 w-full h-full relative">
        <Image src={img} alt="Our Legal Team Employee" className="relative w-auto h-[400px] mx-auto" />
        <div className="w-[80%] p-2 bg-white/70 backdrop-blur-md absolute bottom-6 left-1/2 -translate-x-[50%] rounded-xl flex-center flex-col">
          <h1 className="text-heading-color font-inter font-bold leading-[26px]">
            {title}
          </h1>
          <p className="text-[14px] leading-[22px]">{designation}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LegalTeamCard;
