import ValorantImg from "@/assets/images/projects/Valorant.jpg";
import DogsJImg from "@/assets/images/projects/Dogs_J.jpg";
import CountriesImg from "@/assets/images/projects/Countries.jpg";
import RickAndMortyImg from "@/assets/images/projects/Rick_&_Morty.jpg";
import { StaticImageData } from "next/image";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
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

type TechNames = "react" | "html" | "css" | "node" | "js";

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
  js: {
    name: "JavaScript",
    icon: SiJavascript,
  },
};

export const projects: ProjectT[] = [
  {
    title: "DogsJ, Dog Breeds Creator",
    desc: "This is my individual project for SoyHenry Bootcamp, a dog breeds creator where users can search, edit and create any kind of dog breeds",
    thumbnail: DogsJImg,
    tech: [techs.html, techs.css, techs.react, techs.node],
    repository: "https://github.com/JRS-Developer/PI-Dogs",
    link: "https://jrs-dogs.netlify.app/",
  },
  {
    title: "Valorant Concept Page",
    desc: "This is an informative webpage where users can look some characters and weapons from the Valorant FPS game, it's made following the design made by the UI designer Unpicked.",
    thumbnail: ValorantImg,
    tech: [techs.html, techs.css, techs.react],
    repository: "https://github.com/JRS-Developer/valorant",
    link: "https://jrs-developer.github.io/valorant/",
  },
  {
    title: "Rick & Morty Search Page",
    desc: "This is an app made using JavaScript and Rick & Morty API where users can look for characters from the Rick & Morty show, check the type, check if it's alive, etc.",
    thumbnail: RickAndMortyImg,
    tech: [techs.html, techs.css, techs.js],
    repository: "https://github.com/JRS-Developer/rick-morty",
    link: "https://jrs-developer.github.io/rick-morty/",
  },
  {
    title: "Countries Search Page",
    desc: "This is an app made with ReactJS and Countries REST API, where users can look for countries information and search the countries by name and region.",
    thumbnail: CountriesImg,
    tech: [techs.html, techs.css, techs.react],
    repository: "https://github.com/JRS-Developer/rest-countries",
    link: "https://countries-jrs.netlify.app/",
  },
];
