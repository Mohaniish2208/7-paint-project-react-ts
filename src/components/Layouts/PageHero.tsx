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
        <div className="trust-bar">
          <span>20+ years experience</span>
          <span>Free Estimates</span>
          <span>GTA Residential Paintings</span>
          <span>Quality Materials</span>
          <span>References Available</span>
        </div>
      </div>
    </div>
  )
}
