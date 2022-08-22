import Navbar from "./Navbar";
import { Flex } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Flex bg="white" minH="100vh" direction={"column"} as="main">
        {children}
      </Flex>
    </>
  );
};

export default Layout;
