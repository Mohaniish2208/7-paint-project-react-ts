export default function Services() {
  return (
    <div className="services-container">
      <div className="house">
        <img className="house-icon" src="./house.svg" alt="house-icon" />
        <span>House Painting</span>
      </div>

      <div className="condos">
        <img className="condos-icon" src="./condos.svg" alt="condos-icon" />
        <span>Condos and Apartments</span>
      </div>

      <div className="multi">
        <img className="multi-units" src="./multi-units.svg" alt="multi-units" />
        <span>Multi-Unit Buildings</span>
      </div>

      <div className="realtor">
        <img className="realtor-icon" src="./realtor.svg" alt="realtor-icon" />
        <span>Realtor Listing Refreshes</span>
      </div>

      <div className="commercial">
        <img className="commercial-icon" src="./commercial.svg" alt="commercial-icon" />
        <span>Select Commercial Projects</span>
      </div>

      <div className="colors">
        <img className="colors-icon" src="colors.svg" alt="colors-icon" />
        <span>Free Colour Consulting</span>
      </div>
    </div>
  )
}
