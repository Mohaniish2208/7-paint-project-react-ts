import About from "./components/Sections/about/About"
import Reviews from "./components/Sections/reviews/Reviews"
import Services from "./components/Sections/services/Services"
import Header from "./components/Layouts/Header"
import PageHero from "./components/Layouts/PageHero"
import FAQs from "./components/Sections/faq/Faqs"
import Quote from "./components/Quote/Quote"
import Footer from "./components/Layouts/Footer"
import { Route, Routes } from "react-router-dom"
import ServicePage from "./components/Sections/services/ServicePage"

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section id="home">
                <PageHero />
              </section>

              <section id="services">
                <Services />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="review">
                <Reviews />
              </section>

              <section id="faqs">
                <FAQs />
              </section>

              <section id="contact">
                <Footer />
              </section>
            </main>
          }
        />

        <Route path="/quote" element={<Quote />} />
        <Route path="/services/:serviceSlug" element={<ServicePage />} />
      </Routes>
    </div>
  )
}

export default App
