import { Heading, Icon, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const SingleQuizBox = ({ topic }: { topic: string }) => {
  const router = useRouter()
  return (
    <>
      <VStack
        as="section"
        onClick={() => router.push(`/quiz/${topic}`)}
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
        transition={'all 0.3s ease-in'}
        _hover={{
          shadow: 'lg',
        }}
        _focus={{
          transform: 'scale(4)',
          shadow: 'lg',
        }}
      >
        <Icon w="4" h="4" />
        <Heading fontSize={{ base: 'xs', lg: 'md' }} textAlign={'center'}>
          {topic}
        </Heading>
      </VStack>
    </>
  )
}

export default SingleQuizBox
