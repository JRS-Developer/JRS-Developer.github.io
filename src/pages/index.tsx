import Navbar from "@/components/Navbar";
import { Box, Flex, FlexProps } from "@chakra-ui/react";
import type { NextPage } from "next";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import ContactSection from "@/components/Sections/ContactSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import SectionWrapper from "@/components/Sections/SectionWrapper";
import Head from "next/head";

const Header = () => (
  <Box as="header">
    <Navbar />
  </Box>
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>José Sánchez | Full-Stack Web Developer</title>
      </Head>
      <Flex bg="white" minH="100vh" direction={"column"}>
        <Header />

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
      </Flex>
    </>
  );
};

export default Home;
