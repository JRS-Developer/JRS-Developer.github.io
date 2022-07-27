import ValorantImg from "@/assets/images/projects/Valorant.png";
import DogsJImg from "@/assets/images/projects/Dogs_J.png";
import CountriesImg from "@/assets/images/projects/Countries.png";
import RickAndMortyImg from "@/assets/images/projects/Rick_&_Morty.png";
import { StaticImageData } from "next/image";
import { SiCss3, SiHtml5, SiNodedotjs, SiReact } from "react-icons/si";
import type { IconType } from "react-icons";

interface TechT {
  name: string;
  icon: IconType;
}
export interface ProjectT {
  title: string;
  desc: string;
  thumbnail: StaticImageData;
  tech: TechT[];
  repository?: string;
  link?: string;
}

type TechNames = "react" | "html" | "css" | "node";

const techs: { [key in TechNames]: TechT } = {
  react: {
    name: "React.JS",
    icon: SiReact,
  },
  html: {
    name: "HTML5",
    icon: SiHtml5,
  },
  css: {
    name: "CSS3",
    icon: SiCss3,
  },
  node: {
    name: "Node.JS",
    icon: SiNodedotjs,
  },
};

export const projects: ProjectT[] = [
  {
    title: "DogsJ, Dog Breeds Creator",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cum. Officiis id earum fuga, eius odit magnam corrupti repellendus perferendis expedita doloremque delectus voluptatibus quam nisi iste deleniti impedit veritatis!",
    thumbnail: DogsJImg,
    tech: [techs.html, techs.css, techs.react, techs.node],
  },
  {
    title: "Valorant Concept Page",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cum. Officiis id earum fuga, eius odit magnam corrupti repellendus perferendis expedita doloremque delectus voluptatibus quam nisi iste deleniti impedit veritatis!",
    thumbnail: ValorantImg,
    tech: [techs.html, techs.css, techs.react],
  },
  {
    title: "Rick & Morty Search Page",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cum. Officiis id earum fuga, eius odit magnam corrupti repellendus perferendis expedita doloremque delectus voluptatibus quam nisi iste deleniti impedit veritatis!",
    thumbnail: RickAndMortyImg,
    tech: [techs.html, techs.css],
  },
  {
    title: "Countries Search Page",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cum. Officiis id earum fuga, eius odit magnam corrupti repellendus perferendis expedita doloremque delectus voluptatibus quam nisi iste deleniti impedit veritatis!",
    thumbnail: CountriesImg,
    tech: [techs.html, techs.css, techs.react],
  },
];
