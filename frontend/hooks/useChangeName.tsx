import { ethers, utils } from 'ethers'
import { useEffect, useState } from 'react'
import abi from '../abi/Blockchain.json'
import useConnectWallet from './useConnectWallet'

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string

const contractABI = abi.abi
declare let window: any
const useChangeName = () => {
  const { user } = useConnectWallet()
  // @ts-ignore
  const { currentUserName: username, ethAddress } = user
    ? user.attributes
    : null
  console.log(ethAddress, 'ethAddress')

  const [currentUserName, setCurrentUserName] = useState(username)
  const [isSaving, setIsSaving] = useState(false)
  const [userBalance, setUserBalance] = useState(0)

  const [changeName, setChangeName] = useState(false)
  const handleChangeName = async (name: string) => {
    console.log(name, 'name')
    setChangeName(true)
    if (name == 'Save') {
      setIsSaving(true)
      console.log('saving')
      await user?.set('currentUserName', currentUserName)

      await user?.save()
      setChangeName(false)
      setIsSaving(false)
    }
  }
  const handleChangeInput = (e: any) => {
    setCurrentUserName(e.target.value)
  }
  useEffect(() => {
    const getTokenInfo = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = new ethers.Wallet(
            process.env.NEXT_PUBLIC_PRIVATE_KEY as string,
            provider,
          )
          const tokenContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer,
          )

          let tokenSupply = await tokenContract.balanceOf(ethAddress)
          tokenSupply = utils.formatEther(tokenSupply) as string
          setUserBalance(tokenSupply)
          console.log(tokenSupply, 'totalSupply')
        }
      } catch (error) {
        console.log(error)
      }
    }
    getTokenInfo()
  }, [ethAddress])

  return {
    handleChangeName,
    changeName,
    handleChangeInput,
    currentUserName,
    isSaving,
    userBalance,
  }
}

export default useChangeName
