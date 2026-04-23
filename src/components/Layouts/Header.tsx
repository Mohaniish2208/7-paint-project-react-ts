import { useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className="main-container">
      <img src="/painting-logo.svg" alt="logo" />
      <div className="nav-pages">
        <div className="home" onClick={() => navigate("/")}>
          <p>Home</p>
        </div>
        <div className="services" onClick={() => navigate("/services")}>
          <p>Services</p>
        </div>
        <div className="about" onClick={() => navigate("/about")}>
          <p>About</p>
        </div>
        <div className="contact" onClick={() => navigate("/contact")}>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  )
}
