import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

interface SocialLinkT {
  label: string;
  icon: any;
  link: string;
}

export const socialLinks: SocialLinkT[] = [
  {
    label: "Github",
    link: "",
    icon: SiGithub,
  },
  {
    label: "Linkedin",
    link: "",
    icon: SiLinkedin,
  },
  {
    label: "Twitter",
    link: "",
    icon: SiTwitter,
  },
];
