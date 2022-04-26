import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'

const Index = () => {
  return (
    <Flex
      h="fit"
      w="full"
      justify={'center'}
      p="12"
      sx={{
        input: {
          outline: 'none',
          '&:hover,&:focus': {
            boxShadow: '0 0 0 1px #E48E21',
          },
        },
        button: {
          bg: '#E48E21',
          color: 'white',
          fontWeight: 400,
        },
      }}
    >
      <VStack
        align="center"
        as="section"
        bg="#101727"
        border="3px solid #E48E21"
        rounded="md"
        fontFamily={'Noto Sans'}
        w="60%"
        pt='4'
        h="fit"
        pb="6"
      >
        <Box
          as="span"
          color="#E48E21"
          alignSelf={'flex-start'}
          w="full"
          borderBottom="3px solid #E48E21"
          p="4"
        >
          <Heading textAlign={'left'}>Meme Coin Project</Heading>
        </Box>
        <HStack color="white">
          <Text>
            Coin:
            <Text as="span">FUOYECOIN</Text>
          </Text>

          <Text>
            Ticker:
            <Text as="span">FUC</Text>
          </Text>

          <Text>
            Total Supply:
            <Text as="span">1000</Text>
          </Text>
        </HStack>
        {/* Transfer token */}
        <VStack spacing={'12'} w="40%" pt="9">
          <Box h="fit" w="full">
            <Input rounded={'xs'} />
            <Input
              rounded={'xs'}
              border="0px solid black"
              placeholder="0.000token"
            />
            <Button w="full" rounded={'xs'}>
              Transfer Token
            </Button>
          </Box>

          <Box h="24" w="full">
            <Input rounded={'xs'} />
            <Button w="full" rounded={'xs'}>
              Transfer Token
            </Button>
          </Box>
        </VStack>
        {/* Transfer token */}
        {/* Addresses*/}
        <VStack color="white" align={'flex-start'} w="40%" m="12" spacing="3">
          <Text>Contract Address:</Text>
          <Text>Token Owner Address:</Text>
          <Text>Your wallet Address:</Text>
          {/* Addresses*/}
          <Button mt="12">Connect wallet</Button>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default Index
