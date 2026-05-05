import "../../../src/components/styles/footer.css"

export default function Footer() {
  return (
    <div className="contact-container">
      <div className="inner-container">
        <h1 className="title">Lets talk!</h1>
        <strong className="business-phone">Phone </strong>
        <a className="business-number" href="tel:+16478610192">
          : (647)861-0192
        </a>
        <br />
        <strong className="business-email">Email </strong>
        <a className="business-email" href="mailto:seheight@gmail.com">
          : seheight@gmail.com
        </a>
        <br />
        <strong className="business-address">Address </strong>
        <a>: 1500 Woodbine Avenue #30025, Toronto, Ontario. M4C 5J2</a>
      </div>
    </div>
  )
}
