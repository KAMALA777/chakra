import { Button, Circle, Flex, IconButton, Stack, useColorMode, useMediaQuery } from '@chakra-ui/react'
import { FaSun } from 'react-icons/fa' 
import React from 'react'

const Header = () => {


  return (
   <Stack>
<p>5938</p>
<Stack direction='row' spacing ='50px'>
<Button colorScheme='teal'  size='sm' variant='solid' rightIcon={<FaSun/>}> Click</Button>
<Button colorScheme='teal'  size='sm' variant='ghost' > Click</Button>
<Button colorScheme='teal'  size='sm' variant ='outline' isLoading> Click</Button>colo
<Button colorScheme='teal'  size='sm' variant='unstyled'> Click</Button>
<Button colorScheme='teal'   variant='link'  > Click</Button>
<Button colorScheme='teal'  size='lg' > Click</Button>
<IconButton  colorScheme='red'  aria-label='Search Database' />
</Stack>

  
    <Circle position={'absolute'} bg='blue.500' w='300px' h='300' opacity={0.1} alignSelf='flex-end'/>
  
   </Stack>
  )
}

export default Header