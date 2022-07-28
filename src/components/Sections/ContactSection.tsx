import { Box, Flex, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";
import ContactForm from "@/components/ContactForm";
import { socialLinks } from "@/data/socialLinks";
import SectionWrapper from "./SectionWrapper";

const { Heading } = SectionWrapper;

const ContactSection = () => {
  return (
    <>
      <Heading id="contact">Contact me</Heading>

      <Flex
        gap="8"
        justifyContent="center"
        alignItems="center"
        mt="8"
        wrap="wrap"
      >
        <Flex
          direction={{
            sm: "row",
            md: "column",
          }}
          gap="12"
        >
          {socialLinks.map(({ icon: Icon, label, link }) => (
            <NextLink href={link} passHref key={`contact-${label}`}>
              <IconButton
                as="a"
                icon={<Icon />}
                aria-label={label}
                variant="outline"
                shadow="base"
                rounded="full"
                size="lg"
                target="_blank"
                rel="noopeneer noreferrer"
                colorScheme="green"
              />
            </NextLink>
          ))}
        </Flex>
        <Box
          p="8"
          w={{
            sm: "100%",
            md: "auto",
          }}
          bg="gray.50"
          rounded="lg"
          shadow="md"
        >
          <ContactForm />
        </Box>
      </Flex>
    </>
  );
};

export default ContactSection;
