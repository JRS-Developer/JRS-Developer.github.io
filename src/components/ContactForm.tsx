import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { HiMail, HiUser } from "react-icons/hi";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = () => {};

  return (
    <VStack
      as="form"
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit(onSubmit)}
      spacing="4"
    >
      {/* This is for Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      <FormControl isInvalid={Boolean(errors.name)} isRequired>
        <FormLabel htmlFor="name">Name</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <HiUser />
          </InputLeftElement>
          <Input
            colorScheme="green"
            id="name"
            placeholder="Your Name"
            variant="flushed"
            {...register("name", {
              required: "Name is required",
            })}
          />
        </InputGroup>
        <FormErrorMessage>
          {errors?.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.email)} isRequired>
        <FormLabel htmlFor="email">Email</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <HiMail />
          </InputLeftElement>
          <Input
            id="email"
            placeholder="Your Email Address"
            variant="flushed"
            {...register("email", {
              required: "Emaill address is required",
            })}
          />
        </InputGroup>
        <FormErrorMessage>
          {errors?.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.message)} isRequired>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          id="message"
          placeholder="Your Message"
          {...register("message", {
            required: "Message is required",
          })}
          resize="none"
        />
        <FormErrorMessage>
          {errors?.message && errors.message.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        isLoading={isSubmitting}
        type="submit"
        colorScheme="teal"
        w="100%"
      >
        Send Message
      </Button>
    </VStack>
  );
}

export default ContactForm;