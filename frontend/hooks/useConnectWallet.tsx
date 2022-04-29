import { ethers } from 'ethers'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { addWalletAddress } from '../store/walletInfo'
import { useMoralis } from 'react-moralis'

const useConnectWallet = () => {
  const dispatch = useDispatch()
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis()

  // Connect User's wallet to the app

  const connectAccount = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Log in to BlockChain Quiz App' })
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
        })
        .catch(function (error: any) {
          console.log(error)
        })
    }
  }

  return { connectAccount }
}
export default useConnectWallet
