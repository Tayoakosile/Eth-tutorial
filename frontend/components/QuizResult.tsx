import React from 'react'
import {
  Box,
  HStack,
  VStack,
  Heading,
  Center,
  Icon,
  Text,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import useShowResult from '../hooks/useShowResult'

const QuizResult = ({ quizScoreAndResult }: { quizScoreAndResult: any }) => {
  const {
    quizName,
    userTotalQuizScore,
    totalQuestionLength,
    earnedCoin,
    isRewardClaimed,
  } = quizScoreAndResult !== undefined && quizScoreAndResult
  const { claimReward, claimTransaction, hasUserClaimedAward } = useShowResult(
    isRewardClaimed,
  )

  return (
    <VStack
      pt="8"
      bg="#141933"
      h="100vh"
      color="white"
      sx={{
        '.quiz__app': {
          textTransform: 'uppercase',
          color: 'whiteAlpha.600',
          fontFamily: 'Roboto',
          letterSpacing: '2px',
          fontWeight: '300',
          fontSize: 'lg',
        },
      }}
    >
      <Heading className="quiz__app" fontSize="2rem !important">
        Quiz Result
      </Heading>
      <Center as="section" h="full">
        <VStack as="span">
          <Icon />
          {earnedCoin === 100 && (
            <>
              <Heading fontSize={{ base: 'xl', lg: '6xl' }}>
                Congratulations
              </Heading>
              <Text fontSize={{ base: 'md', lg: '2xl' }}>
                You passed the {quizName} quiz
              </Text>
            </>
          )}

          {/* Your score */}
          <VStack spacing="4" py="6">
            <Box as="span" textAlign={'center'}>
              <Text className="quiz__app">Total score</Text>
              <Text
                as="h2"
                letterSpacing={'2px'}
                fontSize={{ base: '2xl', lg: '5xl' }}
                fontWeight="bold"
              >
                <Text as="span" color="green">
                  {userTotalQuizScore}
                </Text>
                /{totalQuestionLength}
              </Text>
            </Box>

            <VStack as="span" textAlign={'center'} py="4">
              <Text className="quiz__app">EARNED COINS</Text>
              <Heading size="2xl">
                {earnedCoin ? earnedCoin : '---'} BLCKCOIN 💰
              </Heading>
            </VStack>
          </VStack>
          {/* Your score */}

          {hasUserClaimedAward ? (
            <>
              <HStack
                w={{ base: 'fit', lg: 'full' }}
                justify={{ base: 'center', lg: 'space-between' }}
              >
                <Link href="/quiz" passHref>
                  <Button
                    colorScheme={'gray'}
                    size="lg"
                    w="100%"
                    h={{ base: '12', lg: '14' }}
                    color="secondary.700"
                    fontWeight={'400'}
                  >
                    Take new quiz
                  </Button>
                </Link>
              </HStack>
            </>
          ) : (
            <Button
              w="100%"
              fontWeight={'400'}
              size="lg"
              h={{ base: '12', lg: '14' }}
              onClick={() => {
                claimReward(earnedCoin)
              }}
              isLoading={claimTransaction}
              loadingText="Claiming reward"
            >
              Claim Reward
            </Button>
          )}
        </VStack>
      </Center>
    </VStack>
  )
}

export default QuizResult
