import React from 'react'
import { Box, Checkbox, HStack, Text, VStack } from '@chakra-ui/react'
import Answer from './Answer'

const Question = () => {
  return (
    <>
      <Box as="section" color="whiteAlpha.900" pt="12" cursor={'click'}>
        <Text lineHeight={'taller'}>
          What is the first name of Fuoye's VC first name of Fuoye's VCfirst
          name of Fuoye's VCfirst name of Fuoye's VCfirst name of Fuoye's VC
        </Text>
        {/* Answers */}
        <VStack pt="8" spacing="6">
          <Answer />
          <Answer />
          <Answer />
        </VStack>
        
      </Box>
    </>
  )
}

export default Question
