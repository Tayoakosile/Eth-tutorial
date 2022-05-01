import { Box } from '@chakra-ui/react'
import ProtectedComponent from '../components/ProtectedComponent'
import QuizComponent from '../components/quiz'
import Quizzes from '../components/Quizzes'
import useConnectWallet from '../hooks/useConnectWallet'

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
