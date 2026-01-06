import FeedbackForm from "./components/FeedbackForm"
import ImageSlideshow from "./components/ImageSlideshow"
import TodoApp from "./components/TodoApp"

export default function App() {
  return (
    <div className="space-y-10 p-6">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp />
    </div>
  )
}
