import "../styles/pageHero.css"

export default function PageHero() {
  return (
    <div className="page-hero-container">
      <div className="punch-line-section">
        <p className="punch-line">Let me brighten things up</p>
        <p className="for-you">for you!</p>
        <p className="summary">
          With a focus on trust, craftsmanship, and detail, we transform Toronto homes and commercial spaces into
          polished, vibrant environments that stand the test of time. Painting across the Greater Toronto Area, backed
          by 20+ years of experience.
        </p>
      </div>
      <div className="trust-bar-container">
        <div className="trust-bar">
          <div className="child">
            <span>20+ years experience</span>
          </div>
          <div className="child">
            <span>Free Estimates</span>
          </div>
          <div className="child">
            <span>East and Central Region</span>
          </div>
          <div className="child">
            <span>Quality Materials</span>
          </div>
          <div className="child-last">
            <span>References Available</span>
          </div>
        </div>
      </div>
    </div>
  )
}
