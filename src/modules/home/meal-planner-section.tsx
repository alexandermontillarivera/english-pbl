"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"

const MEALS = {
  breakfast: {
    name: "Breakfast",
    time: "7:00 AM",
    emoji: "🌅",
    options: [
      { name: "Oatmeal with fruits", items: ["🥣", "🍓", "🍌"], healthy: true },
      { name: "Eggs and toast", items: ["🥚", "🍞", "🥛"], healthy: true },
      { name: "Yogurt with berries", items: ["🥛", "🫐", "🍯"], healthy: true },
      { name: "Cereal with milk", items: ["🥣", "🥛", "🍎"], healthy: true },
    ],
  },
  lunch: {
    name: "Lunch",
    time: "12:00 PM",
    emoji: "☀️",
    options: [
      { name: "Chicken salad", items: ["🥗", "🍗", "🥕"], healthy: true },
      { name: "Sandwich with veggies", items: ["🥪", "🥬", "🍅"], healthy: true },
      { name: "Rice and fish", items: ["🍚", "🐟", "🥦"], healthy: true },
      { name: "Pasta with vegetables", items: ["🍝", "🥬", "🍅"], healthy: true },
    ],
  },
  snack: {
    name: "Snack",
    time: "3:00 PM",
    emoji: "🍎",
    options: [
      { name: "Fresh fruits", items: ["🍎", "🍊", "🍇"], healthy: true },
      { name: "Nuts and seeds", items: ["🥜", "🌰"], healthy: true },
      { name: "Carrot sticks", items: ["🥕", "🥒"], healthy: true },
      { name: "Cheese and crackers", items: ["🧀", "🍘"], healthy: true },
    ],
  },
  dinner: {
    name: "Dinner",
    time: "7:00 PM",
    emoji: "🌙",
    options: [
      { name: "Grilled chicken", items: ["🍗", "🥦", "🍚"], healthy: true },
      { name: "Fish with potatoes", items: ["🐟", "🥔", "🥬"], healthy: true },
      { name: "Vegetable soup", items: ["🥣", "🥕", "🥬"], healthy: true },
      { name: "Turkey and salad", items: ["🦃", "🥗", "🍞"], healthy: true },
    ],
  },
}

type MealType = keyof typeof MEALS

export function MealPlannerSection() {
  const [selectedMeals, setSelectedMeals] = useState<Record<MealType, number>>({
    breakfast: 0,
    lunch: 0,
    snack: 0,
    dinner: 0,
  })
  const [activeMeal, setActiveMeal] = useState<MealType>("breakfast")

  const mealKeys = Object.keys(MEALS) as MealType[]
  const currentMeal = MEALS[activeMeal]
  const currentOption = currentMeal.options[selectedMeals[activeMeal]]

  const nextOption = () => {
    setSelectedMeals((prev) => ({
      ...prev,
      [activeMeal]: (prev[activeMeal] + 1) % currentMeal.options.length,
    }))
  }

  const prevOption = () => {
    setSelectedMeals((prev) => ({
      ...prev,
      [activeMeal]: prev[activeMeal] === 0 
        ? currentMeal.options.length - 1 
        : prev[activeMeal] - 1,
    }))
  }

  return (
    <section id="meal-planner" className="py-16 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plan Your Meals
          </h2>
          <p className="text-lg text-muted-foreground">
            Build a healthy meal plan for your day!
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {mealKeys.map((meal) => (
            <Button
              key={meal}
              onClick={() => setActiveMeal(meal)}
              variant={activeMeal === meal ? "default" : "outline"}
              className="gap-2"
            >
              <span>{MEALS[meal].emoji}</span>
              <span className="hidden sm:inline">{MEALS[meal].name}</span>
            </Button>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-4">
            <span className="text-5xl mb-2 block">{currentMeal.emoji}</span>
            <h3 className="text-2xl font-bold">{currentMeal.name}</h3>
            <p className="text-muted-foreground">{currentMeal.time}</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button onClick={prevOption} variant="outline" size="icon">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMeals[activeMeal]}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="min-w-[200px] text-center"
              >
                <div className="flex justify-center gap-2 text-4xl mb-3">
                  {currentOption.items.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
                <p className="font-semibold">{currentOption.name}</p>
              </motion.div>
            </AnimatePresence>

            <Button onClick={nextOption} variant="outline" size="icon">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Utensils className="w-5 h-5 text-primary" />
            <h4 className="font-bold text-lg">Your Daily Plan</h4>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mealKeys.map((meal) => {
              const mealData = MEALS[meal]
              const selected = mealData.options[selectedMeals[meal]]
              return (
                <div 
                  key={meal}
                  className={`p-3 rounded-xl text-center transition-all
                    ${activeMeal === meal ? "bg-primary/10 ring-2 ring-primary" : "bg-muted/50"}`}
                >
                  <span className="text-2xl block mb-1">{mealData.emoji}</span>
                  <p className="text-xs font-semibold mb-1">{mealData.name}</p>
                  <div className="flex justify-center gap-1">
                    {selected.items.slice(0, 3).map((item, i) => (
                      <span key={i} className="text-lg">{item}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
