import React from 'react'
import Navbar from '@/components/layout/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire a Senior',
  description: 'Ask a senior developer for advice on your project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
