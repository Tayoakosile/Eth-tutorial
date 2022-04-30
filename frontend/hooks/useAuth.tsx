import Moralis from 'moralis'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useConnectWallet from './useConnectWallet'

const useAuth = () => {
  const router = useRouter()
  const {
    isInitialized,
    isAuthenticated,
    isAuthenticating,
  } = useConnectWallet()

  console.log('authenticating')
  // if (!isAuthenticating) {
  const currentUser =
    isAuthenticating == false && isInitialized && Moralis.User.current()

  useEffect(() => {
    isAuthenticating == false && !isAuthenticated && router.push('/')
  }, [isAuthenticated, isAuthenticating, router])

  console.log(currentUser)
  return { currentUser, isAuthenticated }
}

export default useAuth
