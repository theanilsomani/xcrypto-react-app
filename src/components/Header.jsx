import { Button, HStack, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
   <Stack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'} direction={'row'}>
      <Stack>
        <Heading justifyContent={'left'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='4xl' fontWeight='bold'>XCrypto</Heading>
      </Stack>

      <HStack align={'right'}>
        <Button variant={'unstyled'} color={'white'} p={'4'}>
          <Link to='/'>Home</Link>
        </Button>

        <Button variant={'unstyled'} color={'white'} p={'4'}>
          <Link to='/exchanges'>Exchanges</Link>
        </Button>

        <Button variant={'unstyled'} color={'white'} p={'4'}>
          <Link to='/coins'>Coins</Link>
        </Button>
      </HStack>

    </Stack>
    </>
  )
}

export default Header