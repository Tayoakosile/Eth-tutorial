import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  VStack,
  Flex,
} from '@chakra-ui/react'
import { ethers, utils } from 'ethers'

import abi from '../../artifacts/contracts/Bank.sol/Bank.json'

declare let window: any

const Index = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [isBankOwner, setIsBankOwner] = useState(false)
  const [bankOwnerAddress, setBankOwnerAddress] = useState(0)
  const [inputValue, setInputValue] = useState({
    withdraw: '',
    deposit: '',
    bankName: '',
  })
  const [customerTotalBalance, setCustomerTotalBalance] = useState('0')
  const [currentBankName, setCurrentBankName] = useState('')
  const [customerAddress, setCustomerAddress] = useState(null)
  const [error, setError] = useState('')
  const contractAddress = '0xa271a1cC1Ce1BD403830a21Db9B3C8Fb4B729095'
  const contractABI = abi.abi

  const checkIfWalletIsConnected = async () => {
    try {
      // If metamask has injected ethereum into user's window
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        const account = accounts[0]
        setIsWalletConnected(true)
        setCustomerAddress(account)
        console.log('Account connected', account)
      }
    } catch (e) {
      console.log(e)
    }
  }
  const getBankName = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const bankContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        )

        let bankName = await bankContract.bankName()
        bankName = utils.parseBytes32String(bankName)
        setCurrentBankName(bankName.toString())
      } else {
        console.log('Ethereum object not found, install Metamask.')
        setError('Please install a MetaMask wallet to use our bank.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const setBankNameHandler = async (event: any) => {
    event.preventDefault()
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const bankContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        )

        const txn = await bankContract.setBankName(
          utils.formatBytes32String(inputValue.bankName),
        )
        console.log('Setting Bank Name...')
        await txn.wait()
        console.log('Bank Name Changed', txn.hash)
        await getBankName()
      } else {
        console.log('Ethereum object not found, install Metamask.')
        setError('Please install a MetaMask wallet to use our bank.')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const getbankOwnerHandler = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const bankContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        )

        let owner = await bankContract.bankOwner()
        setBankOwnerAddress(owner)

        const [account] = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })

        if (owner.toLowerCase() === account.toLowerCase()) {
          setIsBankOwner(true)
        }
      } else {
        console.log('Ethereum object not found, install Metamask.')
        setError('Please install a MetaMask wallet to use our bank.')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const customerBalanceHandler = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const bankContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        )

        let balance = await bankContract.getCustomerBalance()
        setCustomerTotalBalance(utils.formatEther(balance))
        console.log('Retrieved balance...', balance)
      } else {
        console.log('Ethereum object not found, install Metamask.')
        setError('Please install a MetaMask wallet to use our bank.')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const deposityMoneyHandler = async (event: any) => {
    try {
      event.preventDefault()
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const bankContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        )

        const txn = await bankContract.depositMoney({
          value: ethers.utils.parseEther(inputValue.deposit),
        })
        console.log('Deposting money...')
        await txn.wait()
        console.log('Deposited money...done', txn.hash)

        customerBalanceHandler()
      } else {
        console.log('Ethereum object not found, install Metamask.')
        setError('Please install a MetaMask wallet to use our bank.')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const withDrawMoneyHandler = async (event: any) => {
    try {
      event.preventDefault()
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const bankContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        )

        let myAddress = await signer.getAddress()
        console.log('provider signer...', myAddress)

        const txn = await bankContract.withdrawMoney(
          myAddress,
          ethers.utils.parseEther(inputValue.withdraw),
        )
        console.log('Withdrawing money...')
        await txn.wait()
        console.log('Money with drew...done', txn.hash)

        customerBalanceHandler()
      } else {
        console.log('Ethereum object not found, install Metamask.')
        setError('Please install a MetaMask wallet to use our bank.')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleInputChange = (event: any) => {
    setInputValue((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }))
  }

  useEffect(() => {
    checkIfWalletIsConnected()
    getBankName()
    getbankOwnerHandler()
    customerBalanceHandler()
  }, [isWalletConnected])
  return (
    <Flex justify="center" w="full" bg="#111827" pt="16">
      <VStack
        as="section"
        h="fit"
        w="60%"
        bg="#111827"
        border="1px solid grey"
        justify="center"
        spacing="12"
        align="center"
        py="8"
        px="5"
        sx={{
          input: {
            color: '#fff',
            outline: 'transparent',
            py: '8',
          },
        }}
      >
        <Heading size="2xl" color="#4338CA">
          Bank Contract Project 💰
        </Heading>

        <Heading color="#4338CA" size="sm">
          {currentBankName}
        </Heading>

        <VStack align="flex-start" spacing="0px" w="40%">
          <Input
            w="full"
            size="lg"
            bg="#1F2937"
            onChange={handleInputChange}
            placeholder="0.0000Eth"
            rounded="xs"
            h="12"
            name="deposit"
            value={inputValue.deposit}
          />
          <Button
            w="full"
            rounded="xs"
            size="lg"
            bg="#4338CA"
            colorScheme={'purple'}
            h="16"
            onClick={deposityMoneyHandler}
          >
            DEPOSIT MONEY IN ETH
          </Button>
        </VStack>
        <VStack align="flex-start" spacing="0px" w="40%">
          <Input
            w="full"
            size="lg"
            bg="#1F2937"
            placeholder="0.0000Eth"
            rounded="xs"
            h="12"
            onChange={handleInputChange}
            name="withdraw"
            value={inputValue.withdraw}
          />
          <Button
            w="full"
            rounded="xs"
            size="lg"
            bg="#4338CA"
            colorScheme={'purple'}
            h="16"
            onClick={withDrawMoneyHandler}
          >
            WITHDRAW MONEY IN ETH
          </Button>
        </VStack>
        {isBankOwner && (
          <>
            <VStack align="flex-start" spacing="0px" w="40%">
              <Input
                w="full"
                size="lg"
                bg="#1F2937"
                placeholder="0.0000Eth"
                rounded="xs"
                h="12"
                name="bankName"
                onChange={handleInputChange}
                value={inputValue.bankName}
              />
              <Button
                w="full"
                rounded="xs"
                size="lg"
                bg="#4338CA"
                colorScheme={'purple'}
                h="16"
                onClick={setBankNameHandler}
              >
                {' '}
                SET BANK NAME
              </Button>
            </VStack>
          </>
        )}

        <Heading size="md" color="#fff" alignSelf={'flex-start'}>
          Customer Balance : {customerTotalBalance}
        </Heading>
        <Heading size="md" color="#fff" alignSelf={'flex-start'}>
          Bank owner address :{bankOwnerAddress}
        </Heading>

        <Button
          bg="#4338CA"
          size="lg"
          h="16"
          onClick={checkIfWalletIsConnected}
        >
          {isWalletConnected ? 'Wallet connected' : 'Connect wallet'}
        </Button>
      </VStack>
    </Flex>
  )
}

export default Index
