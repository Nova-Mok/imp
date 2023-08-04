// BrandDashboard.js
import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  Box,
  Container,
} from '@chakra-ui/react';
import Admin from '../../layouts/admin/admin'
import FindInfluencer from '../../Components/Dashboard/Select';

function BrandDashboard() {
  return (
    <ChakraProvider>
      <Admin>
      <CSSReset />
      <Box p={2}>
        <Container maxW="xl">
          <FindInfluencer></FindInfluencer>
        </Container>
      </Box>
      </Admin>
    </ChakraProvider>
  );
}

export default BrandDashboard;

