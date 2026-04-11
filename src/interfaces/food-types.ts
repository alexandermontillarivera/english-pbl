export interface FoodItem {
  id: number
  name: string
  emoji: string
  description: string
}

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Habit {
  id: number
  text: string
  emoji: string
}

export interface Solution {
  id: number
  title: string
  description: string
  emoji: string
  color: string
}

export interface DragItem {
  id: number
  name: string
  emoji: string
  isHealthy: boolean
}
