import { useRouter } from 'next/router'
import useAuth from './useAuth'

import { useEffect, useState } from 'react'

import { ethers, utils } from 'ethers'

import abi from '../abi/Blockchain.json'
import useConnectWallet from './useConnectWallet'

const useShowResult = (isRewardClaimed?: boolean) => {
  const [claimTransaction, setClaimTransaction] = useState(false)
  const [hasUserClaimedAward, setHasUserClaimedAward] = useState(true)
  const contractAddress = '0x7Ce15147d6e57162BffF39049a027e845365b361'
  const ownerContractAddress = '0xeFA8E91837AcdCDF063e0E5FB208f4fd69C56B4B'

  const contractABI = abi.abi
  const route = useRouter()

  const quizType = route.query.result as string
  const { currentUser }: any = useAuth()
  const { user } = useConnectWallet()

  const updateUserClaimedWallet = (
    quizName: string,
    isRewardClaimed: boolean,
  ) => {
    const { scores: userTotalScores } = user?.attributes as any

    const scores = userTotalScores ? userTotalScores : []

    var item = scores?.find(
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

  const claimReward = async (amount: string) => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
        const tokenContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        )
        console.log(user?.attributes?.ethAddress, amount)

        await tokenContract.approve(
          user?.attributes?.ethAddress,
          utils.parseEther(`${amount}`),
        )

        const txn = await tokenContract.transferFrom(
          ownerContractAddress,
          user?.attributes?.ethAddress,
          utils.parseEther(`${amount}`),
        )
        console.log('Transfering tokens...')

        // This makes the button loads
        setClaimTransaction(true)
        // This makes the button loads
        await txn.wait()
        console.log('Tokens Transfered', txn.hash, txn)

        user?.set('store', updateUserClaimedWallet(quizType, true))
        // Save to database
        user
          ?.save()
          .then((msg: any) => {
            setHasUserClaimedAward(true)
            setClaimTransaction(false)
            console.log(msg)
          })
          .catch((errr) => console.log(errr))
      } else {
        console.log('Ethereum object not found, install Metamask.')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { findCurrentQuiz, claimReward, claimTransaction, hasUserClaimedAward }
}

export default useShowResult
