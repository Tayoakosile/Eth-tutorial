import React from 'react'
import { Box, HStack, VStack } from '@chakra-ui/react'
import { useNewMoralisObject } from 'react-moralis'

import useAuth from './useAuth'
import Moralis from 'moralis'
import useConnectWallet from './useConnectWallet'
import { useRouter } from 'next/router'

const useCompleteQuiz = () => {
  const router = useRouter()
  const { user } = useConnectWallet()
  const { scores: userTotalScores } = user?.attributes as any

  const scores = userTotalScores ? userTotalScores : []

  function checkAndAdd(
    quizName: string,
    userTotalQuizScore: number,
    totalQuestionLength: number,
    isRewardClaimed: boolean,
    earnedCoin: number,
  ) {
    var item = scores?.find(
      (x: { quizName: string }) => x?.quizName === quizName,
    )
    console.log(item, 'item')
    const data = {
      quizName,
      userTotalQuizScore,
      totalQuestionLength,
      isRewardClaimed,
      earnedCoin,
    }
    if (item) {
      item.score = userTotalQuizScore
      item.totalQuestionLength = totalQuestionLength
      item.isRewardClaimed = isRewardClaimed
      item.earnedCoin = earnedCoin
    } else {
      scores?.push(data)
    }
  }

  //   Save scores into database
  const saveScores = async (
    quizName: string,
    userTotalQuizScore: number,
    totalQuestionLength: number,
    isRewardClaimed: boolean,
  ) => {
    // Alternatively, you can use the typical Backbone syntax.
    let earnedCoin

    // If user scores everything then give user 100 coins
    if (userTotalQuizScore >= totalQuestionLength) {
      earnedCoin = 100
    } else if (userTotalQuizScore <= 3) {
      //else 50 coins
      earnedCoin = 30
    } else {
      earnedCoin = 50
    }

    checkAndAdd(
      quizName,
      userTotalQuizScore,
      totalQuestionLength,
      isRewardClaimed,
      earnedCoin,
    )

    user?.set('scores', scores)
    user
      ?.save()
      .then((msg) => {
        console.log(msg)
        router.push(`/result/${quizName}`)
      })
      .catch((errr) => console.log(errr))
    console.log(scores, 'scoresscores')

    console.log(scores, 'scoresscores')
  }

  return { saveScores }
}

export default useCompleteQuiz
