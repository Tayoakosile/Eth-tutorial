import React from 'react'
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

const Home = () => {
  return (
    <Box
      as="section"
      position="relative"
      overflowY="hidden"
      overflowX={'hidden'}
    >
      <Box
        as="span"
        top={{ base: '-4', lg: '-8' }}
        position="absolute"
        h={{ base: '32', lg: '64' }}
        right={{ base: '-36', lg: '-20' }}
        w={{ base: '100%', lg: '20%' }}
        d={{ base: 'flex' }}
        transform={'rotate(220deg)'}
      >
        <Image
          src="/flowers.svg"
          alt="Flowers to beautify sight"
          w="100%"
          height="auto"
          objectFit={'contain'}
        />
      </Box>

      <Center color="#fff" h="100vh">
        <VStack as="span" spacing="8">
          <Image src="/quiz.svg" alt="Flowers to beautify sight" w="50%" />
          <Box as="span" textAlign={'center'}>
            <Heading>Blockchain Quiz</Heading>
            <Text>A quiz based on Blockchain Ethereum Principles</Text>
          </Box>
          <Button size="lg" h="16" w="full" bg="#EC1C68">
            Connect Wallet to Play
          </Button>
        </VStack>
      </Center>

      <Box
        as="span"
        bottom={{ base: '-2', lg: '7.5rem' }}
        position="absolute"
        h="32"
        left={{ base: '-40', lg: '-8' }}
        w="fit"
        d={{ base: 'flex', lg: 'block' }}
        transform={'rotate(400deg)'}
      >
        <Image src="/flowers.svg" alt="Flowers to beautify sight" w="100%" />
      </Box>
    </Box>
  )
}

export default Home
