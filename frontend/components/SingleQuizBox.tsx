import { Heading, Image, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const SingleQuizBox = ({ topic }: { topic: string }) => {
  const allQuizImages = [
    '/quiz-1.png',
    '/quiz-2.png',
    '/quiz-3.png',
    '/quiz-4.png',
    '/ideas.png',
  ]
  const randomNumber = Math.round(Math.random() * (allQuizImages.length - 1))
  const router = useRouter()
  return (
    <>
      <VStack
        as="section"
        onClick={() => router.push(`/quiz/${randomNumber}/${topic}`)}
        w="full"
        h={{ base: '28', lg: '40' }}
        rounded="lg"
        bg="#fff"
        spacing="4"
        shadow={'sm'}
        color="secondary.700"
        p="2"
        justify="center"
        cursor="pointer"
        transition={'all 0.2s ease-in'}
        _hover={{
          shadow: 'xl',
        }}
        _focus={{
          shadow: 'xl',
        }}
      >
        <Image
          src={allQuizImages[randomNumber]}
          w="12"
          h="12"
          alt="Quiz image"
        />
        <Heading
          fontSize={{ base: 'xs', md: 'xl', lg: '2xl' }}
          textAlign={'center'}
          textTransform="uppercase"
        >
          {topic == 'Smart' ? 'Smart Contract' : topic}
        </Heading>
      </VStack>
    </>
  )
}

export default SingleQuizBox
