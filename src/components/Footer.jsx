import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'24'} py={['16', '8']} >

        <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
            <VStack w={'full'} align={['center', 'flex-start']}>
                <Text fontWeight={'bold'}>Abous Us</Text>
                <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center', 'left']}>Just sell everything and invest in crypto...🤑😛</Text>
            </VStack>

            <VStack>
                <Avatar boxSize={'28'} mt={['4', '0']}/>
                <Text textAlign={'center'}>Our Billionaire Founder</Text>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer