# Sonter Marketing - E-commerce Store

A modern e-commerce website built with Next.js 14, React, and Tailwind CSS.

## Features

- ✅ Product catalog with browsing
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Mock product data
- ✅ Add to cart functionality
- ✅ Product ratings and reviews
- ✅ Fast performance with Next.js

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gudakue/Sonter-Marketing-.git
cd Sonter-Marketing-
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Footer
│   └── ProductCard.tsx  # Product card component
└── lib/
    └── products.ts      # Mock product data
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

The site will be live at your Vercel URL!

## Future Features

- Shopping cart with persistence
- Product filtering and search
- User authentication
- Order management
- Payment processing (Stripe/PayPal)
- Admin dashboard
- Product reviews and ratings

## License

MIT License
