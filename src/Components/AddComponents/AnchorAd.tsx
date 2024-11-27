'use client'
import React, { useEffect, useState } from 'react'
import addD from '@/assets/ads/anchorRupaliDesktop.jpg'
import addM from '@/assets/ads/anchorRupaliMobile.jpg'
import Image from 'next/image'
import Link from 'next/link'
import cn from '@/lib/cn'
import { IoCloseOutline } from 'react-icons/io5'
import AdT from '../adManager/AdT'
import AdWithAnchor from "@/Components/AnchorAdManager/AdWithAnchor"

interface AnchorAdProps {
  adId: string;
}

function AnchorAd({ adId }: AnchorAdProps) {
  const [show, setShow] = useState(false)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    // If the ad has been closed, do not show it again
    if (closed) return;

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [closed])

  const handleClose = () => {
    setShow(false)
    setClosed(true) // Mark as closed in local state
  }

  return (
    show && (
      <div
        className={cn(
          "fixed left-0 bottom-0 right-0 z-[1000]  bg-[#f3f3f3] shadow-anchorAdShadow",
        )}
      >
        <div className="container flex justify-center items-end h-[110px] lg:h-[100px] ">
          {/* <AdT addId={"Anchor_Ad_Home"} /> */}
          <AdWithAnchor adId={adId} />
          {/* <Link href={'https://rupalibank.com.bd'} target='_blank' className='h-[105px] w-full flex justify-center items-end'>
                        <Image src='https://ajpbucket.ideahubbd.com/ad-assets/rupalibankDesktop.jpeg' width={970} height={90} alt='anchor ad' className='hidden lg:block w-[970px] h-[90px]' />
                        <Image src='https://ajpbucket.ideahubbd.com/ad-assets/rupalibankMobile.jpeg' width={320} height={100} alt='anchor ad' className='lg:hidden block w-[320px] h-[100px]' />
                    </Link> */}
        </div>
        <div className="bg-[#f3f3f3] absolute -top-[30px] right-0 px-1 py-1 rounded-tl-xl">
          <button onClick={handleClose}>
            <IoCloseOutline size={20} className="text-[#555555]" />
          </button>
        </div>
      </div>
    )
  );
}

export default AnchorAd
