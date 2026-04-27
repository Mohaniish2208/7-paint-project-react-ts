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
      <p className="para-heading">Please enter the information</p>
      <form className="form-container">
        <div className="container">
          <label className="label">Name</label>
          <input required className="name" type="text" placeholder="Type here..." />
        </div>

        <div className="container">
          <label className="label">Email</label>
          <input required className="email" type="email" />
        </div>

        <div className="container">
          <label className="label">Message</label>
          <input required className="msg" type="text" />
        </div>

        <div className="container">
          <label className="label">Phone Number</label>
          <input required type="number" />
        </div>

        <div className="container">
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
        </div>

        <button type="submit">SEND</button>
      </form>
    </form>
  )
}
