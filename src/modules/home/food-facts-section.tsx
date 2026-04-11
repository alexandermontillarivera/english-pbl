"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const FOOD_FACTS = [
  {
    emoji: "🥕",
    food: "Carrots",
    fact: "Carrots were originally purple! Orange carrots were created in the Netherlands.",
    color: "from-orange-100 to-amber-100",
  },
  {
    emoji: "🍌",
    food: "Bananas",
    fact: "Bananas are berries, but strawberries are not! Banana plants are actually giant herbs.",
    color: "from-yellow-100 to-amber-100",
  },
  {
    emoji: "🍎",
    food: "Apples",
    fact: "Apples float in water because they are 25% air! That is why we bob for apples.",
    color: "from-red-100 to-pink-100",
  },
  {
    emoji: "🥦",
    food: "Broccoli",
    fact: "Broccoli has more protein than steak! It is a superfood for your body.",
    color: "from-green-100 to-emerald-100",
  },
  {
    emoji: "🍯",
    food: "Honey",
    fact: "Honey never spoils! Archaeologists found 3000-year-old honey that was still edible.",
    color: "from-amber-100 to-yellow-100",
  },
  {
    emoji: "🥑",
    food: "Avocados",
    fact: "Avocados are fruits, not vegetables! They are sometimes called alligator pears.",
    color: "from-green-100 to-lime-100",
  },
  {
    emoji: "🍅",
    food: "Tomatoes",
    fact: "Tomatoes are fruits! They were once thought to be poisonous in Europe.",
    color: "from-red-100 to-rose-100",
  },
  {
    emoji: "🥛",
    food: "Milk",
    fact: "It takes 12 pounds of milk to make 1 gallon of ice cream!",
    color: "from-slate-100 to-gray-100",
  },
]

export function FoodFactsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FOOD_FACTS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextFact = () => {
    setCurrentIndex((prev) => (prev + 1) % FOOD_FACTS.length)
  }

  const prevFact = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? FOOD_FACTS.length - 1 : prev - 1
    )
  }

  const currentFact = FOOD_FACTS[currentIndex]

  return (
    <section id="facts" className="py-16 px-4 bg-gradient-to-b from-violet-50 to-purple-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fun Food Facts
          </h2>
          <p className="text-lg text-muted-foreground">
            Did you know? Learn amazing facts about food!
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            transition={{ duration: 0.3 }}
            className={`bg-gradient-to-br ${currentFact.color} rounded-2xl shadow-xl p-8 mb-6`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="text-6xl">{currentFact.emoji}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  <h3 className="text-xl font-bold">{currentFact.food}</h3>
                </div>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  {currentFact.fact}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mb-6">
          {FOOD_FACTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all
                ${i === currentIndex 
                  ? "bg-primary scale-125" 
                  : "bg-muted hover:bg-muted-foreground/30"}`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <Button onClick={prevFact} variant="outline" size="icon">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            variant="outline"
            size="icon"
          >
            {isAutoPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </Button>
          
          <Button onClick={nextFact} variant="outline" size="icon">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          {isAutoPlaying ? "Auto-playing every 5 seconds" : "Paused - click arrows to navigate"}
        </p>
      </div>
    </section>
  )
}
