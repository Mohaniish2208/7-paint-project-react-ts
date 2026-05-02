import "../../styles/services.css"

export default function Services() {
  return (
    <div className="services-container">
      <div className="service-bar">
        <div className="services-child">
          <img className="house-icon" src="./house.svg" alt="house-icon" />
          <span>House Painting</span>
        </div>

        <div className="services-child">
          <img className="condos-icon" src="./condos.svg" alt="condos-icon" />
          <span>Condos and Apartments</span>
        </div>

        <div className="services-child">
          <img className="multi-units-icon" src="./multi-units.svg" alt="multi-units" />
          <span>Multi-Unit Buildings</span>
        </div>

        <div className="services-child">
          <img className="realtor-icon" src="./realtor.svg" alt="realtor-icon" />
          <span>Realtor Listing Refreshes</span>
        </div>

        <div className="services-child">
          <img className="commercial-icon" src="./commercial.svg" alt="commercial-icon" />
          <span>Select Commercial Projects</span>
        </div>

        <div className="services-child-last">
          <img className="colors-icon" src="colors.svg" alt="colors-icon" />
          <span>Free Colour Consulting</span>
        </div>
      </div>
    </div>
  )
}
