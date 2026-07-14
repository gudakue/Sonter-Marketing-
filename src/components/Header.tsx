'use client'

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [cartCount] = useState(0)

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Sonter Marketing
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600 transition">
            Products
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="#" className="relative">
            <span className="text-gray-700 hover:text-blue-600 transition">
              🛒 Cart
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
