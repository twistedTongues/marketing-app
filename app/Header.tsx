'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="bg-blue-500">
      <nav className="flex justify-center items-center p-5 lg:h-28">
        <motion.div
        initial={{
            x:-500,
            opacity: 0,
            scale: 0.5
          }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
        transition={{
          duration: 1,
        }}
        >
        <Link href="/" className="px-2 lg:px-4 py-1 lg:py-2 bg-white text-blue-500 rounded-lg lg:text-3xl drop-shadow-lg tracking-wider">
          Startup Name
        </Link>
        </motion.div>
      </nav>
    </header>
  )
}

export default Header
