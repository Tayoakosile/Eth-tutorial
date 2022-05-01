import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Home from '../components/Home'
import useConnectWallet from '../hooks/useConnectWallet'
import { RootState } from '../store/store'

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
        <Head>
          <title>Block chain quiz app</title>
        </Head>
        <Home />
      </Box>
    </>
  )
}

export default Index
