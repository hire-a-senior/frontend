'use client'
import withAuth from '@/lib/withAuth'
import React from 'react'

const Home = () => {
  return <div>PROTECTED ROUTE</div>
}

export default withAuth(Home)
