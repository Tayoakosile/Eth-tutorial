import { Box, Center, Text } from '@chakra-ui/react'
import Moralis from 'moralis'
import { route } from 'next/dist/server/router'
import Link from 'next/link'
import Router from 'next/router'
import { ReactNode, useEffect } from 'react'
import useConnectWallet from '../hooks/useConnectWallet'
import { useRouter } from 'next/router'
import useAuth from '../hooks/useAuth'

const ProtectedComponent = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const { currentUser } = useAuth()
  const { isAuthenticating, isAuthenticated } = useConnectWallet()
  if (isAuthenticating) {
    return <>Loading users</>
  }

  return (
    <>
      <Box as="section">{isAuthenticated && currentUser && children}</Box>
    </>
  )
}

export default ProtectedComponent
