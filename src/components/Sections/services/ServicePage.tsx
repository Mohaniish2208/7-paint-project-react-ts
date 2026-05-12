import { useParams } from "react-router-dom"
import { services } from "../constants/services"

export default function ServicePage() {
  const { serviceSlug } = useParams()

  const service = services.find((item) => item.slug === serviceSlug)

  if (!service) {
    return (
      <main>
        <h1>No Service Found</h1>
      </main>
    )
  }

  return (
    <main>
      <section>
        <h1>{service.title}</h1>
      </section>
      <section>
        {service.photos.map((photo) => (
          <img key={photo} src={photo} alt={service.title} />
        ))}
      </section>
    </main>
  )
}
