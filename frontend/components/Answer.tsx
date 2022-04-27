import React from 'react'
import { Box, HStack, Text, VStack, Checkbox } from '@chakra-ui/react'

const Answer = () => {
  return (
    <>
      <HStack
        w="full"
        cursor={'pointer'}
        h="14"
        border="1px solid white"
        p="4"
        justify="space-between"
      >
        <Text>Tayo Akosile</Text>
        <Checkbox id="clicked" colorScheme='green' />
      </HStack>
    </>
  )
}

export default Answer
