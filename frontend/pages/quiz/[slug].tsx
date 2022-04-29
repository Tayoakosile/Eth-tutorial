import { Box, Button, Center, Heading, Icon, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import QuizzQuestion from '../../components/QuizzQuestions'
import quiz from '../../utils/quiz'

const QuizTitle = () => {
  // console.log()
  const router = useRouter()
  const quizName = router.query.slug as string
  const [startQuiz, setStartQuiz] = useState(false)

  return (
    <>
      {startQuiz ? (
        <QuizzQuestion quizName={quizName} />
      ) : (
        <Box as="section">
          <Center h="100vh" w="full">
            <VStack as="span" w="full">
              <Icon />
              <Heading>{quizName} Quiz</Heading>
              <Button
                h="14"
                w="60%"
                size={'lg'}
                onClick={() => setStartQuiz(true)}
              >
                Start Quiz
              </Button>
            </VStack>
          </Center>
        </Box>
      )}
    </>
  )
}

export default QuizTitle
