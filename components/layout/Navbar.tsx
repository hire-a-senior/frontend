'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useClickOutside from '@/hooks/useClickOutsite'
import { removeFromLocalStorage } from '@/lib/LocalStorageHandler'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const wrapperRef = useRef<any>()
  const router = useRouter()

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen)
  }

  useClickOutside(wrapperRef, () => {
    setIsOptionsOpen(false)
  })

  const handleSignOut = () => {
    removeFromLocalStorage('accessToken')
    removeFromLocalStorage('refreshToken')
    router.push('/auth/login')
  }

  return (
    <div className="p-2 border-b border-purple-dark text-purple-dark select-none">
      <div className="flex justify-between items-center">
        <Link href={'/'} className="flex justify-center items-center">
          <Image
            className="mr-2"
            src="/logo-square.svg"
            alt="logo"
            width={64}
            height={64}
          />
          <p>Hire a Senior</p>
        </Link>
        <div className="flex justify-center items-center">
          <div className="mr-4">
            <Link href={'/app/requests'}>Requests</Link>
          </div>
          <div className="mr-4">
            <Link href={'/app/messages'}>Messages</Link>
          </div>
          <div className="mr-4">
            <Link href={'/app/profile'}>Profile</Link>
          </div>
          <div className="mr-4 relative">
            <p onClick={toggleOptions} className="cursor-pointer">
              Options
            </p>

            {isOptionsOpen && (
              <ul
                ref={wrapperRef}
                className="absolute right-1/2 top-full w-24 bg-white rounded-md"
              >
                <li
                  className="bg-error hover:bg-red-900 p-2 cursor-pointer rounded-md text-sm"
                  onClick={handleSignOut}
                >
                  <p className="text-white">Sign out</p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
