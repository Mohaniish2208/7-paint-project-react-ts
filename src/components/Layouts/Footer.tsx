import "../../../src/components/styles/footer.css"

export default function Footer() {
  return (
    <div className="contact-container">
      <div className="inner-container">
        <h1 className="title">Lets talk!</h1>
        <div className="footer-info">
          <div className="contact-row">
            <strong className="business-phone">Phone </strong>
            <span>:</span>
            <a className="business-number" href="tel:+16478610192">
              (647)861-0192
            </a>
          </div>

          <div className="contact-row">
            <strong className="business-email">Email </strong>
            <span>:</span>
            <a className="business-email" href="mailto:seheight@gmail.com">
              seheight@gmail.com
            </a>
          </div>

          <div className="contact-row">
            <strong className="business-address">Address </strong> <span>:</span>
            <a
              href="https://www.google.com/maps/place/Canada+Post/@43.6992254,-79.3218721,17z/data=!4m15!1m8!3m7!1s0x89d4cc45e91f6dcd:0x980537194fd374eb!2s1500+Woodbine+Ave,+East+York,+ON+M4C+4G9!3b1!8m2!3d43.6992254!4d-79.3192972!16s%2Fg%2F11ckqm6ht1!3m5!1s0x89d4cc45e0db8767:0xb5e38afa691cda9a!8m2!3d43.6992492!4d-79.319196!16s%2Fg%2F1vr3f4cb?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="map-address"
            >
              1500 Woodbine Avenue #30025, Toronto, Ontario. M4C 5J2
            </a>
          </div>
        </div>
      </div>
      <img className="skyline-footer" src="/skyline.svg" alt="skyline-footer" />
    </div>
  )
}
