"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Droplets, Plus, Minus, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const DAILY_GOAL = 8

export function WaterTrackerSection() {
  const [glasses, setGlasses] = useState(0)

  const addGlass = () => {
    if (glasses < DAILY_GOAL) {
      setGlasses(glasses + 1)
    }
  }

  const removeGlass = () => {
    if (glasses > 0) {
      setGlasses(glasses - 1)
    }
  }

  const reset = () => {
    setGlasses(0)
  }

  const percentage = (glasses / DAILY_GOAL) * 100

  return (
    <section id="water" className="py-16 px-4 bg-gradient-to-b from-cyan-50 to-blue-50">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Water Tracker
          </h2>
          <p className="text-lg text-muted-foreground">
            Track how much water you drink today!
          </p>
        </motion.div>

        <div className="bg-card rounded-2xl shadow-xl p-8">
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-56">
              <div className="absolute inset-0 bg-gradient-to-b from-sky-100 to-sky-200 rounded-b-3xl rounded-t-lg border-4 border-sky-300 overflow-hidden">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${percentage}%` }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sky-500 to-sky-400"
                >
                  {glasses > 0 && (
                    <>
                      <motion.div
                        animate={{ y: [-10, -30, -10] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-4 left-4 w-3 h-3 bg-white/40 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [-5, -25, -5] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                        className="absolute bottom-8 right-6 w-2 h-2 bg-white/40 rounded-full"
                      />
                    </>
                  )}
                </motion.div>
              </div>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-sky-600 rounded-t-lg" />
            </div>
          </div>

          <div className="text-center mb-6">
            <motion.div
              key={glasses}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-6xl font-bold text-foreground mb-2"
            >
              {glasses}
            </motion.div>
            <p className="text-muted-foreground">
              of {DAILY_GOAL} glasses
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-6">
            {Array.from({ length: DAILY_GOAL }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`text-2xl ${i < glasses ? "" : "grayscale opacity-30"}`}
              >
                {i < glasses ? "💧" : "🫗"}
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Button
              onClick={removeGlass}
              variant="outline"
              size="icon"
              disabled={glasses === 0}
            >
              <Minus className="w-5 h-5" />
            </Button>
            
            <Button
              onClick={addGlass}
              size="lg"
              disabled={glasses >= DAILY_GOAL}
              className="px-8"
            >
              <Droplets className="w-5 h-5 mr-2" />
              Add Glass
            </Button>
            
            <Button
              onClick={reset}
              variant="outline"
              size="icon"
            >
              <RotateCcw className="w-5 h-5" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center"
          >
            {glasses === 0 && (
              <p className="text-muted-foreground">Start drinking water!</p>
            )}
            {glasses > 0 && glasses < 4 && (
              <p className="text-amber-600">Keep going! You are doing great!</p>
            )}
            {glasses >= 4 && glasses < DAILY_GOAL && (
              <p className="text-blue-600">Amazing! More than half way there!</p>
            )}
            {glasses === DAILY_GOAL && (
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-green-600 font-bold text-lg"
              >
                Goal reached! You are a hydration champion!
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
