import "../styles/pageHero.css"

export default function PageHero() {
  return (
    <div className="page-hero-container">
      <div className="punch-line-section">
        <img className="crown" src="public/crown.svg" alt="crown" />
        <p className="punch-line">Let me brighten things up</p>
        <p className="for-you">for you!</p>
      </div>
      <img className="hero-image" src="/hero-image.svg" alt="hero-logo" />
    </div>
  )
}
