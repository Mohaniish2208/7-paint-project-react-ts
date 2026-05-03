import { useState } from "react"
import "../../styles/quote.css"
export default function Quote() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const [num, setNum] = useState("")
  const [option, setOption] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const options = [
    "Kitchen Cabinet Painting",
    "Interior House Painting",
    "Exterior House Painting",
    "Deck Staining",
    "Brick staining",
    "Real Estate Painting",
  ]

  const handleCaps = (text: string) => {
    if (text.trim() === "") return ""
    return text.replace(/^(\s*)([a-z])/, (_, spaces, firstLetter) => {
      return spaces + firstLetter.toUpperCase()
    })
  }

  const handleNumberFormat = (num: string) => {
    return num.replace(/\D/g, "")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    setStatusMessage("")

    const formData = {
      name,
      email,
      message: text,
      phone: num,
      service: option,
    }

    try {
      const response = await fetch("https://formspree.io/f/mojyoynq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Form submission failed. Try again.")
      }

      setStatusMessage("Thanks, we received your quote request. We will text or call you shortly with an estimate.")
      setName("")
      setEmail("")
      setText("")
      setNum("")
      setOption("")
    } catch {
      setStatusMessage("Sorry, something went wrong. Please call or text us directly.")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="quote-container">
      <h2 className="para-heading">Please enter your information</h2>
      <div className="marketting-and-form">
        <div className="marketting-section">
          <h2 className="marketting-head">
            Eastern Painting Services for Bright, Polished Spaces - Done Right the{" "}
            <span className="first-time">First Time!</span>
          </h2>
          <p className="marketting-para">
            Bring new life to your home with clean lines, smooth finishes, and careful attention to detail. From
            interior walls and kitchen cabinets to exterior surfaces and deck staining, Eastern Painting Services
            delivers reliable painting work that makes your space feel fresh, finished, and well cared for.
          </p>
        </div>
        <form className="quote-form-container" onSubmit={handleSubmit}>
          <div className="container">
            <input
              required
              className="name"
              name="name"
              value={name}
              type="text"
              placeholder="Name"
              onChange={(e) => setName(handleCaps(e.target.value))}
            />
          </div>

          <div className="container">
            <input
              required
              className="email"
              name="email"
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="container">
            <textarea
              required
              value={text}
              className="msg"
              name="msg"
              placeholder="Message"
              onChange={(e) => setText(handleCaps(e.target.value))}
            />
          </div>

          <div className="container">
            <input
              required
              className="number"
              name="number"
              value={num}
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setNum(handleNumberFormat(e.target.value))}
            />
          </div>

          <div className="container">
            <select
              required
              value={option}
              className="option"
              name="service"
              onChange={(e) => setOption(e.target.value)}
            >
              <option value="">Select Service Type</option>
              {options.map((item) => (
                <option className="option-list" key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <button className="quote-btn" type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "SEND"}
          </button>

          {statusMessage && <p className="quote-status">{statusMessage}</p>}
        </form>
      </div>
    </div>
  )
}
