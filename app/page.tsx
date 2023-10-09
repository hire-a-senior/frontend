'use client'
import React, { useEffect } from 'react'
import TextLogo from '@/components/TextLogo'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getFromLocalStorage } from '@/lib/LocalStorageHandler'

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    if (getFromLocalStorage('accessToken') !== null) {
      router.push('/app/home')
    }
  }, [router])

  return (
    <main className="h-screen w-screen">
      <div className="flex justify-center items-center p-4">
        <TextLogo />
      </div>
      <div className="flex justify-center items-center">
        <Link
          href={'/auth/register'}
          className="text-xl text-center font-bold text-black m-2"
        >
          Register
        </Link>
        <Link
          href={'/auth/login'}
          className="text-xl text-center font-bold text-black m-2"
        >
          Login
        </Link>
      </div>
    </main>
  )
}

export default Home
