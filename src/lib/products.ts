export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  reviews: number
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Smartwatch Pro",
    description: "Advanced fitness tracking with heart rate monitor and GPS",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Wearables",
    rating: 4.3,
    reviews: 95,
  },
  {
    id: 3,
    name: "USB-C Cable",
    description: "Fast charging USB-C cable, 6ft length, durable nylon braided",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
    category: "Accessories",
    rating: 4.7,
    reviews: 312,
  },
  {
    id: 4,
    name: "Portable SSD",
    description: "1TB external solid state drive with USB-C, 550MB/s speed",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    category: "Storage",
    rating: 4.6,
    reviews: 87,
  },
  {
    id: 5,
    name: "Wireless Charger",
    description: "Fast wireless charging pad for all Qi-enabled devices",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1591290621749-7a6b59ce4b2b?w=500&h=500&fit=crop",
    category: "Accessories",
    rating: 4.4,
    reviews: 156,
  },
  {
    id: 6,
    name: "4K Webcam",
    description: "Professional 4K USB webcam with auto-focus and built-in microphone",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 64,
  },
]
