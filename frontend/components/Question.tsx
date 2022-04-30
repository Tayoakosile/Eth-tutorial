import React from 'react'
import { Box, Checkbox, HStack, Text, VStack } from '@chakra-ui/react'
import Answer from './Answer'
import randomatic from 'randomatic'

const Question = ({ currentQuizQuestion }: { currentQuizQuestion: any }) => {
  const { question, answers } = currentQuizQuestion
  return (
    <>
      <Box
        as="section"
        color="whiteAlpha.900"
        pt={{ base: '12', lg: '6' }}
        cursor={'click'}
        w="full"
      >
        <Text lineHeight={'taller'} fontSize={{ base: 'md', lg: 'lg' }}>
          {question}
        </Text>
        {/* Answers */}
        <VStack
          pt="8"
          spacing="6"
          w="full"
          sx={{
            '.isChecked': {
              bg: 'brand.500',
            },
          }}
        >
          {[
            answers.map((options: any) => (
              <Answer key={randomatic('0a', 12)} options={options} />
            )),
          ]}
        </VStack>
      </Box>
    </>
  )
}

export default Question
