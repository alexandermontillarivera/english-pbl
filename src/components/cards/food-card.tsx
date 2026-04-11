"use client"

import { motion } from "framer-motion"
import type { FoodItem } from "@/interfaces/food-types"

interface FoodCardProps {
  food: FoodItem
  isHealthy: boolean
  index: number
}

export function FoodCard({ food, isHealthy, index }: FoodCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`relative p-4 rounded-2xl border-2 ${
        isHealthy
          ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-green-400"
          : "bg-gradient-to-br from-red-50 to-orange-50 border-red-200 hover:border-red-400"
      } transition-colors cursor-pointer`}
    >
      <div className="text-center">
        <motion.span
          className="text-5xl block mb-3"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {food.emoji}
        </motion.span>
        <h3 className="font-bold text-gray-800 mb-1">{food.name}</h3>
        <p className="text-sm text-gray-500">{food.description}</p>
      </div>
      
      <div
        className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
          isHealthy ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {isHealthy ? "✓" : "✗"}
      </div>
    </motion.div>
  )
}
