import { StaticImageData } from "next/image";

export interface LegalTeamCardProps {
  img: string | StaticImageData;
  title: string;
  designation: string;
}
