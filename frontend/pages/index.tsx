import { Box } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Home from '../components/Home'
import useConnectWallet from '../hooks/useConnectWallet'
import { RootState } from '../store/store'
import Moralis from 'moralis'
import ProtectedComponent from '../components/ProtectedComponent'

const Index = ({ currentUser }: { currentUser: any }) => {
  // console.log(currentUser, 'currentUser')
  const { connectAccount } = useConnectWallet()
  const router = useRouter()

  const { isWalletConnected } = useSelector(
    (state: RootState) => state.walletAddress.value,
  )

  if (currentUser) {
    router.push('/quiz')
    console.log(currentUser, 'current user')
  }

  {
    isWalletConnected && router.push('/quiz')
  }

  return (
    <>
      <Box as="section" h="100vh" bg="#141933">
        <Home />
      </Box>
    </>
  )
}

export default Index
