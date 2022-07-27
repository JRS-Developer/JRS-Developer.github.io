import { ProjectT } from "@/data/projects";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Link,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

interface Props {
  project: ProjectT;
}

function ProjectItem({ project: { desc, title, thumbnail, tech } }: Props) {
  return (
    <Flex
      bg="gray.100"
      rounded="lg"
      overflow="hidden"
      shadow="base"
      align="center"
      transition="box-shadow .2s"
      _hover={{
        shadow: "md",
        transition: "box-shadow .2s",
      }}
    >
      <Box pos="relative" w="800px" h="100%" rounded="lg" overflow="hidden">
        <Image src={thumbnail} alt={title} layout="fill" objectFit="cover" />
      </Box>
      <Flex p="4" direction="column" gap="2">
        <Heading as="h3" size="md" noOfLines={1}>
          {title}
        </Heading>
        <HStack shouldWrapChildren>
          {tech.map((tech) => (
            <Tag
              key={`${title}-${tech.name}`}
              variant="outline"
              colorScheme="teal"
            >
              <TagLeftIcon as={tech.icon} />
              <TagLabel>{tech.name}</TagLabel>
            </Tag>
          ))}
        </HStack>
        <Text>{desc}</Text>
        <HStack spacing="4" alignItems="center">
          <NextLink href="#" passHref>
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
          <NextLink href="/#" passHref>
            <IconButton
              aria-label="Go to github repository"
              icon={<SiGithub />}
              as="a"
              target="_blank"
              rel="noopener noreferrer"
            />
          </NextLink>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default ProjectItem;
