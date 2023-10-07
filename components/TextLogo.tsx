import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TextLogo = () => {
  return (
    <Link href="/">
      <Image src="/logo-text.svg" width={100} height={100} alt="a" />
    </Link>
  )
}

export default TextLogo
