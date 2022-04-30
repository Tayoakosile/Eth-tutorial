import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { addWalletAddress } from '../store/walletInfo'
import { useMoralis } from 'react-moralis'
import Router from 'next/router'
import { useRouter } from 'next/router';

const useConnectWallet = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const {
    enableWeb3,
    authenticate,
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
      await authenticate()
        .then(function (user: any) {
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
  }
}
export default useConnectWallet
