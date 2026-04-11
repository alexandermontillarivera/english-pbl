"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"

interface DragItem {
  id: number
  name: string
  emoji: string
  isHealthy: boolean
}

const GAME_ITEMS: DragItem[] = [
  { id: 1, name: "Apple", emoji: "🍎", isHealthy: true },
  { id: 2, name: "Pizza", emoji: "🍕", isHealthy: false },
  { id: 3, name: "Broccoli", emoji: "🥦", isHealthy: true },
  { id: 4, name: "Soda", emoji: "🥤", isHealthy: false },
  { id: 5, name: "Carrot", emoji: "🥕", isHealthy: true },
  { id: 6, name: "Candy", emoji: "🍬", isHealthy: false },
  { id: 7, name: "Water", emoji: "💧", isHealthy: true },
  { id: 8, name: "Burger", emoji: "🍔", isHealthy: false },
]

export function DragDropGame() {
  const [items, setItems] = useState<DragItem[]>(GAME_ITEMS)
  const [healthyZone, setHealthyZone] = useState<DragItem[]>([])
  const [unhealthyZone, setUnhealthyZone] = useState<DragItem[]>([])
  const [feedback, setFeedback] = useState<{ type: "correct" | "wrong" | null; message: string }>({
    type: null,
    message: "",
  })
  const [gameComplete, setGameComplete] = useState(false)
  const [score, setScore] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setItems([...GAME_ITEMS].sort(() => Math.random() - 0.5))
    setIsClient(true)
  }, [])

  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#22c55e", "#3b82f6", "#f59e0b", "#ec4899"],
    })
  }, [])

  const handleDrop = (item: DragItem, zone: "healthy" | "unhealthy") => {
    const isCorrect =
      (zone === "healthy" && item.isHealthy) || (zone === "unhealthy" && !item.isHealthy)

    if (isCorrect) {
      setScore(score + 1)
      setFeedback({ type: "correct", message: `✅ Correct! ${item.name} is ${zone}!` })

      setItems((prev) => prev.filter((i) => i.id !== item.id))

      if (zone === "healthy") {
        setHealthyZone((prev) => [...prev, item])
      } else {
        setUnhealthyZone((prev) => [...prev, item])
      }

      if (items.length === 1) {
        setTimeout(() => {
          setGameComplete(true)
          triggerConfetti()
        }, 500)
      }
    } else {
      setFeedback({ type: "wrong", message: `❌ Oops! ${item.name} is not ${zone}. Try again!` })
    }

    setTimeout(() => setFeedback({ type: null, message: "" }), 2000)
  }

  const resetGame = () => {
    setItems([...GAME_ITEMS].sort(() => Math.random() - 0.5))
    setHealthyZone([])
    setUnhealthyZone([])
    setFeedback({ type: null, message: "" })
    setGameComplete(false)
    setScore(0)
  }

  if (gameComplete) {
    return (
      <section id="game" className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-md mx-auto text-center bg-white p-8 rounded-3xl shadow-xl"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-6xl mb-4"
            >
              🏆
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Amazing!</h2>
            <p className="text-xl text-gray-600 mb-4">
              You sorted all the food correctly!
            </p>
            <p className="text-lg text-emerald-600 font-bold mb-6">
              Score: {score} / {GAME_ITEMS.length} ⭐
            </p>
            <Button
              onClick={resetGame}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-3 rounded-full"
            >
              Play Again 🔄
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="game" className="py-16 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🎯 Sorting Game
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sort the Food!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on a food item, then click on the correct box to sort it!
          </p>
        </motion.div>

        <AnimatePresence>
          {feedback.type && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`max-w-md mx-auto mb-6 p-4 rounded-xl text-center font-bold ${
                feedback.type === "correct"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {feedback.message}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mb-6">
          <span className="bg-white px-6 py-2 rounded-full font-bold text-gray-700 shadow-md">
            Score: {score} / {GAME_ITEMS.length} ⭐
          </span>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-center font-bold text-gray-600 mb-4">Click a food to sort it:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <AnimatePresence>
                {items.map((item) => (
                  <FoodDraggable
                    key={item.id}
                    item={item}
                    onDrop={handleDrop}
                  />
                ))}
              </AnimatePresence>
            </div>
            {items.length === 0 && (
              <p className="text-center text-gray-400 py-4">All food sorted! 🎉</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <DropZone
            type="healthy"
            items={healthyZone}
            label="Healthy Food"
            emoji="✅"
            color="green"
          />
          <DropZone
            type="unhealthy"
            items={unhealthyZone}
            label="Unhealthy Food"
            emoji="⚠️"
            color="red"
          />
        </div>
      </div>
    </section>
  )
}

interface FoodDraggableProps {
  item: DragItem
  onDrop: (item: DragItem, zone: "healthy" | "unhealthy") => void
}

function FoodDraggable({ item, onDrop }: FoodDraggableProps) {
  const [showOptions, setShowOptions] = useState(false)

  return (
    <div className="relative">
      <motion.button
        layout
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowOptions(!showOptions)}
        className="bg-gradient-to-br from-amber-100 to-orange-100 p-4 rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-colors cursor-pointer"
      >
        <span className="text-3xl block mb-1">{item.emoji}</span>
        <span className="text-sm font-medium text-gray-600">{item.name}</span>
      </motion.button>

      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex gap-2 z-10"
          >
            <button
              onClick={() => {
                onDrop(item, "healthy")
                setShowOptions(false)
              }}
              className="bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-bold hover:bg-green-600 shadow-lg"
            >
              ✅ Healthy
            </button>
            <button
              onClick={() => {
                onDrop(item, "unhealthy")
                setShowOptions(false)
              }}
              className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-bold hover:bg-red-600 shadow-lg"
            >
              ⚠️ Unhealthy
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface DropZoneProps {
  type: "healthy" | "unhealthy"
  items: DragItem[]
  label: string
  emoji: string
  color: "green" | "red"
}

function DropZone({ items, label, emoji, color }: DropZoneProps) {
  const colors = {
    green: "from-green-100 to-emerald-100 border-green-300",
    red: "from-red-100 to-orange-100 border-red-300",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br ${colors[color]} border-2 border-dashed rounded-2xl p-6 min-h-[200px]`}
    >
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-2xl">{emoji}</span>
        <h3 className="font-bold text-gray-700">{label}</h3>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="bg-white p-3 rounded-xl shadow-md"
            >
              <span className="text-2xl">{item.emoji}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {items.length === 0 && (
        <p className="text-center text-gray-400 text-sm">Drop food here</p>
      )}
    </motion.div>
  )
}
