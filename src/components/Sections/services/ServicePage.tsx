import { useParams } from "react-router-dom"
import { services } from "../constants/services"
import { useEffect, useMemo, useRef } from "react"
import { gsap } from "gsap"

export default function ServicePage() {
  const { serviceSlug } = useParams()
  const galleryTrackRef = useRef<HTMLDivElement | null>(null)

  const service = services.find((item) => item.slug === serviceSlug)
  const galleryPhotos = useMemo(() => (service ? [...service.photos, ...service.photos] : []), [service])

  useEffect(() => {
    if (!galleryTrackRef.current || galleryPhotos.length === 0) return

    const tween = gsap.to(galleryTrackRef.current, {
      xPercent: -50,
      duration: 30,
      ease: "none" /*no animation while changing the photo*/,
      repeat: -1 /*repeat infinitely */,
    })
    return () => {
      tween.kill()
    }
  }, [galleryPhotos.length])

  if (!service) {
    return (
      <main>
        <h1>No Service Found</h1>
      </main>
    )
  }

  return (
    <main className="servie-page">
      <section className="service-page-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="service-page-hero-content">
          <p className="service-page-label">Our Services</p>
          <h1>{service.title}</h1>
          <a href="/quote" className="service-page-cta">
            Get a Free Quote
          </a>
        </div>
      </section>
      <section className="service-page-gallery">
        {service.photos.length > 0 ? (
          <div className="service-gallery-viewport">
            <div className="service-gallery-track" ref={galleryTrackRef}>
              {service.photos.map((photo) => (
                <img key={photo} src={photo} alt={service.title} />
              ))}
            </div>
          </div>
        ) : (
          <p className="service-gallery-empty">Project photos pertaining to this service will be added soon.</p>
        )}
      </section>
    </main>
  )
}
