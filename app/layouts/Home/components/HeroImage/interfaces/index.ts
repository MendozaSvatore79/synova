import { StaticImageData } from "next/image";

export interface PropsHeroImage {
  src?: StaticImageData | string;
  alt?: string;
}