export const FOOD_DATA = {
  healthy: [
    { id: 1, name: "Apple", emoji: "🍎", description: "Fresh and sweet fruit" },
    { id: 2, name: "Broccoli", emoji: "🥦", description: "Green vegetable full of vitamins" },
    { id: 3, name: "Carrot", emoji: "🥕", description: "Orange vegetable good for eyes" },
    { id: 4, name: "Water", emoji: "💧", description: "Best drink for your body" },
    { id: 5, name: "Banana", emoji: "🍌", description: "Yellow fruit with potassium" },
    { id: 6, name: "Salad", emoji: "🥗", description: "Mix of fresh vegetables" },
    { id: 7, name: "Fish", emoji: "🐟", description: "Good protein and omega-3" },
    { id: 8, name: "Milk", emoji: "🥛", description: "Calcium for strong bones" },
  ],
  unhealthy: [
    { id: 9, name: "Pizza", emoji: "🍕", description: "Fast food with lots of cheese" },
    { id: 10, name: "Soda", emoji: "🥤", description: "Drink with too much sugar" },
    { id: 11, name: "Candy", emoji: "🍬", description: "Sweet but bad for teeth" },
    { id: 12, name: "Burger", emoji: "🍔", description: "Fast food with lots of fat" },
    { id: 13, name: "Fries", emoji: "🍟", description: "Fried potatoes with salt" },
    { id: 14, name: "Ice Cream", emoji: "🍦", description: "Sweet and cold dessert" },
    { id: 15, name: "Donut", emoji: "🍩", description: "Sweet fried dough" },
    { id: 16, name: "Chips", emoji: "🍿", description: "Salty snack" },
  ],
}

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Is pizza healthy food?",
    options: ["Yes, it is healthy", "No, it is not healthy", "I don't know"],
    correctAnswer: 1,
    explanation: "Pizza has lots of cheese and fat. It is not healthy food.",
  },
  {
    id: 2,
    question: "What should you drink every day?",
    options: ["Soda", "Water", "Energy drinks"],
    correctAnswer: 1,
    explanation: "Water is the best drink for your body!",
  },
  {
    id: 3,
    question: "Which food is healthy?",
    options: ["Candy", "Apple", "Chips"],
    correctAnswer: 1,
    explanation: "Apples are fruits and fruits are healthy!",
  },
  {
    id: 4,
    question: "How many vegetables should you eat?",
    options: ["Zero", "A lot every day", "Only on weekends"],
    correctAnswer: 1,
    explanation: "You should eat vegetables every day!",
  },
  {
    id: 5,
    question: "Is broccoli healthy?",
    options: ["Yes, very healthy", "No, it is bad", "Only for adults"],
    correctAnswer: 0,
    explanation: "Broccoli is a super healthy vegetable!",
  },
]

export const HABITS = {
  good: [
    { id: 1, text: "Eat fruits every day", emoji: "🍎" },
    { id: 2, text: "Drink 8 glasses of water", emoji: "💧" },
    { id: 3, text: "Eat vegetables with meals", emoji: "🥦" },
    { id: 4, text: "Have breakfast every morning", emoji: "🍳" },
    { id: 5, text: "Exercise regularly", emoji: "🏃" },
    { id: 6, text: "Sleep 8 hours", emoji: "😴" },
  ],
  bad: [
    { id: 1, text: "Skip breakfast", emoji: "❌" },
    { id: 2, text: "Drink too much soda", emoji: "🥤" },
    { id: 3, text: "Eat fast food often", emoji: "🍔" },
    { id: 4, text: "Eat too much candy", emoji: "🍬" },
    { id: 5, text: "Stay up very late", emoji: "🌙" },
    { id: 6, text: "No exercise", emoji: "🛋️" },
  ],
}

export const SOLUTIONS = [
  {
    id: 1,
    title: "Eat Fruits and Vegetables",
    description: "Eat 5 portions of fruits and vegetables every day.",
    emoji: "🥗",
    color: "bg-green-100",
  },
  {
    id: 2,
    title: "Drink Water",
    description: "Drink 8 glasses of water every day. Water is the best!",
    emoji: "💧",
    color: "bg-blue-100",
  },
  {
    id: 3,
    title: "Avoid Fast Food",
    description: "Eat fast food only sometimes, not every day.",
    emoji: "🚫",
    color: "bg-red-100",
  },
  {
    id: 4,
    title: "Balanced Diet",
    description: "Eat different foods: proteins, carbs, and vitamins.",
    emoji: "⚖️",
    color: "bg-yellow-100",
  },
]
