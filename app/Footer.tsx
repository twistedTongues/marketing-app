'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const Footer  = () => {
  const pathname = usePathname();
  const show_Footer = pathname === '/contact';
  return (
    show_Footer && (<footer className="p-5 bg-blue-500 flex justify-center items-center lg:h-28 drop-shadow-md tracking-widest bottom-0">
      © 2023 StartupName, Inc.
    </footer>)
  )
}

export default Footer
