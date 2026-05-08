import { gsap } from "gsap"
import "../../styles/services.css"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const services = [
    {
      title: "House Painting",
      icon: "./house.svg",
      image: "../../../../public/service-thumbnails/house-painting.jpg",
    },
    {
      title: "Condos and Apartments",
      icon: "./condos.svg",
      image: "../../../../public/service-thumbnails/condos-and-apartments.png",
    },
    {
      title: "Multi-unit Buildings",
      icon: ".multi-units.svg/",
      image: "../../../../public/service-thumbnails/multi-unit-buildings.jpg",
    },
    {
      title: "Realtor Listing Refreshes",
      icon: "./realtor.svg",
      image: "../../../../public/service-thumbnails/realtor-listing-refreshes.png",
    },
    {
      title: "Select Commercial Projects",
      icon: "./commercial.svg",
      image: "../../../../public/service-thumbnails/select-commercial-projects.png",
    },
    {
      title: "Free Colour Consulting",
      icon: "./colors.svg",
      image: "../../../../public/service-thumbnails/free-colour-consulting.png",
    },
  ]

  return (
    <div className="services-container">
      <p className="services-label">Our Services</p>
      <h2 className="services-header">Quality Painting for Every Space</h2>
      <div className="service-bar">
        {services.map((service) => (
          <div className="services-child" key={service.title} style={{ backgroundImage: `url("${service.image}")` }}>
            <div className="service-content">
              <img className="service-icon" src={service.icon} alt="service-icon" />
              <span>{service.title}</span>
              <div className="service-accent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
