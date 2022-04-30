import React from 'react'
import { Box, HStack, VStack } from '@chakra-ui/react'
import QuizComponent from '../components/quiz'
import Quizzes from '../components/Quizzes'
import useConnectWallet from '../hooks/useConnectWallet'
import ProtectedComponent from '../components/ProtectedComponent'

const Quiz = () => {
  const { user, account } = useConnectWallet()
  console.log(user)
  return (
    <ProtectedComponent>
      <Box as="section" bg="#EDF4F6">
        <QuizComponent />
        <Quizzes />
      </Box>
    </ProtectedComponent>
  )
}

export default Quiz
