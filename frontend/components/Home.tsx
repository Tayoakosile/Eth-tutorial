import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import useConnectWallet from '../hooks/useConnectWallet'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const Home = () => {
  const { isWalletConnecting } = useSelector(
    (state: RootState) => state.walletAddress.value,
  )
  const { connectAccount } = useConnectWallet()
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
        position="fixed"
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

      <Center color="#fff" h={{ base: '90vh', lg: '100vh' }} w="full">
        <VStack as="span" spacing="8" w="90%" mx="auto">
          <Image
            src="/quiz.svg"
            alt="Flowers to beautify sight"
            w={{ base: '50%', md: '20%' }}
            h="auto"
          />
          <Box as="span" textAlign={'center'}>
            <Heading>Blockchain Quiz</Heading>
            <Text w="90%" mx="auto">
              A quiz based on Blockchain Ethereum Principles
            </Text>
          </Box>
          <Button
            size="lg"
            h="14"
            w={{ base: '80%', md: '40%',lg:'25%' }}
            bg="#EC1C68"
            onClick={connectAccount}
            loadingText="Connecting"
            isLoading={isWalletConnecting}
          >
            Connect Wallet to Play
          </Button>
        </VStack>
      </Center>

      <Box
        as="span"
        bottom={{ base: '-3', lg: '7.5rem' }}
        position="fixed"
        h="32"
        left={{ base: '-4', lg: '-8' }}
        w="fit-content"
        d={{ base: 'flex', lg: 'block' }}
        className="flowers"
        transform={'rotate(400deg)'}
      >
        <Image src="/flowers.svg" alt="Flowers to beautify sight" w="90%" />
      </Box>
    </Box>
  )
}

export default Home
