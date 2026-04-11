"use client"

import { motion } from "framer-motion"
import type { Habit } from "@/interfaces/food-types"

interface HabitCardProps {
  habit: Habit
  isGood: boolean
  index: number
}

export function HabitCard({ habit, isGood, index }: HabitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-3 p-4 rounded-xl ${
        isGood
          ? "bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-200"
          : "bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-200"
      }`}
    >
      <span className="text-3xl">{habit.emoji}</span>
      <span className="font-medium text-gray-700">{habit.text}</span>
    </motion.div>
  )
}
