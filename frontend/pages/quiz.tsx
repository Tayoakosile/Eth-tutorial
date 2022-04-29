import React from 'react'
import { Box, HStack, VStack } from '@chakra-ui/react'
import QuizComponent from '../components/quiz'
import Quizzes from '../components/Quizzes'

const Quiz = () => {
  return (
    <Box as="section"
        bg="#EDF4F6"

    >
      <QuizComponent />
      <Quizzes />
    </Box>
  )
}

export default Quiz
