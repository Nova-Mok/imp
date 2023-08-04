// BrandLogin.js
import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  Box,
  Container,
  Heading,
  Input,
  Button,
} from '@chakra-ui/react';

function BrandLogin() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        <Container maxW="sm">
          <Heading as="h1" size="xl" mb={4}>
            Brand Login
          </Heading>
          <Input placeholder="Username" mb={3} />
          <Input type="password" placeholder="Password" mb={3} />
          <Button colorScheme="teal">Login</Button>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default BrandLogin;
