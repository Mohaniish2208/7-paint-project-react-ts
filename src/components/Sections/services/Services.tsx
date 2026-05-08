import "../../styles/services.css"

export default function Services() {
  const services = [
    {
      title: "House Painting",
      icon: "./house.svg",
      image: "/service-thumbnails/house-painting.png",
    },
    {
      title: "Condos and Apartments",
      icon: "./condos.svg",
      image: "/services-thumbnails/condos-and-apartments.png",
    },
    {
      title: "Multi-unit Buildings",
      icon: ".multi-units.svg/",
      image: "/services-thumbnails/multi-unit-buildings.jpg",
    },
    {
      title: "Realtor Listing Refreshes",
      icon: "./realtor.svg",
      image: "/services-thumbnails/realtor-listing-refreshes.png",
    },
    {
      title: "Select Commercial Projects",
      icon: "./commercial.svg",
      image: "/services-thumbnails/select-commercial-projects.png",
    },
    {
      title: "Free Colour Consulting",
      icon: "./colors.svg",
      image: "/services-thumbnails/free-color-consulting.png",
    },
  ]

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
          <img className="colors-icon" src="./colors.svg" alt="colors-icon" />
          <span>Free Colour Consulting</span>
        </div>
      </div>
    </div>
  )
}
