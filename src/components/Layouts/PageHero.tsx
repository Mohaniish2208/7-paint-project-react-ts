import "../../../src/components/styles/pageHero.css"

export default function PageHero() {
  return (
    <div className="page-hero-container">
      <div className="punch-line-section">
        <p className="punch-line">Let us brighten things up</p>
        <p className="for-you">for you!</p>
        <p className="summary">
          With a focus on trust, craftsmanship, and detail, we transform Toronto homes and commercial spaces into fresh,
          vibrant environments that stand the test of time. Painting across the Greater Toronto Area, backed by 20+
          years of experience.
        </p>
      </div>
      <div className="trust-bar-container">
        <div className="trust-bar">
          <div className="child">
            <img className="exp-icon" src="./experience.svg" alt="exp-icon" />
            <span>20+ years experience</span>
          </div>
          <div className="child">
            <img className="estimate-icon" src="./estimates.svg" alt="estimate-icon" />
            <span>Free Estimates</span>
          </div>
          <div className="child">
            <img className="locations-icon" src="./locations.svg" alt="locations-icon" />
            <span>East and Central Region</span>
          </div>
          <div className="child">
            <img className="material-icon" src="./material.svg" alt="material-icon" />
            <span>Quality Materials</span>
          </div>
          <div className="child-last">
            <img className="references-icon" src="./references.svg" alt="references-icon" />
            <span>References Available</span>
          </div>
        </div>
      </div>
    </div>
  )
}
