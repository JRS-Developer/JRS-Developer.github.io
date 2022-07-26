import { socialLinks } from "@/data/socialLinks";
import { Box, Flex, Heading, Icon, Link, Spacer, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { NextRouter, useRouter, withRouter } from "next/router";
import { MouseEvent } from "react";

interface LinkT {
  title: string;
  link: string;
}

const navLinks: LinkT[] = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

interface Props {
  router: NextRouter;
}

function Navbar({ router: { asPath } }: Props) {
  const path = asPath.replace("/", "");

  return (
    <Flex as="nav" px="16" alignItems="center" h="100%">
      <NextLink href="/" passHref>
        <Link
          _hover={{
            textDecor: "none",
          }}
        >
          <Heading as="h1" size="sm" fontWeight="semibold">
            José Sánchez
          </Heading>
        </Link>
      </NextLink>

      <Spacer />

      <Flex gap="8">
        {navLinks.map(({ link, title }) => (
          <NextLink key={title} href={link} passHref>
            <Link
              fontWeight="medium"
              rounded="md"
              _active={{
                textColor: "gray.900",
              }}
              _hover={{
                textDecor: "none",
                textColor: "gray.900",
              }}
              textColor={`${link === path ? "gray.900" : "gray.400"}`}
            >
              {title}
            </Link>
          </NextLink>
        ))}
      </Flex>

      <Flex ml="12" alignItems="center" gap="4">
        {socialLinks.map(({ icon, label, link }) => (
          <NextLink href={link} key={label} passHref>
            <Link
              display="flex"
              alignItems="center"
              isExternal
              _hover={{
                opacity: 0.75,
              }}
            >
              <Icon as={icon} h={4} w={4} />
            </Link>
          </NextLink>
        ))}
      </Flex>
    </Flex>
  );
}

export default withRouter(Navbar);
