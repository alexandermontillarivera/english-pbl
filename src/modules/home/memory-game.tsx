"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RotateCcw, Trophy, Clock } from "lucide-react"

const FOOD_PAIRS = [
  { id: 1, emoji: "🍎", name: "Apple" },
  { id: 2, emoji: "🥦", name: "Broccoli" },
  { id: 3, emoji: "🥕", name: "Carrot" },
  { id: 4, emoji: "🍌", name: "Banana" },
  { id: 5, emoji: "🍇", name: "Grapes" },
  { id: 6, emoji: "🥛", name: "Milk" },
]

interface Card {
  id: number
  pairId: number
  emoji: string
  name: string
  isFlipped: boolean
  isMatched: boolean
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

function createCards(): Card[] {
  const cards: Card[] = []
  FOOD_PAIRS.forEach((food, index) => {
    cards.push({
      id: index * 2,
      pairId: food.id,
      emoji: food.emoji,
      name: food.name,
      isFlipped: false,
      isMatched: false,
    })
    cards.push({
      id: index * 2 + 1,
      pairId: food.id,
      emoji: food.emoji,
      name: food.name,
      isFlipped: false,
      isMatched: false,
    })
  })
  return shuffleArray(cards)
}

export function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [matches, setMatches] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const [timer, setTimer] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setCards(createCards())
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && !gameComplete) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, gameComplete])

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards
      const firstCard = cards.find((c) => c.id === first)
      const secondCard = cards.find((c) => c.id === second)

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
        setCards((prev) =>
          prev.map((card) =>
            card.pairId === firstCard.pairId
              ? { ...card, isMatched: true }
              : card
          )
        )
        setMatches((prev) => prev + 1)
        setFlippedCards([])

        if (matches + 1 === FOOD_PAIRS.length) {
          setGameComplete(true)
          setIsPlaying(false)
        }
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              flippedCards.includes(card.id)
                ? { ...card, isFlipped: false }
                : card
            )
          )
          setFlippedCards([])
        }, 1000)
      }
      setMoves((prev) => prev + 1)
    }
  }, [flippedCards, cards, matches])

  const handleCardClick = (cardId: number) => {
    if (!isPlaying) setIsPlaying(true)
    
    const card = cards.find((c) => c.id === cardId)
    if (!card || card.isFlipped || card.isMatched || flippedCards.length >= 2) return

    setCards((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, isFlipped: true } : c))
    )
    setFlippedCards((prev) => [...prev, cardId])
  }

  const resetGame = () => {
    setCards(createCards())
    setFlippedCards([])
    setMoves(0)
    setMatches(0)
    setGameComplete(false)
    setTimer(0)
    setIsPlaying(false)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <section id="memory" className="py-16 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Memory Game
          </h2>
          <p className="text-lg text-muted-foreground">
            Find the matching food pairs!
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mb-6">
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-semibold">{formatTime(timer)}</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow">
            <span className="text-muted-foreground">Moves:</span>
            <span className="font-semibold">{moves}</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow">
            <span className="text-muted-foreground">Pairs:</span>
            <span className="font-semibold">{matches}/{FOOD_PAIRS.length}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-6">
          {cards.map((card) => (
            <motion.button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              whileHover={{ scale: card.isMatched ? 1 : 1.05 }}
              whileTap={{ scale: card.isMatched ? 1 : 0.95 }}
              className={`aspect-square rounded-xl text-4xl md:text-5xl
                flex items-center justify-center cursor-pointer
                transition-all duration-300 shadow-lg
                ${card.isMatched 
                  ? "bg-green-200 border-2 border-green-400" 
                  : card.isFlipped 
                    ? "bg-card border-2 border-primary" 
                    : "bg-gradient-to-br from-primary to-primary/80"}`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {card.isFlipped || card.isMatched ? (
                <span>{card.emoji}</span>
              ) : (
                <span className="text-white text-3xl">?</span>
              )}
            </motion.button>
          ))}
        </div>

        <div className="flex justify-center">
          <Button onClick={resetGame} variant="outline" size="lg">
            <RotateCcw className="w-5 h-5 mr-2" />
            New Game
          </Button>
        </div>

        {gameComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 p-6 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl text-center"
          >
            <Trophy className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Excellent Work!
            </h3>
            <p className="text-muted-foreground">
              You found all pairs in {moves} moves and {formatTime(timer)}!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
