import { useRouter } from 'next/router'
import useAuth from './useAuth'

import { useEffect, useState } from 'react'

import { ethers, utils } from 'ethers'

import abi from '../abi/Blockchain.json'
import useConnectWallet from './useConnectWallet'
import { useToast } from '@chakra-ui/react'

// const signer =

declare let window: any
const useShowResult = (isRewardClaimed?: boolean) => {
  const toast = useToast()
  const [claimTransaction, setClaimTransaction] = useState(false)
  const [hasUserClaimedAward, setHasUserClaimedAward] = useState<any>(true)
  const contractAddress = '0x7Ce15147d6e57162BffF39049a027e845365b361'

  const contractABI = abi.abi
  const route = useRouter()

  const quizType = route.query.result as string
  console.log(quizType)

  const { currentUser }: any = useAuth()
  const { user } = useConnectWallet()

  const updateUserClaimedWallet = (
    quizName: string,
    isRewardClaimed: boolean,
  ) => {
    const { scores: userTotalScores } = user?.attributes as any
    console.log(quizName, 'quizName')
    const scores = userTotalScores ? userTotalScores : []

    const item = scores?.find(
      (x: { quizName: string }) => x.quizName === quizName,
    )
    if (item) {
      item.isRewardClaimed = isRewardClaimed
    } else {
      scores.push(item)
    }
    return scores
  }

  // Set if user has claimed wallet
  useEffect(() => {
    setHasUserClaimedAward(isRewardClaimed)
  }, [isRewardClaimed])

  const findCurrentQuiz = (quizName: string) => {
    const currentQuiz = currentUser?.attributes?.scores?.find(
      (allQuiz: any) => allQuiz?.quizName === quizName,
    )
    return currentQuiz
  }

  // Make user claim reward
  const claimReward = async (amount: number) => {
    try {
      setClaimTransaction(true)

      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // await provider.send('eth_requestAccounts', [])
        const signer = new ethers.Wallet(
          'd5bbd2e916a9fc09205d9d37c9dbfa9a65c063d47036d082def83275656fe1ce',
          provider,
        )

        const tokenContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        )

        const txn = await tokenContract.transfer(
          user?.attributes?.ethAddress,
          utils.parseEther(`${amount}`),
        )
        console.log('Transfering tokens...')

        // This makes the button loads
        // This makes the button loads

        await txn.wait()
        console.log('Tokens Transfered', txn.hash, txn)

        await user?.set('scores', updateUserClaimedWallet(quizType, true))
        // Save to database
        await user?.save()
        setHasUserClaimedAward(true)

        toast({
          title: 'Transaction Success',
          description: `${amount} BLCKCOIN was successfully transfered to your ethereum address`,
          status: 'success',
          isClosable: true,
          position: 'top-right',
        })
        setClaimTransaction(false)
      } else {
        console.log('Ethereum object not found, install Metamask.')
        toast({
          title: 'An error occured',
          description: `Please try again`,
          status: 'error',
        })
      }
    } catch (error) {
      console.log(error, 'user error')
    }
  }

  return { findCurrentQuiz, claimReward, claimTransaction, hasUserClaimedAward }
}

export default useShowResult
