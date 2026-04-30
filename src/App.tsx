import About from "./components/Sections/about/About"
import Contact from "./components/Sections/contact/Contact"
import Reviews from "./components/Sections/reviews/Reviews"
import Services from "./components/Sections/services/Services"
import Header from "./components/Layouts/Header"
import PageHero from "./components/Layouts/PageHero"
import FAQs from "./components/Sections/faq/Faqs"
import Quote from "./components/Quote/Quote"

function App() {
  return (
    <div className="app">
      <Header />
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

        <section id="quote">
          <Quote />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
