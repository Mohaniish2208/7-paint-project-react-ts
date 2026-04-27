import { useState } from "react"

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
  return (
    <form className="form=container">
      <p>Please enter the information</p>
      <form>
        <label className="label">Name</label>
        <input required className="name" type="text" placeholder="Type here..." />

        <label className="label">Email</label>
        <input required className="email" type="email" />

        <label className="label">Message</label>
        <input required className="msg" type="text" />

        <label className="label">Phone Number</label>
        <input required type="number" />

        <select required value={option} className="option" onChange={(e) => setOption(e.target.value)}>
          <option className="default" value="">
            Select Service Type
          </option>
          {options.map((item) => (
            <option className="option-list" key={item}>
              {item}
            </option>
          ))}
        </select>

        <button type="submit">SEND</button>
      </form>
    </form>
  )
}
