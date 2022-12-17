
import { VStack,Flex, Heading, IconButton, useColorMode, Spacer } from '@chakra-ui/react';
import './App.css';
import Header from './componenets/Header';
import { FaGithub, FaInstagram, FaLinkedin, FaMoon, FaSun} from 'react-icons/fa'
import Portfile from './componenets/Portfile';
import Social from './componenets/Social';


function App() {

  const {colorMode, toggleColorMode} = useColorMode('dark')
  // const isDark = colorMode ==='dark'
  return (
   
    <VStack p={5}>
    <Flex w='100%'  > 
      <Heading ml={8} size ='md' fontWeight='semibold' color='cyan.500'>
 LOGO
      </Heading>
      
      <Spacer></Spacer>
      <IconButton icon={<FaInstagram/>}  isRound= 'true' onClick={toggleColorMode}></IconButton>
    <IconButton ml={2} icon={ <FaLinkedin/>} isRound= 'true' onClick={toggleColorMode}></IconButton>
    <IconButton ml={2} icon={ <FaGithub/> } isRound= 'true' onClick={toggleColorMode}></IconButton>
    <IconButton ml={48} icon={colorMode ?<FaSun/> : <FaMoon/> } isRound= 'true' onClick={toggleColorMode}></IconButton>
    </Flex>
    <Header/>
    <Social></Social>
    <Portfile/>
 
      
    </VStack>
  );
}

export default App;
