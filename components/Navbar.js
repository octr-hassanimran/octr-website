'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center min-h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/octr-logo.png"
            alt="OCTR Technologies"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="hidden sm:block text-xl font-bold text-teal-600">OCTR</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-teal-600 transition text-sm">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-teal-600 transition text-sm">About</Link>
          <Link href="/solutions" className="text-gray-700 hover:text-teal-600 transition text-sm">Solutions</Link>
          <Link href="/technology" className="text-gray-700 hover:text-teal-600 transition text-sm">Technology</Link>
          <Link href="/case-studies" className="text-gray-700 hover:text-teal-600 transition text-sm">Case Studies</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-teal-600 transition text-sm">Pricing</Link>
          <Link href="/contact" className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition text-sm">Get Demo</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-teal-600">Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-teal-600">About</Link>
            <Link href="/solutions" className="block text-gray-700 hover:text-teal-600">Solutions</Link>
            <Link href="/technology" className="block text-gray-700 hover:text-teal-600">Technology</Link>
            <Link href="/case-studies" className="block text-gray-700 hover:text-teal-600">Case Studies</Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-teal-600">Pricing</Link>
            <Link href="/contact" className="block bg-teal-600 text-white px-4 py-2 rounded text-center font-semibold">Get Demo</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
