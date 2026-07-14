import ProductCard from "@/components/ProductCard"
import { products } from "@/lib/products"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Sonter Marketing</h1>
          <p className="text-xl text-blue-100">
            Discover premium electronics and accessories for tech enthusiasts
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="text-gray-600 mt-2">Explore our collection of premium tech products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
