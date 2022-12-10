import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box as='section' color='#f6f7fc' bg="#6b46c1" pt='90px' pb='198px' px='10px'>
        <Heading  fontWeight={800} fontSize ='48px'> Lorem ipsum dolor sit amet.</Heading>
        <Text fontWeight={500} fontSize ='24px'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, cumque!</Text>
    </Box>
  )
}

export default Header