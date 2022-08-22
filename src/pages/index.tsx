import type { NextPage } from "next";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import ContactSection from "@/components/Sections/ContactSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import SectionWrapper from "@/components/Sections/SectionWrapper";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>José Sánchez | Full-Stack Web Developer</title>
      </Head>

      <HeroSection />

      <SectionWrapper gap="8" showPadding>
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper gap="8" showPadding>
        <ProjectsSection />
      </SectionWrapper>

      <SectionWrapper showPadding>
        <ContactSection />
      </SectionWrapper>
    </>
  );
};

export default Home;
