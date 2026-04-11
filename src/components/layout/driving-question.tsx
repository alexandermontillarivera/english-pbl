"use client"

import { motion } from "framer-motion"

export function DrivingQuestion() {
  return (
    <section id="driving-question" className="relative overflow-hidden bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 py-16 md:py-24">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-10 top-10 text-6xl animate-bounce">🍎</div>
        <div className="absolute right-20 top-20 text-5xl animate-bounce delay-100">🥦</div>
        <div className="absolute left-1/4 bottom-10 text-4xl animate-bounce delay-200">🥕</div>
        <div className="absolute right-1/3 bottom-20 text-5xl animate-bounce delay-300">💧</div>
        <div className="absolute left-1/2 top-5 text-4xl animate-bounce delay-400">🍌</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            🎯 Driving Question
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            How can we eat{" "}
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-2xl inline-block mt-2">
              healthy food
            </span>{" "}
            <br className="hidden md:block" />
            in our daily life?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Let&apos;s learn about healthy eating together! 🌟
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
