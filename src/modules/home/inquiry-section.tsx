"use client"

import { motion } from "framer-motion"
import { FoodCard } from "@/components/cards/food-card"
import { FOOD_DATA } from "@/config/constants"

export function InquirySection() {
  return (
    <section id="inquiry" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            📚 Step 2: Inquiry
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Learn About Food
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Some foods are good for you, and some are not. Let&apos;s learn which is which!
          </p>
        </motion.div>

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-3xl">✅</span>
            <h3 className="text-2xl font-bold text-green-600">Healthy Food</h3>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
              Good for you!
            </span>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FOOD_DATA.healthy.map((food, index) => (
              <FoodCard key={food.id} food={food} isHealthy={true} index={index} />
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-3xl">⚠️</span>
            <h3 className="text-2xl font-bold text-red-500">Unhealthy Food</h3>
            <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm">
              Eat less of these!
            </span>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FOOD_DATA.unhealthy.map((food, index) => (
              <FoodCard key={food.id} food={food} isHealthy={false} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
