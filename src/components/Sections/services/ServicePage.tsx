import { useParams } from "react-router-dom"
import { services } from "./Services"

export default function ServicePage() {
  const { serviceSlug } = useParams()

  const service = services.find((item) => item.slug === serviceSlug)

  if (!service) {
    return <h1>No Service Found</h1>
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <div>
        {service.photos.map((photo) => (
          <img key={photo} src={photo} alt={service.title} />
        ))}
      </div>
    </div>
  )
}
