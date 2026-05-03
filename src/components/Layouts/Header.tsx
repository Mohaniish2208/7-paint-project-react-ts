import "../../styles/header.css"

export default function Header() {
  return (
    <div className="main-container">
      <img className="logo" src="/painting-logo.svg" alt="logo" />

      <div className="nav-pages">
        <div className="mid-section">
          <a className="home" href="#home">
            Home
          </a>
          <a className="services" href="#services">
            Services
          </a>
          <a className="about" href="#about">
            About
          </a>
          <a className="faqs" href="#faqs">
            FAQs
          </a>
          <a className="contact" href="#contact">
            Contact
          </a>
          <a className="quote" href="#quote">
            Get a free quote {"\u279C"}
          </a>
        </div>
      </div>
    </div>
  )
}
