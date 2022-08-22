import { socialLinks } from "@/data/socialLinks";
import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { NextRouter, withRouter } from "next/router";
import { HiMenu, HiX } from "react-icons/hi";

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

interface DesktopNavProps {
  path: string;
}

function Navbar({ router: { asPath } }: Props) {
  const path = asPath.replace("/", "");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      direction="column"
      minH="var(--header-height)"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      zIndex={10}
      bg="whiteAlpha.900"
      backdropFilter="auto"
      backdropBlur="1px"
    >
      <Flex
        px={["8", "16"]}
        alignItems="center"
        pos="relative"
        flex={1}
        justifyContent="space-between"
        borderBottom="1px"
        borderColor={["gray.500", "none"]}
        minH="var(--header-height)"
      >
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

        <DesktopNav path={path} />

        <IconButton
          icon={isOpen ? <HiX /> : <HiMenu />}
          aria-label="Open Menu"
          onClick={isOpen ? onClose : onOpen}
          display={["flex", "none"]}
          variant="ghost"
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Flex>
  );
}

const DesktopNav = ({ path }: DesktopNavProps) => (
  <Box display={["none", "flex"]} as="nav">
    <Flex gap="8">
      {navLinks.map(({ link, title }) => (
        <NextLink key={title} href={link} passHref replace={true}>
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
              color: "green.400",
            }}
          >
            <Icon as={icon} h={4} w={4} />
          </Link>
        </NextLink>
      ))}
    </Flex>
  </Box>
);

const MobileNav = () => {
  return (
    <Flex
      as="nav"
      direction="column"
      px="8"
      py="4"
      zIndex={100}
      bg="whiteAlpha.800"
      backdropFilter="auto"
      backdropBlur="1px"
      boxShadow="lg"
    >
      {navLinks.map((navLink) => (
        <NextLink key={`${navLink.title}-mobile`} href={navLink.link} passHref>
          <Link py="2">{navLink.title}</Link>
        </NextLink>
      ))}
    </Flex>
  );
};

export default withRouter(Navbar);
