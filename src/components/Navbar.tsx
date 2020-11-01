import { Box, Button, Flex, IconButton, useColorMode } from '@chakra-ui/core';
import React from 'react';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav>
      <Flex py={5} px={5} justify="flex-end">
        <Box>
          <Button mr={2} variantColor="blue">
            Login
          </Button>
          <Button mr={2} variantColor="blue">
            Sign up
          </Button>

          <IconButton
            aria-label="toggle color mode"
            icon={colorMode === 'light' ? 'moon' : 'sun'}
            onClick={toggleColorMode}
          />
        </Box>
      </Flex>
    </nav>
  );
};
