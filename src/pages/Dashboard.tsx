import React from 'react';
import { Box, Heading } from '@chakra-ui/core';
import { Layout } from '../layouts/Layout';
import { loggedInState } from '../app/AppContext';

interface DashbooardProps {
  status: loggedInState;
}

export const Dashboard = (props: DashbooardProps): JSX.Element => {
  return (
    <Layout>
      <Box>
        <Heading>Dashboard</Heading>
        <p>Status: {props.status.userStatus}</p>
      </Box>
    </Layout>
  );
};
