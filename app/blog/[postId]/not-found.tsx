import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <main className="h-screen">
      <div className="flex flex-col justify-start mx-auto text-center px-5 py-40">
      <h1 className="text-5xl font-bold pb-5">Whoops I can't find the blog you are looking for</h1>
      <Link href="/" className="text-3xl text-blue-500 font-semibold">Go Home Buddy</Link>
      </div>
    </main>
  )
}

export default NotFound
