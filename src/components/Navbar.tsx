import { socialLinks } from "@/data/socialLinks";
import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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

  return (
    <Flex
      as="nav"
      px={["8", "16"]}
      alignItems="center"
      pos="relative"
      h="100%"
      justifyContent="space-between"
      borderBottom="1px"
      borderColor={["gray.500", "none"]}
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

      <MobileNav />
    </Flex>
  );
}

const DesktopNav = ({ path }: DesktopNavProps) => (
  <Box display={["none", "flex"]}>
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
    <Menu isLazy>
      {({ isOpen }) => (
        <>
          <MenuButton
            display={["flex", "none"]}
            aria-label="Toggle Menu"
            as={IconButton}
            icon={isOpen ? <HiX /> : <HiMenu />}
          />
          <MenuList>
            {navLinks.map(({ title, link }) => (
              <NextLink href={link} passHref key={`mobile-${title}`}>
                <MenuItem as="a">{title}</MenuItem>
              </NextLink>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default withRouter(Navbar);
