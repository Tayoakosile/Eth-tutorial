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

  // if (!isAuthenticating) {
  const currentUser =
    isAuthenticating == false && isInitialized && Moralis.User.current()

  useEffect(() => {
    isAuthenticating == false && !isAuthenticated && router.push('/')
  }, [isAuthenticated, isAuthenticating, router])

  return { currentUser, isAuthenticated }
}

export default useAuth
