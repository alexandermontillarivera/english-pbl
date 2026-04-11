"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"

const navSections = [
  { 
    category: "Learn",
    items: [
      { name: "Driving Question", href: "#driving-question", icon: "🎯", description: "Start here" },
      { name: "Healthy vs Unhealthy", href: "#inquiry", icon: "📚", description: "Explore foods" },
      { name: "Solutions", href: "#solutions", icon: "💡", description: "Tips & tricks" },
      { name: "Food Pyramid", href: "#pyramid", icon: "🔺", description: "Visual guide" },
    ]
  },
  {
    category: "Body & Health",
    items: [
      { name: "Good Habits", href: "#habits", icon: "✅", description: "Daily habits" },
      { name: "Body Benefits", href: "#body-benefits", icon: "💪", description: "How food helps" },
      { name: "Water Tracker", href: "#water", icon: "💧", description: "Stay hydrated" },
      { name: "Meal Planner", href: "#meal-planner", icon: "📋", description: "Plan your meals" },
    ]
  },
  {
    category: "Fun & Games",
    items: [
      { name: "Food Facts", href: "#facts", icon: "🧠", description: "Did you know?" },
      { name: "Quiz Game", href: "#quiz", icon: "🎮", description: "Test your knowledge" },
      { name: "Memory Game", href: "#memory", icon: "🃏", description: "Match the cards" },
      { name: "Sorting Game", href: "#game", icon: "🎯", description: "Drag & drop" },
    ]
  },
  {
    category: "Summary",
    items: [
      { name: "Summary", href: "#presentation", icon: "📊", description: "Review all" },
    ]
  }
]

const allNavItems = navSections.flatMap(section => section.items)

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = allNavItems.map(item => item.href.replace("#", ""))
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100" 
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 z-50">
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🥗
              </motion.span>
              <span className="font-bold text-lg text-emerald-600">Healthy Eating</span>
            </Link>
            
            <nav className="hidden lg:flex items-center gap-1">
              {navSections.map((section, sectionIndex) => (
                <div key={section.category} className="relative group">
                  <button className="flex items-center gap-1 px-3 py-2 rounded-full text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-sm font-medium">
                    {section.category}
                    <ChevronRight className="w-3 h-3 rotate-90 group-hover:rotate-[270deg] transition-transform" />
                  </button>
                  
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-2xl shadow-xl border border-emerald-100 p-2 min-w-[220px]"
                    >
                      {section.items.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavClick(item.href)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                            activeSection === item.href.replace("#", "")
                              ? "bg-emerald-100 text-emerald-700"
                              : "hover:bg-emerald-50 text-gray-600 hover:text-emerald-600"
                          }`}
                        >
                          <span className="text-xl">{item.icon}</span>
                          <div>
                            <div className="font-medium text-sm">{item.name}</div>
                            <div className="text-xs text-gray-400">{item.description}</div>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  </div>
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <div className="flex gap-1">
                {allNavItems.slice(0, 8).map((item, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeSection === item.href.replace("#", "") 
                        ? "bg-emerald-500" 
                        : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-40 lg:hidden overflow-y-auto overflow-x-hidden"
            >
              <div className="pt-20 pb-8 px-4">
                <div className="mb-6 px-2">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Your Progress</span>
                    <span>{Math.round((allNavItems.findIndex(item => item.href.replace("#", "") === activeSection) + 1) / allNavItems.length * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${((allNavItems.findIndex(item => item.href.replace("#", "") === activeSection) + 1) / allNavItems.length) * 100}%` 
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {navSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sectionIndex * 0.1 }}
                    className="mb-6"
                  >
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
                      {section.category}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((item, itemIndex) => {
                        const isActive = activeSection === item.href.replace("#", "")
                        return (
                          <motion.button
                            key={item.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                            onClick={() => handleNavClick(item.href)}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                              isActive
                                ? "bg-emerald-100 text-emerald-700 shadow-sm"
                                : "hover:bg-gray-50 text-gray-600"
                            }`}
                          >
                            <span className={`text-2xl ${isActive ? "scale-110" : ""} transition-transform`}>
                              {item.icon}
                            </span>
                            <div className="flex-1 text-left">
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-gray-400">{item.description}</div>
                            </div>
                            {isActive && (
                              <motion.div
                                layoutId="activeIndicator"
                                className="w-2 h-2 rounded-full bg-emerald-500"
                              />
                            )}
                            <ChevronRight className={`w-4 h-4 ${isActive ? "text-emerald-500" : "text-gray-300"}`} />
                          </motion.button>
                        )
                      })}
                    </div>
                  </motion.div>
                ))}

                <div className="mt-8 px-2">
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🌟</span>
                      <div>
                        <div className="font-semibold text-emerald-700">Quick Jump</div>
                        <div className="text-xs text-gray-500">Go to games directly</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleNavClick("#quiz")}
                        className="flex-1 bg-white rounded-xl py-2 px-3 text-sm font-medium text-emerald-600 shadow-sm hover:shadow-md transition-shadow"
                      >
                        Quiz
                      </button>
                      <button 
                        onClick={() => handleNavClick("#memory")}
                        className="flex-1 bg-white rounded-xl py-2 px-3 text-sm font-medium text-emerald-600 shadow-sm hover:shadow-md transition-shadow"
                      >
                        Memory
                      </button>
                      <button 
                        onClick={() => handleNavClick("#game")}
                        className="flex-1 bg-white rounded-xl py-2 px-3 text-sm font-medium text-emerald-600 shadow-sm hover:shadow-md transition-shadow"
                      >
                        Sort
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 safe-area-pb"
      >
        <div className="flex items-center justify-around px-2 py-2">
          {[
            { icon: "📚", label: "Learn", href: "#inquiry" },
            { icon: "💪", label: "Health", href: "#body-benefits" },
            { icon: "🎮", label: "Games", href: "#quiz" },
            { icon: "📊", label: "Summary", href: "#presentation" },
            { icon: "☰", label: "Menu", action: "menu" },
          ].map((item) => (
            <motion.button
              key={item.label}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (item.action === "menu") {
                  setIsOpen(true)
                } else if (item.href) {
                  handleNavClick(item.href)
                }
              }}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors ${
                item.href && activeSection === item.href.replace("#", "")
                  ? "bg-emerald-100 text-emerald-600"
                  : "text-gray-500 hover:text-emerald-600"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </>
  )
}
