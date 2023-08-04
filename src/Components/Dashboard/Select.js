import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  Box,
  Heading,
  Container,
  Input,
  Button,
  Select,
  Grid,
  GridItem,
  Divider,
} from '@chakra-ui/react';

function FindInfluencer() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        <Container maxW="xl">
          <Heading as="h1" size="xl" mb={4}>
            Influencer-Brand Connection Platform
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem colSpan={2}>
              <Input placeholder="Search by influencer name" />
            </GridItem>
            <GridItem>
              <Select placeholder="Select category">
                <option value="fashion">Fashion</option>
                <option value="fitness">Fitness</option>
                {/* Add more categories */}
              </Select>
            </GridItem>
            <GridItem>
              <Select placeholder="Select budget range">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
            </GridItem>
          </Grid>
          <Button mt={4} colorScheme="teal">
            Search
          </Button>
          <Divider my={6} />
          {/* Render influencer cards here */}
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default FindInfluencer;
