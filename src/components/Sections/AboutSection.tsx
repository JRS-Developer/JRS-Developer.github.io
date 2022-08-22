import { Flex, Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HiDocumentText, HiMail } from "react-icons/hi";
import MyPhoto from "@/assets/images/my-photo.png";
import SectionWrapper from "./SectionWrapper";
import Link from "next/link";

const { Heading } = SectionWrapper;

const AboutSection = () => {
  return (
    <>
      <Heading id="about">About me</Heading>
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        alignItems="center"
        gap="8"
      >
        <Text
          fontSize={["md", "2xl"]}
          flex="1"
          maxW={["auto", "60%"]}
          textAlign="left"
        >
          <span>
            I&apos;m a full-stack web developer from Venezuela with experience
            making websites and web apps that are functional, responsive in any
            device, accessiible and maybe, good looking.
          </span>
          <br />
          <br />
          <span>
            I like learning languages, looking for UI designs and <i>coffee</i>.
            ☕
          </span>
        </Text>
        <Box
          h={["150px", "300px"]}
          w={["150px", "300px"]}
          borderRadius="50%"
          overflow="hidden"
          position="relative"
          border="2px"
          borderColor="green.500"
        >
          <Image
            src={MyPhoto}
            alt="My personal photo, it's not the best but it works"
            layout="fill"
          />
        </Box>
      </Flex>
      <Flex gap="4" direction={["column", "row"]}>
        <Link href="#contact" passHref>
          <Button leftIcon={<HiMail />} size="lg" colorScheme="teal" as="a">
            Contact Me
          </Button>
        </Link>
        <Button
          leftIcon={<HiDocumentText />}
          size="lg"
          variant="ghost"
          colorScheme="teal"
        >
          Download CV
        </Button>
      </Flex>
    </>
  );
};

export default AboutSection;
