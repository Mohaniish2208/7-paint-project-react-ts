import { gsap } from "gsap"
import "../../styles/services.css"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "react-router-dom"
import { services } from "../constants/services"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  return (
    <div className="services-container">
      <p className="services-label">Our Services</p>
      <h2 className="services-heading">Quality Painting for Every Space</h2>
      <div className="service-bar">
        {services.map((service) => (
          <Link
            to={`/services/${service.slug}`}
            className="services-child"
            key={service.title}
            style={{ backgroundImage: `url("${service.image}")` }}
          >
            <div className="service-content">
              <img className="service-icon" src={service.icon} alt="service-icon" />
              <span>{service.title}</span>
              <div className="service-accent" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
