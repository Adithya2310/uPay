"use client"
import React from 'react'
import { ConnectButton,useWallet } from '@suiet/wallet-kit'
import ScanModal from '../../components/ScanModal'
import ConnectModal from '../../components/ConnectModal'
import { useRouter } from 'next/router'
import Link from 'next/link'

const page = () => {
  // to connet to the merchant
  const router=useRouter();
  const {account,connected}=useWallet();
  const handleMerchant=()=>{
    router.push('/merchant');
  }
  // console.log(account);
  return (
    <div>
    <div className='flex text-right justify-end p-5'>
    <Link href={"https://ce85-103-16-70-107.ngrok-free.app"}>
    <button className='bg-[#0073E6] text-neutral-white rounded-[10px] py-3 px-4' onClick={handleMerchant}>
      Register as a Merchant
    </button>
    </Link>
    </div>
    <div className='h-[100vh] flex justify-center items-center'>
    {/* <ScanModal/> */}
    {connected?<ScanModal/>:<ConnectModal/>}
        {/* <ConnectButton/> */}
  </div>
    </div>
  )
}

export default page;