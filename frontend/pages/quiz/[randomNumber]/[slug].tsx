import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  VStack,
  Image,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ProtectedComponent from '../../../components/ProtectedComponent'
import QuizzQuestion from '../../../components/QuizzQuestions'
// import QuizzQuestion fro../../../components/QuizzQuestionsons'
// import ProtectedComponent fro../../../components/ProtectedComponentent'

const QuizTitle = () => {
  // console.log()
  const router = useRouter()
  const quizName = router.query.slug as string
  const randomNumber = router.query.randomNumber as any
  const [startQuiz, setStartQuiz] = useState(false)

  const allQuizImages = [
    '/quiz-1.png',
    '/quiz-2.png',
    '/quiz-3.png',
    '/quiz-4.png',
    '/ideas.png',
  ]
  return (
    <ProtectedComponent>
      {startQuiz ? (
        <QuizzQuestion quizName={quizName} />
      ) : (
        <Box as="section">
          <Center h="100vh" w="full">
            <VStack as="span" w="full" spacing={'8'}>
              <Image
                src={allQuizImages[randomNumber]}
                w={{ base: '32', lg: '48' }}
                h={{ base: '32', lg: '48' }}
                alt="quiz image"
              />
              <Heading>
                {quizName == 'Smart' ? 'Smart Contract ' : quizName} Quiz
              </Heading>
              <Button
                h="14"
                w={{ base: '60%', md: '30%', lg: '20%' }}
                size={'lg'}
                onClick={() => setStartQuiz(true)}
              >
                Start Quiz
              </Button>
            </VStack>
          </Center>
        </Box>
      )}
    </ProtectedComponent>
  )
}

export default QuizTitle
