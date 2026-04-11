"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HabitCard } from "@/components/cards/habit-card"
import { HABITS } from "@/config/constants"
import { Button } from "@/components/ui/button"

export function HabitsSection() {
  const [showGoodHabits, setShowGoodHabits] = useState(true)

  return (
    <section id="habits" className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🔄 Toggle Habits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Good vs Bad Habits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Click the button to switch between good and bad habits!
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setShowGoodHabits(true)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                showGoodHabits
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              ✅ Good Habits
            </Button>
            <Button
              onClick={() => setShowGoodHabits(false)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                !showGoodHabits
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              ❌ Bad Habits
            </Button>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={showGoodHabits ? "good" : "bad"}
              initial={{ opacity: 0, x: showGoodHabits ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: showGoodHabits ? 50 : -50 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4"
            >
              {(showGoodHabits ? HABITS.good : HABITS.bad).map((habit, index) => (
                <HabitCard
                  key={habit.id}
                  habit={habit}
                  isGood={showGoodHabits}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
