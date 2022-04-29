import {
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
  VStack
} from '@chakra-ui/react'
import Router from 'next/router'
import randomatic from 'randomatic'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { updateTotalScore } from '../store/totalScores'
import allQuiz from '../utils/quiz'
import Question from './Question'

const QuizzQuestion = ({ quizName }: { quizName: string }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const currentQuizQuestion = allQuiz[quizName]
  const dispatch = useDispatch()
  // Answer user chose
  const userChosenData = useSelector(
    (state: RootState) => state.isAnswerChecked.value.id,
  )

  // User total answer
  const userTotalQuizScore = useSelector(
    (state: RootState) => state.userTotalScore.value.score,
  )

  useEffect(() => {
    console.log(userTotalQuizScore, 'userTotalQuizScore')
  }, [userTotalQuizScore])

  return (
    <Box
      bg="#141933"
      pb={{ base: '0', lg: '10' }}
      pt="10"
      px="4"
      position={'relative'}
    >
      <VStack
        as="section"
        w={{ base: '100%', lg: '50%' }}
        mx={'auto'}
        h="100vh"
        align="flex-start"
      >
        <VStack
          spacing="1"
          align={{ base: 'flex-start', md: 'center' }}
          pb="3"
          w={{ base: 'fit', md: 'full' }}
        >
          <Text
            color="secondary.200"
            alignSelf={{ base: 'center' }}
            textAlign={{ base: 'left', md: 'center', lg: 'center' }}
          >
            Blockchain Quiz
          </Text>
          <Heading as="span" color="whiteAlpha.900">
            Question {`${currentQuestion + 1}/${currentQuizQuestion.length}`}
          </Heading>
        </VStack>

        <SimpleGrid
          columns={currentQuizQuestion.length}
          w="100%"
          spacing={3}
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          {[
            currentQuizQuestion.map((question: any) => (
              <Box
                as="span"
                key={randomatic('0a', 12)}
                // bg={
                //   currentQuizQuestion[currentQuestion].correct ===
                //   currentQuizQuestion[question].correct
                //     ? 'whiteAlpha.500'
                //     : 'brand.500'
                // }
                w="full"
                h="1"
              />
            )),
          ]}
        </SimpleGrid>

        <Question currentQuizQuestion={currentQuizQuestion[currentQuestion]} />

        <HStack
          width={{ base: '95%', lg: '100%' }}
          mx="auto"
          position={{ base: 'absolute', md: 'relative' }}
          align="center"
          bottom={{ base: '16', lg: '0' }}
          pt={{ base: '0', md: '32' }}
          left="0px"
          right="0px"
          pl="4"
          sx={{
            'button, button:hover,button:focus': {
              outline: 'none',
              boxShadow: '0 0 0 0px #000 !important',
            },
          }}
        >
          <Button
            variant={'link'}
            size="lg"
            onClick={() => {
              // currentQuestion === 0 && setCurrentQuestion(0
              currentQuestion !== 0
              setCurrentQuestion(currentQuestion - 1)
            }}
            disabled={currentQuestion + 1 === 1 ? true : false}
          >
            Previous
          </Button>
          <Spacer />
          {/* Next button */}
          <Button
            size="lg"
            w={{ base: '50%', md: '30%' }}
            disabled={!userChosenData ? true : false}
            h="12"
            onClick={() => {
              // Makes sure react does'not show an error cos of length
              console.log(currentQuizQuestion[0].correct, userChosenData)

              // If user chose the correct answer then increase total score else decrease the score
              {
                userChosenData === currentQuizQuestion[0].correct
                  ? dispatch(
                      updateTotalScore({ score: userTotalQuizScore + 1 }),
                    )
                  : dispatch(
                      updateTotalScore({
                        score:
                          userTotalQuizScore <= 0 ? 0 : userTotalQuizScore - 1,
                      }),
                    )
              }

              if (currentQuestion !== currentQuizQuestion.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
              } else {
                console.log('quiz ended')
                Router.push('/quiz/result')
              }
            }}
          >
            {currentQuestion === currentQuizQuestion.length - 1
              ? 'Complete Quiz'
              : 'Next'}
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}

export default QuizzQuestion
