import { Box, Button, Flex, IconButton, useColorMode } from '@chakra-ui/core';
import React from 'react';

import { Registration } from './auth/Registration';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav>
      <Flex py={5} px={5} justify="flex-end">
        <Box>
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
