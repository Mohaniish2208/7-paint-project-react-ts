import { useState } from "react"
import "../../styles/faqs.css"

const faqs = [
  {
    question: "What is included in your quote?",
    answer: "Prep work, surface protection, painting, cleanup, and the agreed number of coats are included.",
  },
  {
    question: "What type of paint do you use?",
    answer: "We use quality paint brands suited to the surface, room type, durability needs, and finish preference.",
  },
  {
    question: "Do you repair wall damage before painting?",
    answer: "Yes, minor patching, sanding, and surface preparation are handled before painting begins.",
  },
  {
    question: "Can I stay home during the painting work?",
    answer: "Yes, in most cases. We work neatly and section by section to reduce disruption.",
  },
  {
    question: "Do you offer a warranty or guarantee?",
    answer: "Yes, we stand behind our workmanship and can explain warranty details before the project begins.",
  },
  {
    question: "Can you give me a rough price over the phone?",
    answer:
      "Yes, but the final price depends on the actual space, wall condition, paint type, and amount of prep needed.",
  },
  {
    question: "Will you patch nail holes and small cracks?",
    answer: "Yes, minor patching is usually included. Larger repairs or damaged drywall may cost extra.",
  },
  {
    question: "What happens if the walls need more repair than expected?",
    answer: "We will explain the issue before doing extra work and confirm any added cost first.",
  },
  {
    question: "How long does one room usually take?",
    answer:
      "The time needed to paint a room varies from job to job. It depends if it is walls only, or trim, or even the ceiling. Once a room is checked, it will be easier to estimate a time frame for the project.",
  },
  {
    question: "Do you bring your own tools and supplies?",
    answer: "Yes. We carry our own professional grade equipment/supplies.",
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="main-faq-container">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div className="faq-container" key={faq.question}>
            <div className="faq-question-row">
              <p className="question">
                {index + 1}. {faq.question}
              </p>
              <button className="view-btn" onClick={() => setOpenIndex(isOpen ? null : index)}>
                {isOpen ? "HIDE" : "VIEW"}
              </button>
            </div>
            <div className={`answer-box ${isOpen ? "open" : ""}`}>
              <p className="answer">{faq.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
