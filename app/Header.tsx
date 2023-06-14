import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-500">
      <nav className="flex justify-center items-center p-5 lg:h-28">
        <Link href="/" className="px-2 lg:px-4 py-1 lg:py-2 bg-white text-blue-500 rounded-lg lg:text-3xl drop-shadow-lg">
          Startup Name
        </Link>
      </nav>
    </header>
  )
}

export default Header
