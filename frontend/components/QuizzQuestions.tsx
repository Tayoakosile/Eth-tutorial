import React from 'react'
import Question from './Question'
import {
  Spacer,
  Box,
  HStack,
  VStack,
  Text,
  Heading,
  SimpleGrid,
  Button,
} from '@chakra-ui/react'

const QuizzQuestion = () => {
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
          align={{ base: 'flex-start', lg: 'center' }}
          pb="3"
          w={{ base: 'fit', lg: 'full' }}
        >
          <Text
            color="secondary.200"
            alignSelf="center"
            textAlign={{ base: 'left', lg: 'center' }}
          >
            Blockchain Quiz
          </Text>
          <Heading as="span" color="whiteAlpha.900">
            Question 6/20
          </Heading>
        </VStack>

        <SimpleGrid columns={10} w="100%" spacing={3}>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
          <Box as="span" bg="whiteAlpha.600" w="full" h="1"></Box>
        </SimpleGrid>

        <Question />

        <HStack
          width={{ base: '95%', lg: '100%' }}
          mx="auto"
          position={'absolute'}
          align="center"
          bottom={{ base: '16', lg: '0' }}
          left="0px"
          right="0px"
          pl="4"
        >
          <Button variant={'link'} size="lg">
            Quit Quiz
          </Button>
          <Spacer />
          <Button size="lg" w="50%" h="12">
            Next
          </Button>
        </HStack>
      </VStack>
    </Box>
  )
}

export default QuizzQuestion
