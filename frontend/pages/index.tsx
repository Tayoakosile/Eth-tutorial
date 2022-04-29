import { Box } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import Home from '../components/Home'
import { useEffect } from 'react'
import useConnectWallet from '../hooks/useConnectWallet'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useRouter } from 'next/router'

const Index = () => {
  const { connectAccount } = useConnectWallet()
  const router = useRouter()

  const { isWalletConnected } = useSelector(
    (state: RootState) => state.walletAddress.value,
  )

  {
    isWalletConnected && router.push('/quiz')
  }

  useEffect(() => {
    connectAccount()
  }, [])

  return (
    <Box as="section" h="100vh" bg="#141933">
      <Home />
    </Box>
  )
}

const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Index
