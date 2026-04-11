"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center px-4 py-16">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute left-10 top-10 text-6xl animate-bounce">🍎</div>
        <div className="absolute right-20 top-20 text-5xl animate-bounce delay-100">🥦</div>
        <div className="absolute left-1/4 bottom-10 text-4xl animate-bounce delay-200">🥕</div>
        <div className="absolute right-1/3 bottom-20 text-5xl animate-bounce delay-300">💧</div>
        <div className="absolute left-1/2 top-5 text-4xl animate-bounce delay-400">🍌</div>
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
          🧭 Page Not Found
        </motion.span>

        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
          className="text-8xl md:text-9xl mb-4"
        >
          🥕
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold text-white leading-none"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-2xl md:text-4xl font-bold text-white"
        >
          Oops! This page is{" "}
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-2xl inline-block">
            out of the menu
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 text-lg md:text-xl text-white/90"
        >
          Looks like this snack doesn&apos;t exist. Let&apos;s head back to healthy food! 🌟
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/#inquiry"
            className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-full border border-white/40 hover:bg-white/30 transition-colors"
          >
            <Search className="w-5 h-5" />
            Explore Foods
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
