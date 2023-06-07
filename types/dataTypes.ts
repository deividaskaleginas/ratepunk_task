import { StaticImageData } from "next/image";

export type NavLinksData = {
  name: string;
  link: string;
};

export type InstructionData = {
  icon: StaticImageData;
  step: string;
  title: string;
  description: string;
  imgAlt: string;
};

export type AvailableData = {
  icon: StaticImageData;
  text: string;
  imgAlt: string;
};
