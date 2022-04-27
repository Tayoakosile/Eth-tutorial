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

const QuizResult = () => {
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
          <Heading fontSize={{ base: 'xl', lg: '6xl' }}>
            Congratulations
          </Heading>
          <Text fontSize={{ base: 'md', lg: '2xl' }}>You passed the quiz</Text>

          {/* Your score */}
          <VStack spacing="4" py="6">
            <Box as="span" textAlign={'center'}>
              <Text className="quiz__app">Your score</Text>
              <Text
                as="h2"
                letterSpacing={'2px'}
                fontSize={{ base: '2xl', lg: '5xl' }}
                fontWeight="bold"
              >
                <Text as="span" color="green">
                  20
                </Text>
                /20
              </Text>
            </Box>

            <VStack as="span" textAlign={'center'} py="4">
              <Text className="quiz__app">EARNED COINS</Text>
              <Heading size="2xl">200 💰</Heading>
            </VStack>
          </VStack>
          {/* Your score */}

          <HStack
            w={{ base: 'fit', lg: 'full' }}
            justify={{ base: 'center', lg: 'space-between' }}
          >
            <Button
              colorScheme={'gray'}
              size="lg"
              w="50%"
              h={{ base: '12', lg: '14' }}
              color="secondary.700"
              fontWeight={'400'}
            >
              Take new quiz
            </Button>
            <Button
              w="50%"
              fontWeight={'400'}
              size="lg"
              h={{ base: '12', lg: '14' }}
            >
              Share Result
            </Button>
          </HStack>
        </VStack>
      </Center>
    </VStack>
  )
}

export default QuizResult
