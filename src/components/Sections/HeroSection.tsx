import { Text, Flex, Icon, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { HiChevronDoubleDown } from "react-icons/hi";
import SectionWrapper from "./SectionWrapper";

const { Heading } = SectionWrapper;

const HeroSection = () => {
  return (
    <SectionWrapper
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      p={["4", "0"]}
    >
      <Heading
        textAlign="center"
        display="flex"
        flexDirection="column"
        gap="2"
        size="lg"
      >
        <Text as="span">👋</Text>
        <Text as="span">Hi, my name is</Text>
        <Text
          as="span"
          color="gray.50"
          py="1px"
          mt={1}
          px={2}
          zIndex={1}
          bg="green.500"
          fontSize={["3xl", "4xl"]}
        >
          José Sánchez
        </Text>
        <Text as="span">Full-Stack Web Developer</Text>
      </Heading>
      <NextLink href="#about" passHref>
        <Flex
          as="a"
          gap="2"
          direction="column"
          position="absolute"
          bottom="4"
          alignItems="center"
          animation="bounce 1s infinite"
        >
          Scroll Down
          <Icon as={HiChevronDoubleDown} />
        </Flex>
      </NextLink>
    </SectionWrapper>
  );
};

export default HeroSection;
