import React, { useEffect, useState } from 'react'
import { ethers, utils } from 'ethers'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'

import abi from '../../artifacts/contracts/MemeCoin.sol/MemeCoin.json'
const Index = () => {
  const toast = useToast()
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [transferringFunds, setTransferringFunds] = useState(false)

  const [inputValue, setInputValue] = useState({
    walletAddress: '',
    transferAmount: '',
    burnAmount: '',
    mintAmount: '',
  })
  const [tokenName, setTokenName] = useState('Loading')
  const [tokenSymbol, setTokenSymbol] = useState('Loading')
  const [tokenTotalSupply, setTokenTotalSupply] = useState(0)
  const [isTokenOwner, setIsTokenOwner] = useState(false)
  const [tokenOwnerAddress, setTokenOwnerAddress] = useState('Loading...')
  const [yourWalletAddress, setYourWalletAddress] = useState('Loading...')
  const [error, setError] = useState('')

  const contractAddress = '0xC5bAd116bE2DC6fe0D2F1077F6aF1268B07d5f18'
  const contractABI = abi.abi
  const checkIfWalletIsConnected = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        const account = accounts[0]
        setIsWalletConnected(true)
        setYourWalletAddress(account)
        console.log('Account Connected: ', account)
      } else {
        setError('Install a MetaMask wallet to get our token.')
        console.log('No Metamask detected')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const transferToken = async (event: any) => {
    event.preventDefault()
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const tokenContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        )

        const txn = await tokenContract.transfer(
          inputValue.walletAddress,
          utils.parseEther(inputValue.transferAmount),
        )
        console.log('Transfering tokens...')
        setTransferringFunds(true)
        await txn.wait()
        setTransferringFunds(false)
        toast({
          position: 'top-right',
          title: 'Success',
          description: 'Success',
        })
        console.log('Tokens Transfered', txn.hash)
      } else {
        console.log('Ethereum object not found, install Metamask.')
        setError('Install a MetaMask wallet to get our token.')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const burnToken = async (event: any) => {
    event.preventDefault()
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const tokenContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        )
        const txn = await tokenContract.burn(
          utils.parseEther(inputValue.burnAmount),
        )
        console.log('Burning tokens...')
        await txn.wait()
        console.log('Tokens burned...', txn.hash)

        let tokenSupply = await tokenContract.totalSupply()
        tokenSupply = utils.formatEther(tokenSupply)
        setTokenTotalSupply(tokenSupply)
      }
    } catch (e) {
      console.log('Burning token error', e)
    }
  }

  const mintToken = async (event: any) => {
    event.preventDefault()
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const tokenContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        )
        let tokenOwner = await tokenContract.owner()
        const txn = await tokenContract.mint(
          tokenOwner,
          utils.parseEther(inputValue.mintAmount),
        )
        console.log('Minting tokens...')
        await txn.wait()
        console.log('Tokens minted...', txn.hash)

        let tokenSupply = await tokenContract.totalSupply()
        tokenSupply = utils.formatEther(tokenSupply)
        setTokenTotalSupply(tokenSupply)
      }
    } catch (e) {
      console.log('Burning token error', e)
    }
  }

  const handleInputChange = (event: any) => {
    setInputValue((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }))
  }

  useEffect(() => {
    isWalletConnected === false && checkIfWalletIsConnected()

    const getTokenInfo = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()
          const tokenContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer,
          )
          const [account] = await window.ethereum.request({
            method: 'eth_requestAccounts',
          })

          let tokenName = await tokenContract.name()
          let tokenSymbol = await tokenContract.symbol()
          let tokenOwner = await tokenContract.owner()
          let tokenSupply = await tokenContract.totalSupply()
          tokenSupply = utils.formatEther(tokenSupply)

          console.log(tokenName, tokenSymbol, 'tokenSymbol')
          setTokenName(`${tokenName}💰`)
          setTokenSymbol(tokenSymbol)
          setTokenTotalSupply(tokenSupply)
          setTokenOwnerAddress(tokenOwner)

          if (account.toLowerCase() === tokenOwner.toLowerCase()) {
            setIsTokenOwner(true)
          }
        }
      } catch (error) {
        console.log('Error here', error)
      }
    }
    getTokenInfo()
  }, [contractABI, isWalletConnected])

  return (
    <Flex
      h="fit"
      w="full"
      justify={'center'}
      p={{ base: '3', lg: '12' }}
      sx={{
        input: {
          outline: 'none',
          color: 'white',
          fontWeight: 400,
          border: '0px solid black',
          '&:hover,&:focus': {
            boxShadow: 'none',
          },
        },
        button: {
          boxShadow: 'none',
          bg: '#E48E21',
          color: 'white',
          fontWeight: 400,
          '&:hover,&:focus': {
            boxShadow: 'none',
          },
        },
        '.FUC__title': {
          fontWeight: 600,
          fontSize: 'md',
        },
        '.FUC__desc': {
          fontWeight: 400,
          fontSize: 'sm',
          pl: '1',
        },
      }}
    >
      <VStack
        align="center"
        as="section"
        bg="#101727"
        border="3px solid #E48E21"
        rounded="md"
        // w="60%"
        width={{ base: '100%', lg: '60%' }}
        pt="4"
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
          <Heading textAlign={'left'}>Meme Coin Project 💰</Heading>
        </Box>
        {/* Coin's name, properties */}
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          w="full"
          alignSelf={'flex-start'}
          color="white"
          pt="6"
          pl={{ base: '4', lg: '10' }}
          align="flex-start"
          spacing="8"
        >
          <Text className="FUC__title">
            Coin:
            <Text as="span" className="FUC__desc">
              {tokenName}
            </Text>
          </Text>

          <Text className="FUC__title">
            Ticker:
            <Text as="span" className="FUC__desc">
              {tokenSymbol}
            </Text>
          </Text>

          <Text className="FUC__title">
            Total Supply:
            <Text as="span" className="FUC__desc">
              {tokenTotalSupply}
            </Text>
          </Text>
        </Stack>
        {/* Coin's name */}

        {/* Transfer token */}
        <VStack
          spacing={'12'}
          w="80%"
          pt="9"
          sx={{
            '.FUC__boxes': {
              border: '1px solid #E48E21',
            },
          }}
        >
          <Box h="fit" w="full" className="FUC__boxes">
            <Input
              rounded={'xs'}
              placeholder="Wallet Address"
              value={inputValue.walletAddress}
              onChange={(e) => handleInputChange(e)}
              name="walletAddress"
            />
            <Input
              onChange={(e) => handleInputChange(e)}
              rounded={'xs'}
              placeholder="0.000 FUC"
              value={inputValue.transferAmount}
              name="transferAmount"
            />
            <Button w="full" rounded={'xs'} onClick={transferToken}>
              Transfer Token
            </Button>
          </Box>

          {isTokenOwner && (
            <>
              <Box h="fit" w="full" className="FUC__boxes">
                <Input
                  rounded={'xs'}
                  placeholder="0.000 FUC"
                  value={inputValue.mintAmount}
                  name="mintAmount"
                  onChange={(e) => handleInputChange(e)}
                />
                <Button
                  w="full"
                  rounded={'xs'}
                  colorScheme="brand"
                  onClick={burnToken}
                  boxShadow="none"
                >
                  Mint Token
                </Button>
              </Box>
            </>
          )}

          {isTokenOwner && (
            <>
              <Box h="fit" w="full" className="FUC__boxes">
                <Input
                  rounded={'xs'}
                  placeholder="0.000 FUC"
                  value={inputValue.burnAmount}
                  name="burnAmount"
                  onChange={(e) => handleInputChange(e)}
                />
                <Button
                  w="full"
                  rounded={'xs'}
                  colorScheme="brand"
                  onClick={burnToken}
                  boxShadow="none"
                >
                  Burn Token
                </Button>
              </Box>
            </>
          )}
        </VStack>
        {/* Transfer token */}
        {/* Addresses*/}
        <VStack color="white" align={'flex-start'} w="80%" py="8" spacing="3">
          <Text className="FUC__title">
            Contract Address:
            <Text
              as="span"
              className="FUC__desc"
              noOfLines={2}
              width={{ base: '80%', lg: '90%' }}
            >
              {contractAddress}
            </Text>
          </Text>
          <Text className="FUC__title">
            Token Owner Address:
            <Text
              as="span"
              className="FUC__desc"
              noOfLines={2}
              width={{ base: '95%', lg: '90%' }}
            >
              {tokenOwnerAddress.toLowerCase()}
            </Text>
          </Text>
          <Text className="FUC__title">
            Your Wallet Address:
            <Text
              as="span"
              className="FUC__desc"
              noOfLines={2}
              width={{ base: '95%', lg: '90%' }}
            >
              {yourWalletAddress}
            </Text>
          </Text>
          {/* Addresses*/}
          <Button
            mt="12"
            onClick={() => {
              isWalletConnected === false && checkIfWalletIsConnected
            }}
            cursor={isWalletConnected ? 'not-allowed' : 'cursor'}
          >
            {isWalletConnected ? 'Wallet connected🔐' : 'Connect wallet🔓'}
          </Button>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default Index
