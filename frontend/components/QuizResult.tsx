import {
  AlertDialog,
  useClipboard,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import useShowResult from '../hooks/useShowResult'

const QuizResult = ({ quizScoreAndResult }: { quizScoreAndResult: any }) => {
  const [isOpen, setIsOpen] = useState({ open: false, earnedCoin: 0 })
  const [value, setValue] = useState(
    '0x7ce15147d6e57162bfff39049a027e845365b361',
  )
  const { hasCopied, onCopy } = useClipboard(value)

  const { onClose } = useDisclosure()

  const cancelRef = React.useRef<HTMLButtonElement>(null)

  const {
    quizName,
    score,
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
      <>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen.open}
          isCentered
          size="lg"
          closeOnOverlayClick={false}
        >
          <AlertDialogOverlay />

          <AlertDialogContent w="90%">
            <AlertDialogHeader>Claim your Coins🤑</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Text>To receive your rewards, make sure you</Text>
              <br />
              <UnorderedList fontSize="sm" spacing={'2'}>
                <ListItem>
                  Switch to{' '}
                  <Text as="span" fontStyle={'italic'} fontWeight="bold">
                    Rinkeby Test Network
                  </Text>{' '}
                  on your Metamask Wallet
                </ListItem>
                <ListItem>
                  Copy this token address and Import into your wallet
                </ListItem>
                <br />
                <Text as="span" mt="6" fontSize="lg" noOfLines={2}>
                  {value}
                </Text>
                <Button
                  onClick={onCopy}
                  variant="ghost"
                  boxShadow={'none !important'}
                >
                  {hasCopied ? 'COPIED' : 'COPY'}
                </Button>
              </UnorderedList>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                onClick={() => {
                  claimReward(isOpen.earnedCoin)
                  setIsOpen({ open: false, earnedCoin: isOpen.earnedCoin })
                }}
              >
                Done
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
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
                  {score}
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
                setIsOpen({ open: true, earnedCoin })
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
