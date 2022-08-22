import { ProjectT } from "@/data/projects";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

interface Props {
  project: ProjectT;
}

function ProjectItem({
  project: { desc, title, thumbnail, tech, link, repository },
}: Props) {
  return (
    <Flex
      rounded="lg"
      overflow="hidden"
      shadow="md"
      align="center"
      direction="column"
      transition="box-shadow .2s"
      _hover={{
        shadow: "lg",
        transition: "box-shadow .2s",
      }}
    >
      <Box w="full" overflow="hidden" rounded="lg">
        <Box
          pos="relative"
          w="100%"
          h="200px"
          overflow="hidden"
          transition="transform .2s"
          _hover={{
            transform: "scale(1.1) rotate(2deg)",
            transition: "transform .2s",
          }}
        >
          <Image
            src={thumbnail}
            alt={title}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </Box>
      </Box>
      <Flex p="4" direction="column" gap="2" flex="1">
        <Heading as="h3" size={["sm", "md"]} noOfLines={1}>
          {title}
        </Heading>
        <Flex gap="2" wrap="wrap">
          {tech.map((tech) => (
            <Tag
              key={`${title}-${tech.name}`}
              variant="outline"
              colorScheme="teal"
              size={["sm", "md"]}
            >
              <TagLeftIcon as={tech.icon} />
              <TagLabel>{tech.name}</TagLabel>
            </Tag>
          ))}
        </Flex>
        <Text fontSize={["sm", "md"]}>{desc}</Text>
        <HStack
          spacing="4"
          alignItems="center"
          wrap="wrap"
          mt="4"
          marginTop="auto"
        >
          <NextLink href={link || "#"} passHref>
            <Button
              colorScheme="teal"
              rightIcon={<HiExternalLink />}
              as="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </Button>
          </NextLink>
          <Tooltip label="Check Github" shouldWrapChildren hasArrow>
            <NextLink href={repository || "#"} passHref>
              <IconButton
                aria-label="Go to github repository"
                icon={<SiGithub />}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
              />
            </NextLink>
          </Tooltip>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default ProjectItem;
