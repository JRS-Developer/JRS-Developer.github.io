import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

interface SocialLinkT {
  label: string;
  icon: any;
  link: string;
}

export const socialLinks: SocialLinkT[] = [
  {
    label: "Github",
    link: "https://github.com/JRS-Developer/",
    icon: SiGithub,
  },
  {
    label: "Linkedin",
    link: "https://www.linkedin.com/in/jose-jrs/",
    icon: SiLinkedin,
  },
  {
    label: "Twitter",
    link: "https://twitter.com/joserafa_s",
    icon: SiTwitter,
  },
];
