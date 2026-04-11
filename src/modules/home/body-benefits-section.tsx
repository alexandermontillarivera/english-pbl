"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const BODY_PARTS = [
  {
    id: "brain",
    name: "Brain",
    emoji: "🧠",
    position: "top-4 left-1/2 -translate-x-1/2",
    foods: ["🐟", "🥜", "🫐", "🥚"],
    benefits: "Fish and nuts help you think better and remember more!",
    color: "bg-pink-400",
  },
  {
    id: "eyes",
    name: "Eyes",
    emoji: "👁️",
    position: "top-16 left-1/4",
    foods: ["🥕", "🥬", "🍊", "🥚"],
    benefits: "Carrots and greens keep your eyes healthy and strong!",
    color: "bg-blue-400",
  },
  {
    id: "heart",
    name: "Heart",
    emoji: "❤️",
    position: "top-28 left-1/2 -translate-x-1/2",
    foods: ["🍎", "🥑", "🐟", "🥜"],
    benefits: "Apples and fish keep your heart pumping strong!",
    color: "bg-red-400",
  },
  {
    id: "muscles",
    name: "Muscles",
    emoji: "💪",
    position: "top-24 right-8",
    foods: ["🍗", "🥚", "🥛", "🥜"],
    benefits: "Protein foods help you grow strong muscles!",
    color: "bg-orange-400",
  },
  {
    id: "bones",
    name: "Bones",
    emoji: "🦴",
    position: "bottom-20 left-1/4",
    foods: ["🥛", "🧀", "🥦", "🐟"],
    benefits: "Milk and cheese make your bones strong!",
    color: "bg-gray-400",
  },
  {
    id: "energy",
    name: "Energy",
    emoji: "⚡",
    position: "bottom-8 right-1/4",
    foods: ["🍌", "🍞", "🥣", "🍚"],
    benefits: "Bananas and grains give you energy to play!",
    color: "bg-yellow-400",
  },
]

export function BodyBenefitsSection() {
  const [selectedPart, setSelectedPart] = useState<string | null>(null)

  const selected = BODY_PARTS.find((p) => p.id === selectedPart)

  return (
    <section id="body-benefits" className="py-16 px-4 bg-gradient-to-b from-sky-50 to-cyan-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Food Helps Your Body
          </h2>
          <p className="text-lg text-muted-foreground">
            Click on a body part to see which foods help it!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-64 h-80 bg-gradient-to-b from-primary/20 to-primary/10 rounded-[100px] mx-auto">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-b from-primary/30 to-primary/20 rounded-full" />

            {BODY_PARTS.map((part) => (
              <motion.button
                key={part.id}
                onClick={() => setSelectedPart(selectedPart === part.id ? null : part.id)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`absolute ${part.position} w-12 h-12 rounded-full
                  flex items-center justify-center text-2xl
                  shadow-lg cursor-pointer transition-all
                  ${selectedPart === part.id 
                    ? `${part.color} ring-4 ring-foreground/30` 
                    : "bg-card hover:bg-muted"}`}
              >
                {part.emoji}
              </motion.button>
            ))}
          </div>

          <div className="flex-1 min-h-[200px]">
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-card p-6 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`${selected.color} w-14 h-14 rounded-full flex items-center justify-center text-3xl`}>
                      {selected.emoji}
                    </span>
                    <h3 className="text-2xl font-bold">{selected.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{selected.benefits}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-muted-foreground">Good foods:</span>
                    {selected.foods.map((food, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-3xl"
                      >
                        {food}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-card/50 p-6 rounded-2xl border-2 border-dashed border-muted flex items-center justify-center h-[200px]"
                >
                  <p className="text-muted-foreground text-center">
                    Click on a body part to learn<br />which foods help it!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
