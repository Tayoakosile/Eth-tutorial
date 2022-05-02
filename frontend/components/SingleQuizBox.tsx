import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Heading,
  Image,
  Input,
  VStack,
} from '@chakra-ui/react'
import { useRef } from 'react'
import useDeposit from '../hooks/useDeposit'
import { Text } from '@chakra-ui/react'

const SingleQuizBox = ({ topic }: { topic: string }) => {
  const cancelRef = useRef(null)
  const {
    depositToPlay,
    showDialog,
    EthValue,
    onClose,
    handleChange,
    isLoading,
    error,
    sendEther,
  } = useDeposit()
  const allQuizImages = [
    '/quiz-1.png',
    '/quiz-2.png',
    '/quiz-3.png',
    '/quiz-4.png',
    '/ideas.png',
  ]
  const randomNumber = Math.round(Math.random() * (allQuizImages.length - 1))
  // const {  } = useDeposit()

  return (
    <>
      <>
        <AlertDialog
          isOpen={showDialog}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          closeOnEsc={true}
          closeOnOverlayClick={true}
        >
          <AlertDialogOverlay>
            <AlertDialogContent w="90%">
              <AlertDialogHeader fontSize="md" fontWeight="normal">
                You need to deposit some ETH to play this{' '}
                {topic == 'Smart' ? 'Smart Contract' : topic} Quiz
              </AlertDialogHeader>

              <AlertDialogBody>
                <Input
                  placeholder="Input your Best Offer"
                  rounded={'sm'}
                  value={EthValue}
                  onChange={handleChange}
                  type="number"
                />
                {error && (
                  <Text p="2" fontSize={'sm'} color="red">
                    {error}
                  </Text>
                )}
                <Button
                  w="full"
                  rounded={'sm'}
                  size="lg"
                  mt="1"
                  onClick={() => sendEther(randomNumber, topic)}
                  _hover={{ boxShadow: '0 0 0 0px rgb(000)' }}
                  _focus={{ boxShadow: '0 0 0 0px rgb(000)' }}
                  isLoading={isLoading}
                  loadingText="Depositing....."
                >
                  Deposit
                </Button>
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose} variant="ghost">
                  Cancel
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
      <VStack
        as="section"
        onClick={() => {
          depositToPlay(topic, randomNumber)
        }}
        w="full"
        h={{ base: '28', lg: '48' }}
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
