import { Route, Routes } from "react-router-dom"
import About from "./components/Sections/about/About"
import Contact from "./components/Sections/contact/Contact"
import Reviews from "./components/Sections/reviews/Reviews"
import Services from "./components/Sections/services/Services"
import Header from "./components/Layouts/Header"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </div>
  )
}

export default App
