import { useState } from "react"
import "../styles/Quote.css"
export default function Quote() {
  const [option, setOption] = useState("")

  const options = [
    "Kitchen Cabinet Painting",
    "Interior House Painting",
    "Exterior House Painting",
    "Deck Staining",
    "Brick staining",
    "Real Estate Painting",
  ]

  const [name, setName] = useState("")
  const [text, setText] = useState("")

  const handleCaps = (text: string) => {
    if (text.trim() === "") return ""
    return text.replace(/^(\s*)([a-z])/, (_, spaces, firstLetter) => {
      return spaces + firstLetter.toUpperCase()
    })
  }

  const [num, setNum] = useState("")
  const handleNumberFormat = (num: string) => {
    return num.replace(/\D/g, "")
  }

  return (
    <div className="quote-container">
      <p className="para-heading">Please enter the information</p>
      <form className="quote-form-container">
        <div className="container">
          <input
            required
            className="name"
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(handleCaps(e.target.value))}
          />
        </div>

        <div className="container">
          <input required className="email" type="email" placeholder="Email" />
        </div>

        <div className="container">
          <textarea
            required
            value={text}
            className="msg"
            placeholder="Message"
            onChange={(e) => setText(handleCaps(e.target.value))}
          />
        </div>

        <div className="container">
          <input
            required
            className="number"
            value={num}
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setNum(handleNumberFormat(e.target.value))}
          />
        </div>

        <div className="container">
          <select required value={option} className="option" onChange={(e) => setOption(e.target.value)}>
            <option className="default" value="">
              Select Service Type
            </option>
            {options.map((item) => (
              <option className="option-list" key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <button className="quote-btn" type="submit">
          SEND
        </button>
      </form>
    </div>
  )
}
