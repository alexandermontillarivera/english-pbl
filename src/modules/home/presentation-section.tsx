"use client"

import { motion } from "framer-motion"

export function PresentationSection() {
  return (
    <section id="presentation" className="py-16 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
            📊 Step 4: Presentation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Learned
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Key Points
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-200">✓</span>
                  <span>Fruits and vegetables are healthy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-200">✓</span>
                  <span>Water is the best drink</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-200">✓</span>
                  <span>Fast food should be eaten rarely</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-200">✓</span>
                  <span>A balanced diet is important</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span> Remember
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-200">•</span>
                  <span>Eat 5 portions of fruits/vegetables daily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-200">•</span>
                  <span>Drink 8 glasses of water</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-200">•</span>
                  <span>Limit sugary snacks and drinks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-200">•</span>
                  <span>Exercise regularly</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white text-gray-800 p-8 rounded-3xl text-center shadow-2xl"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-5xl mb-4"
            >
              🌟
            </motion.div>
            <h3 className="text-2xl font-bold mb-3">Conclusion</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Eating healthy food is easy! Choose fruits and vegetables, drink water,
              and eat fast food only sometimes. Your body will thank you!
            </p>
            <div className="flex justify-center gap-4 mt-6 text-4xl">
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0 }}
              >
                🍎
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
              >
                🥦
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
              >
                💧
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}
              >
                🥕
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.8 }}
              >
                🍌
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
