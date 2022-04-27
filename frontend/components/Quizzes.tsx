import React from 'react'
import { Box, HStack, VStack, Heading, SimpleGrid } from '@chakra-ui/react'
import SingleQuizBox from './SingleQuizBox'

const Quizzes = () => {
  const topics = ['Blockchain', 'Ethereum', 'NFT', 'Solidity', 'Smart Contract']
  return (
    <>
      <Box
        as="section"
        color="secondary.900"
        w="full"
        h="fit"
        mt="32"
        bg="#EDF4F6"
        pb="4"
        px="4"
      >
        <Heading>Top Quiz Categories</Heading>

        <SimpleGrid
          columns={[3, null, 3]}
          spacing="20px"
          w="100%"
          mx="auto"
          pt="8"
        >
          {topics.map((topic) => (
            <SingleQuizBox key={topic} topic={topic} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Quizzes
