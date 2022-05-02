import { ethers } from 'ethers'

import { useRouter } from 'next/router'
import { useState } from 'react'

//@ts-ignore
import sessionStorage from 'sessionstorage'
import abi from '../abi/Blockchain.json'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string
const contractABI = abi.abi

declare let window: any

const hasUserDepositedToPlay = JSON.parse(
  sessionStorage.getItem('quizAppConfig'),
)

const useDeposit = () => {
  const router = useRouter()
  const [showDialog, setShowDialog] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [EthValue, setEthValue] = useState('')
  const depositToPlay = (topic: string, randomNumber: number) => {
    // console.log(filter(hasUserDepositedToPlay, 'Smart'))

    hasUserDepositedToPlay.map((object: any) => {
      if (topic in object) {
        console.log(object[topic] === true)
        {
          object[topic] === true
            ? router.push(`/quiz/${randomNumber}/${topic}`)
            : setShowDialog(true)
        }

        // if (object[topic] == true)
      }
    })
  }
  const onClose = () => {
    if (isLoading) {
      setError('Transaction in progress,please wait')
      return
    } else {
      setShowDialog(false)
    }
  }
  const handleChange = (e: any) => {
    setEthValue(e.target.value)
  }

  const sendEther = async (randomNumber: number, topic: string) => {
    setIsLoading(true)
    //If user tries to send an amount lesser than zero,then throw error
    try {
      // @ts-ignore
      if (EthValue <= 0) {
        setIsLoading(false)
        setError('Amount must be greater than zero')
        return
      }

      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        setError('')
        const signer = provider.getSigner()
        await window.ethereum.request({
          method: 'eth_requestAccounts',
        })

        const bankContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        )

        const txn = await bankContract.depositMoney({
          value: ethers.utils.parseEther(`${EthValue}`),
        })
        console.log('Deposting money...')
        await txn.wait()

        hasUserDepositedToPlay.map((object: any) => {
          if (topic in object) {
            console.log(object[topic] === true)
            sessionStorage.setItem(
              'quizAppConfig',
              JSON.stringify([
                ...hasUserDepositedToPlay,
                (object[topic] = true),
              ]),
            )
            // if (object[topic] == true)
          }
        })
        console.log('Deposited money...done', txn.hash)

        setIsLoading(false)
        router.push(`/quiz/${randomNumber}/${topic}`)
      } else {
        console.log('Ethereum object not found, install Metamask.')
        setError('Please install a MetaMask wallet to use our bank.')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return {
    depositToPlay,
    onClose,
    showDialog,
    handleChange,
    EthValue,
    sendEther,
    isLoading,
    error,
  }
}

export default useDeposit
