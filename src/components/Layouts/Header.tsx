import { useNavigate } from "react-router-dom"
import "../../../src/components/styles/header.css"

export default function Header() {
  const navigate = useNavigate()

  return (
    <div className="main-container">
      <div className="nav-pages">
        <div className="mid-section">
          <a className="home" href="/#home">
            Home
          </a>
          <a className="services" href="/#services">
            Services
          </a>
          <a className="about" href="/#about">
            About Us
          </a>
          <a className="faqs" href="/#faqs">
            FAQs
          </a>
          <a className="contact" href="/#contact">
            Contact Us
          </a>
          <button
            type="button"
            className="quote"
            onClick={() => {
              navigate("/quote")
            }}
          >
            Get a free quote {"\u279C"}
          </button>
        </div>
      </div>
    </div>
  )
}
