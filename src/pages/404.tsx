import SectionWrapper from "@/components/Sections/SectionWrapper";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Not Found | Jose Sanchez</title>
      </Head>
      <SectionWrapper>
        <Flex
          justify="center"
          align="center"
          flex="1"
          direction="column"
          gap="4"
        >
          <Heading>You&apos;re lost dude!</Heading>
          <Text>Relax... Click in this button and you should be fine.</Text>
          <NextLink href="/" passHref>
            <Button as="a" colorScheme="green">
              Return to home
            </Button>
          </NextLink>
        </Flex>
      </SectionWrapper>
    </>
  );
};

export default NotFoundPage;
