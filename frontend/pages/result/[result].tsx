import { useRouter } from 'next/router'
import ProtectedComponent from '../../components/ProtectedComponent'
import QuizResult from '../../components/QuizResult'
import useConnectWallet from '../../hooks/useConnectWallet'
import useShowResult from '../../hooks/useShowResult'

const UserResult = () => {
  const route = useRouter()
  const { user } = useConnectWallet()

  const quizType = route.query.result as string

  const { findCurrentQuiz } = useShowResult()


  return (
    <ProtectedComponent>
    <QuizResult quizScoreAndResult={findCurrentQuiz(quizType)} />
    </ProtectedComponent>
  )
}
export default UserResult
