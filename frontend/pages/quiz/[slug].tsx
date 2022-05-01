import { Box, Button, Center, Heading, Icon, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import QuizzQuestion from '../../components/QuizzQuestions'
import ProtectedComponent from '../../components/ProtectedComponent'

const QuizTitle = () => {
  // console.log()
  const router = useRouter()
  const quizName = router.query.slug as string
  const [startQuiz, setStartQuiz] = useState(false)

  return (
    <ProtectedComponent>
      {startQuiz ? (
        <QuizzQuestion quizName={quizName} />
      ) : (
        <Box as="section">
          <Center h="100vh" w="full">
            <VStack as="span" w="full" spacing={'8'}>
              <Icon />
              <Heading>{quizName} Quiz</Heading>
              <Button
                h="14"
                w={{ base: '60%', md: '30%',lg:'20%' }}
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
