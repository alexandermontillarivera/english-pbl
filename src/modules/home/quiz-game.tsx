"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { QUIZ_QUESTIONS } from "@/config/constants"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"

export function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  const question = QUIZ_QUESTIONS[currentQuestion]
  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100

  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#22c55e", "#3b82f6", "#f59e0b", "#ec4899"],
    })
  }, [])

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return
    
    setSelectedAnswer(answerIndex)
    setShowResult(true)
    
    if (answerIndex === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
      triggerConfetti()
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setQuizComplete(false)
  }

  if (quizComplete) {
    return (
      <section id="quiz" className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-md mx-auto text-center bg-white p-8 rounded-3xl shadow-xl"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
            <p className="text-xl text-gray-600 mb-4">
              You scored <span className="font-bold text-emerald-600">{score}</span> out of{" "}
              <span className="font-bold">{QUIZ_QUESTIONS.length}</span>
            </p>
            
            <div className="mb-6">
              {score === QUIZ_QUESTIONS.length ? (
                <p className="text-green-600 font-bold text-lg">Perfect! You are a healthy eating expert! 🌟</p>
              ) : score >= QUIZ_QUESTIONS.length / 2 ? (
                <p className="text-blue-600 font-bold text-lg">Great job! Keep learning! 💪</p>
              ) : (
                <p className="text-orange-600 font-bold text-lg">Good try! Learn more and try again! 📚</p>
              )}
            </div>
            
            <Button
              onClick={resetQuiz}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-full"
            >
              Play Again 🔄
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="quiz" className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🎮 Quiz Game
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Test Your Knowledge!
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
              <span>Score: {score} ⭐</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-emerald-400 to-blue-500"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="bg-white p-6 md:p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
                {question.question}
              </h3>

              <div className="grid gap-3">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: showResult ? 1 : 1.02 }}
                    whileTap={{ scale: showResult ? 1 : 0.98 }}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-xl text-left font-medium transition-all border-2 ${
                      showResult
                        ? index === question.correctAnswer
                          ? "bg-green-100 border-green-500 text-green-700"
                          : selectedAnswer === index
                          ? "bg-red-100 border-red-500 text-red-700"
                          : "bg-gray-50 border-gray-200 text-gray-400"
                        : "bg-gray-50 border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 text-gray-700"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        showResult && index === question.correctAnswer
                          ? "bg-green-500 text-white"
                          : showResult && selectedAnswer === index
                          ? "bg-red-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}>
                        {showResult && index === question.correctAnswer ? "✓" :
                         showResult && selectedAnswer === index ? "✗" :
                         String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </span>
                  </motion.button>
                ))}
              </div>

              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-6 p-4 rounded-xl ${
                      selectedAnswer === question.correctAnswer
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <p className="font-medium">
                      {selectedAnswer === question.correctAnswer ? "✅ Correct! " : "❌ Incorrect! "}
                      {question.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {showResult && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 text-center"
                >
                  <Button
                    onClick={handleNext}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-full"
                  >
                    {currentQuestion < QUIZ_QUESTIONS.length - 1 ? "Next Question →" : "See Results 🎉"}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
