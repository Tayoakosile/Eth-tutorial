import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import { useDispatch } from 'react-redux'
import { addWalletAddress } from '../store/walletInfo'
import { useToast } from '@chakra-ui/react'

declare let window: any
const useConnectWallet = () => {
  const dispatch = useDispatch()
  const toast = useToast()

  const router = useRouter()
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const {
    enableWeb3,
    authenticate,
    authError,
    isInitialized,
    isAuthenticated,
    user,
    account,
  } = useMoralis()

  // Connect User's wallet to the app

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(addWalletAddress({ isWalletConnected: true }))
      setIsAuthenticating(false)
    } else {
      router.push('/')
    }
  }, [isAuthenticated, dispatch])

  // console.log(isAuthenticated, isAuthenticating, 'isAuthenticated')

  const connectAccount = async () => {
    if (!isAuthenticated) {
      await enableWeb3()
      if (!window.ethereum) {
        toast({
          position: 'top-right',
          title: 'Error',
          description: 'Please install a metamask wallet to perform this quiz',
          status: 'error',
          isClosable: true,
        })
      }
      await authenticate({
        signingMessage: 'Connect to Quiz app',
      })
        .then((user: any) => {
          console.log('logged in user:')
          const userAddress = user!.get('ethAddress')
          dispatch(
            addWalletAddress({
              walletAddress: userAddress,
              isWalletConnected: true,
            }),
          )
          console.log(user!.get('ethAddress'))
          return true
        })
        .catch(function (error: any) {
          Router.push('/')
          toast({
            position: 'top-right',
            title: 'Error',
            description:
              'Please install a metamask wallet to perform this quiz',
            status: 'error',
          })
          console.log(error)
        })
    }
  }

  return {
    connectAccount,
    user,
    account,
    isAuthenticated,
    isInitialized,
    isAuthenticating,
    authError,
  }
}
export default useConnectWallet
