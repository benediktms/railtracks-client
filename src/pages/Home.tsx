import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
import { Layout } from '../layouts/Layout';

import { Registration } from '../components/auth/Registration';

export const Home = () => {
  return (
    <Layout>
      <Box>
        <Heading>Home</Heading>
        <Registration />
      </Box>
    </Layout>
  );
};
