import React, { useState } from 'react';
import {
  Heading,
  Button,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/core';
import axios from 'axios';

interface RegistrationState {
  email: string;
  password: string;
  password_confirmation: string;
  registrationErrors: string;
}

export const Registration = () => {
  const [formState, setFormState] = useState<RegistrationState>({
    email: '',
    password: '',
    password_confirmation: '',
    registrationErrors: '',
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const endpoint = 'http://localhost:3000/api/v1/registrations';
    const { email, password, password_confirmation } = formState;

    axios.post(
      endpoint,
      {
        user: {
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        },
      },
      // NOTE: THIS IS CRITICAL! This tells the API it is ok to set the cookie in the client
      { withCredentials: true }
    );
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    console.log(formState);
    // TS use Pick to ensure we are setting a key in the RegistrationState Interface
    setFormState({
      [name]: value,
    } as Pick<RegistrationState, keyof RegistrationState>);
  };

  // TODO: add some sort of validation logic

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
            type="password"
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
