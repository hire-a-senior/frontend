import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="p-2 border-b border-purple-dark">
      <div className="flex justify-between items-center">
        <Link href={'/'} className="flex justify-center items-center">
          <Image
            className="mr-2"
            src="/logo-square.svg"
            alt="logo"
            width={66}
            height={66}
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
          <div className="mr-4">
            <p>Options</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
