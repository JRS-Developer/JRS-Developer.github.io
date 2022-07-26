import ValorantImg from "@/assets/images/projects/Valorant.png";
import DogsJImg from "@/assets/images/projects/Dogs_J.png";
import CountriesImg from "@/assets/images/projects/Countries.png";
import RickAndMortyImg from "@/assets/images/projects/Rick_&_Morty.png";
import { StaticImageData } from "next/image";

interface ProjectT {
  title: string;
  desc: string;
  thumbnail: StaticImageData;
}

export const projects: ProjectT[] = [
  {
    title: "DogsJ, Dog Breeds Creator",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cum. Officiis id earum fuga, eius odit magnam corrupti repellendus perferendis expedita doloremque delectus voluptatibus quam nisi iste deleniti impedit veritatis!",
    thumbnail: DogsJImg,
  },
  {
    title: "Valorant Concept Page",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cum. Officiis id earum fuga, eius odit magnam corrupti repellendus perferendis expedita doloremque delectus voluptatibus quam nisi iste deleniti impedit veritatis!",
    thumbnail: ValorantImg,
  },
  {
    title: "Rick & Morty Search Page",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cum. Officiis id earum fuga, eius odit magnam corrupti repellendus perferendis expedita doloremque delectus voluptatibus quam nisi iste deleniti impedit veritatis!",
    thumbnail: RickAndMortyImg,
  },
  {
    title: "Countries Search Page",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cum. Officiis id earum fuga, eius odit magnam corrupti repellendus perferendis expedita doloremque delectus voluptatibus quam nisi iste deleniti impedit veritatis!",
    thumbnail: CountriesImg,
  },
];
