
import './App.css';
import {  Box, Flex, Spacer, Text, Grid, HStack,Stack , VStack} from '@chakra-ui/react';
import Header from './componenets/Header';

function App() {
  return (
    <div className="App">
     <Flex>
     <Box as='header' bg ='red' w='100' h ='100px'>this is box</Box>
     
      <Box pt='60px' bg ='green.500' w='120px' h ='100px'>this is box</Box>
      <Box  bg ='red' w='320px' h ='80px'>this is box</Box>
      <Box  bg ='blue' w='220px' h ='60px'>this is box</Box>
      <Box  bg ='black' w='120px' h ='70px'>this is box</Box>
     </Flex>
     <Box>
  <Text>Flex and Spacer: Full width, equal Spacing</Text>
  <Flex>
    <Box w='70px' h='10' bg='yellow'></Box>
    <Spacer />
    <Box w='170px' h='10' bg='yellow' />
    <Spacer />
    <Box w='180px' h='40' bg='red.500' />
  </Flex>

  <Text>
    Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
  </Text>
  <Grid templateColumns='repeat(4, 2fr)' gap={1}>
    <Box w='70px' h='30' bg='blue.500' />
    <Box w='170px' h='10' bg='blue.500' />
    <Box w='180px' h='10' bg='blue.500' />
  </Grid>

  <Text >
    HStack: The children have equal spacing but don't span the whole container
  </Text>
  <HStack spacing='240px'>
    <Box w='70px' h='10' bg='teal.500' />
    <Box w='170px' h='10' bg='teal.500' />
    <Box w='180px' h='10' bg='teal.500' />
  </HStack>
</Box>
<HStack spacing={3}>
  <Text fontSize='6xl'>(6xl) In love with React & Next</Text>
  <Text fontSize='5xl'>(5xl) In love with React & Next</Text>
  <Text fontSize='4xl'>(4xl) In love with React & Next</Text>
  <Text fontSize='3xl'>(3xl) In love with React & Next</Text>
  <Text fontSize='2xl'>(2xl) In love with React & Next</Text>
  <Text fontSize='xl'>(xl) In love with React & Next</Text>
  <Text fontSize='lg'>(lg) In love with React & Next</Text>
  <Text fontSize='md'>(md) In love with React & Next</Text>
  <Text fontSize='sm'>(sm) In love with React & Next</Text>
  <Text fontSize='xs'>(xs) In love with React & Next</Text>
</HStack>

// Basic version
<Text noOfLine={5}>
  "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>

// Responsive version
<Text noOfLines={[5, 6, 7]}>
   "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created.
</Text>
<Header/>
 
    </div>
  );
}

export default App;
