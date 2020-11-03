import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Button,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/core';

interface Registration {
  email: string;
  password: string;
  password_confirmation: string;
  registrationErrors: string;
}

export const Registration = () => {
  const [formState, setFormState] = useState<Registration>({
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: '',
  });

  const handleSubmit = (event: any) => {
    console.log('form submitted');
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setFormState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  return (
    <Box>
      <Heading>Registration</Heading>

      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            type="email"
            id="email"
            aria-describedby="email-helper-text"
            onChange={handleChange}
          />
          <FormHelperText id="email-helper-text">
            Please enter your email.
          </FormHelperText>
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="email">Password</FormLabel>
          <Input
            type="password"
            id="password"
            aria-describedby="password-helper-text"
            onChange={handleChange}
          />
          <FormHelperText id="password-helper-text">
            Please enter a password.
          </FormHelperText>
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="email">Password confirmation</FormLabel>
          <Input
            type="password_confirmation"
            id="password_confirmation"
            aria-describedby="password_confirmation-helper-text"
            onChange={handleChange}
          />
          <FormHelperText id="password-helper-text">
            Please confirm your password.
          </FormHelperText>
        </FormControl>

        <Button mr={2} variantColor="blue" type="submit">
          Sign up
        </Button>
      </form>
    </Box>
  );
};
