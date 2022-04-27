import React from 'react'
import {
  Box,
  HStack,
  VStack,
  Center,
  Heading,
  Button,
  Icon,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import QuizzQuestion from '../../components/QuizzQuestions'

const QuizTitle = () => {
  const router = useRouter()
  return (
    <>
      {/* <Box as="section">
        <Center h="100vh" w="full">
          <VStack as="span" w="full">
            <Icon />
            <Heading>{router.query.slug}</Heading>
            <Button h="14" w="60%" size={'lg'}>
              Start Quiz
            </Button>
          </VStack>
        </Center>
      </Box>
       */}
      <QuizzQuestion />
    </>
  )
}

export default QuizTitle
