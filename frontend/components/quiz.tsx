import { Box, Heading, HStack, VStack } from '@chakra-ui/react'

const QuizComponent = () => {
  return (
    <Box as="span">
      <Box
        position="relative"
        w="full"
        // h="48"
        h={{ base: '48', lg: '60' }}
        bg="secondary.500"
        borderBottomRightRadius={'10px'}
        borderBottomLeftRadius={'10px'}
        p="3"
      >
        <HStack
          position="absolute"
          h="52"
          width={{ base: '90%', lg: '70%' }}
          mx="auto"
          bg="secondary.900"
          mt="8"
          color="#fff"
          left="0"
          right="0"
          justify={'space-around'}
        >
          <Heading size="md">
            Play and <br /> earn tokens
          </Heading>
          <VStack spacing="-4px">
            <Heading size="xl">
              Play &<br /> Win Coin
            </Heading>
          </VStack>
        </HStack>
      </Box>
    </Box>
  )
}

export default QuizComponent
