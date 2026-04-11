import { Header, Footer, DrivingQuestion } from "@/components/layout"
import {
  InquirySection,
  SolutionsSection,
  HabitsSection,
  QuizGame,
  DragDropGame,
  PresentationSection,
  FoodPyramidSection,
  MemoryGame,
  BodyBenefitsSection,
  WaterTrackerSection,
  MealPlannerSection,
  FoodFactsSection,
} from "@/modules/home"

export default function HomePage() {

  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Header />

      <main className="flex-1">
        <DrivingQuestion />
        <InquirySection />
        <SolutionsSection />
        <FoodPyramidSection />
        <HabitsSection />
        <BodyBenefitsSection />
        <MealPlannerSection />
        <WaterTrackerSection />
        <FoodFactsSection />
        <QuizGame />
        <MemoryGame />
        <DragDropGame />
        <PresentationSection />
      </main>

      <Footer />
    </div>
  )
}
