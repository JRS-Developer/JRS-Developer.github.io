import Navbar from "@/components/Navbar";
import {
  Box,
  Button,
  Flex,
  FlexProps,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { HiChevronDoubleDown, HiMail, HiDocumentText } from "react-icons/hi";
import MyPhoto from "@/assets/images/my-photo.png";
import { projects } from "@/data/projects";

interface SectionWrapperProps extends FlexProps {}

const SectionWrapper = ({ children, ...props }: SectionWrapperProps) => {
  const minH = "calc(100vh - var(--header-height))";

  return (
    <Flex direction="column" minH={minH} as="section" {...props}>
      {children}
    </Flex>
  );
};

const Home: NextPage = () => {
  return (
    <Flex bg="gray.50" minH="100vh" direction={"column"}>
      <Box
        as="header"
        position="sticky"
        top="0"
        w="100%"
        bg="whiteAlpha.900"
        backdropFilter="auto"
        backdropBlur="1px"
        boxShadow="base"
        zIndex={100}
        height="var(--header-height)"
      >
        <Navbar />
      </Box>
      <SectionWrapper
        direction="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Heading
          textAlign="center"
          display="flex"
          flexDirection="column"
          gap="2"
        >
          <Text as="span">👋</Text>
          <Text as="span">Hi, my name is</Text>
          <Text
            as="span"
            color="gray.50"
            py="1px"
            mt={1}
            px={2}
            zIndex={100}
            fontSize="5xl"
            bg="green.500"
          >
            José Sánchez
          </Text>
          <Text as="span" fontSize="3xl">
            Full-Stack Web Developer
          </Text>
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

      <SectionWrapper
        px="16"
        py="16"
        gap="8"
        // bg="gray.100"
        // borderRadius="100px"
        // borderBottomRadius="0"
        // boxShadow="0px -4px 4px rgba(60, 200, 57, 0.2)"
        // outline="1px solid black"
      >
        <Heading id="about" size="2xl">
          About me
        </Heading>
        <Flex justify="space-between" alignItems="center">
          <Text fontSize="3xl" flex="1" maxW="60%">
            <span>
              I&apos;m a full-stack web developer from Venezuela with experience
              making websites and web apps that are functional, responsive in
              any device, accessiible and maybe, good looking.
            </span>
            <br />
            <br />
            <span>
              I like learning languages, looking for UI designs and{" "}
              <i>coffee</i>. ☕
            </span>
          </Text>
          <Box
            h="300px"
            w="300px"
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
        <Flex gap="4">
          <Button leftIcon={<HiMail />} size="lg" colorScheme="teal">
            Contact Me
          </Button>
          <Button
            leftIcon={<HiDocumentText />}
            size="lg"
            variant="ghost"
            colorScheme="teal"
          >
            Download CV/Resume
          </Button>
        </Flex>
      </SectionWrapper>

      <SectionWrapper px="16" py="16" gap="8">
        <Heading id="projects" size="2xl">
          Projects
        </Heading>

        <SimpleGrid
          columns={{
            sm: 2,
          }}
        >
          {projects.map(({ desc, title, thumbnail }) => (
            <Box
              key={title}
              bg="green.500"
              w="100%"
              position="relative"
              h="600px"
              // zIndex="0"
            >
              <Image
                src={thumbnail}
                alt={title}
                layout="fill"
                // objectFit="cover"
              />
              <Box
                data-peer
                h="100%"
                w="100%"
                zIndex={1}
                position="absolute"
                top="0"
                left="0"
              ></Box>
              <Flex
                direction="column"
                align="center"
                position="absolute"
                top="0"
                left="0"
                p="8"
                h="100%"
                w="100%"
                bg="gray.900"
                color="gray.50"
                clipPath="circle(0% at 0 0)"
                transition="all .5s ease-in-out"
                _hover={{
                  clipPath: "circle(200% at 0 0)",
                }}
                _peerHover={{
                  clipPath: "circle(200% at 0 0)",
                  transition: "all .5s ease-in-out",
                  zIndex: "2",
                }}
              >
                <Heading>{title}</Heading>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </SectionWrapper>
    </Flex>
  );
};

export default Home;