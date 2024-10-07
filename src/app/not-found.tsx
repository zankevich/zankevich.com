import Link from 'next/link';
import UniverseBackground from '@/components/UniverseBackground';


export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0b1e] text-gray-100 flex items-center justify-center">
      <UniverseBackground />
      <div className="text-center relative">
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-indigo-600 max-w-2xl">
          404
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
          Page not found
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl">
          Sorry, we couldn&apos;t find the page you&apos;re looking for
        </p>
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 inline-flex items-center hover:scale-105 active:scale-95"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}
