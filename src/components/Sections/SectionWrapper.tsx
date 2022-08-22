import { Flex, FlexProps, Heading, HeadingProps } from "@chakra-ui/react";

interface Props extends FlexProps {
  showPadding?: boolean;
  viewportHeight?: boolean;
}

interface SectionHeadingT extends HeadingProps {
  id?: string;
  hasScrollMargin?: boolean;
}

const SectionWrapper = ({
  children,
  viewportHeight,
  showPadding = false,
  ...props
}: Props) => {
  const minH = viewportHeight ? "100vh" : "calc(100vh - var(--header-height))";
  const padding = showPadding ? ["8", "16"] : "0";

  return (
    <Flex p={padding} direction="column" minH={minH} as="section" {...props}>
      {children}
    </Flex>
  );
};

const SectionHeading = ({
  children,
  hasScrollMargin = true,
  id,
  ...props
}: SectionHeadingT) => {
  const scrollMargin = hasScrollMargin
    ? "calc(3rem + var(--header-height))"
    : "0";

  return (
    <Heading id={id} size="2xl" scrollMarginTop={scrollMargin} {...props}>
      {children}
    </Heading>
  );
};

SectionWrapper.Heading = SectionHeading;

export default SectionWrapper;
