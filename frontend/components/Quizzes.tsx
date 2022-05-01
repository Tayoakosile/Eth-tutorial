import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import randomatic from 'randomatic'
import SingleQuizBox from './SingleQuizBox'

const Quizzes = () => {
  const topics = ['Blockchain', 'NFT']
  return (
    <>
      <Box
        as="section"
        color="secondary.900"
        w="full"
        h="fit"
        mt="32"
        pb={{ base: '6', lg: '24' }}
        px="4"
      >
        <Heading>Top Quiz Categories</Heading>

        <SimpleGrid
          columns={[3, null, 4]}
          spacing={{ base: '20px', lg: '45px' }}
          w="100%"
          mx="auto"
          pt="8"
        >
          {topics.map((topic) => (
            <SingleQuizBox key={randomatic('0a', 12)} topic={topic} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}

export default Quizzes
