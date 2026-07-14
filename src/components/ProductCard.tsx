'use client'

import Image from "next/image"
import { Product } from "@/lib/products"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
      <div className="relative h-64 bg-gray-200 rounded-t-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm font-semibold text-gray-700">
              {product.rating}
            </span>
            <span className="text-xs text-gray-500">
              ({product.reviews})
            </span>
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          className={`w-full py-2 rounded font-semibold transition ${
            isAdded
              ? "bg-green-500 text-white"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isAdded ? "✓ Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  )
}
