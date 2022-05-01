import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
} from '@chakra-ui/react'
import useChangeName from '../hooks/useChangeName'

const QuizComponent = () => {
  const {
    changeName,
    currentUserName,
    handleChangeName,
    isSaving,
    handleChangeInput,
    userBalance,
  } = useChangeName()
  return (
    <>
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
        <Popover>
          {/* @ts-ignore */}
          <PopoverTrigger>
            <Button
              variant="unstyled"
              _hover={{
                boxShadow: '0 0 0 0px rgb(0,0,0) !important',
              }}
              _focus={{
                boxShadow: '0 0 0 0px rgb(0,0,0) !important',
              }}
            >
              <HStack color="#fff">
                <Avatar />
                <Heading>{currentUserName ? currentUserName : 'User'}</Heading>
              </HStack>
            </Button>
          </PopoverTrigger>
          <PopoverContent ml="6">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Your Details</PopoverHeader>
            <PopoverBody p="4">
              <Text>Name</Text>
              <HStack>
                <Input
                  value={currentUserName}
                  w="70%"
                  readOnly={changeName ? false : true}
                  onChange={handleChangeInput}
                />
                <Button
                  isLoading={isSaving}
                  loadingText="Saving..."
                  onClick={() =>
                    handleChangeName(changeName ? 'Save' : 'Change')
                  }
                >
                  {changeName ? 'Save' : 'Change'}
                </Button>
              </HStack>
              <br />
              <HStack>
                <Text>Total Coin earned:</Text>
                <Text >
                  <Text fontWeight={'bold'} fontSize="lg" as="span" pr="2"
                  color="brand.500"
                  >
                    {userBalance}
                  </Text>
                  BLCKCOIN
                </Text>
              </HStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
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
            <Text>Hello world are you </Text>
          </VStack>
        </HStack>
      </Box>
    </>
  )
}

export default QuizComponent
