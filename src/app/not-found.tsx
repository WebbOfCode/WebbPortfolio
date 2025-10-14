import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-slate-300 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-400 hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}