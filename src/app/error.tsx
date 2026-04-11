"use client"

import { Home, RotateCcw } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect } from "react"
import Link from "next/link"

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-400 via-orange-400 to-amber-400 flex items-center justify-center px-4 py-16">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute left-10 top-10 text-6xl animate-bounce">🍕</div>
        <div className="absolute right-20 top-20 text-5xl animate-bounce delay-100">🍔</div>
        <div className="absolute left-1/4 bottom-10 text-4xl animate-bounce delay-200">🍟</div>
        <div className="absolute right-1/3 bottom-20 text-5xl animate-bounce delay-300">🍩</div>
        <div className="absolute left-1/2 top-5 text-4xl animate-bounce delay-400">🍭</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          ⚠️ Something Went Wrong
        </motion.span>

        <motion.div
          initial={{ scale: 0, rotate: 20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
          className="text-8xl md:text-9xl mb-4"
        >
          🍕
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Uh oh! We ate{" "}
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-2xl inline-block mt-2">
            something bad
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-lg md:text-xl text-white/90"
        >
          Our tummy is a little upset. Let&apos;s try again with something healthier! 🥗
        </motion.p>

        {error.digest && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-3 text-xs font-mono text-white/70"
          >
            Error ID: {error.digest}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-white text-rose-500 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-full border border-white/40 hover:bg-white/30 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
