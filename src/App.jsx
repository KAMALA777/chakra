
import { VStack,Flex, Heading, IconButton, useColorMode } from '@chakra-ui/react';
import './App.css';
import Header from './componenets/Header';
import { FaMoon, FaSun} from 'react-icons/fa'


function App() {

  const {colorMode, toggleColorMode} = useColorMode('dark')
  // const isDark = colorMode ==='dark'
  return (
   
    <VStack p={5}>
    <Flex w='100%'  > 
      <Heading ml={8} size ='md' fontWeight='semibold' color='cyan.500'>
        5207418 aktiv edirem 5938 alib qebul edirem
      </Heading>
    </Flex>
    <IconButton icon={colorMode ?<FaSun/> : <FaMoon/> } isRound= 'true' onClick={toggleColorMode}></IconButton>
      
    </VStack>
  );
}

export default App;
