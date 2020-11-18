import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
import { Layout } from '../layouts/Layout';

import { Registration } from '../components/auth/Registration';
import { loggedInState } from '../app/AppContext';

interface HomeProps {
  status: loggedInState;
}

export const Home = (props: HomeProps): JSX.Element => {
  return (
    <Layout>
      <Box>
        <Heading>Home</Heading>
        <p>Status: {props.status.userStatus}</p>
        <Registration />
      </Box>
    </Layout>
  );
};
