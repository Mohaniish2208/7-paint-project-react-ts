import { useParams } from "react-router-dom"
import { services } from "../constants/services"
import { useEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap"
import Footer from "../../Layouts/Footer"
import "../../styles/footer.css"

export default function ServicePage() {
  const { serviceSlug } = useParams()
  const galleryTrackRef = useRef<HTMLDivElement | null>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null)
  const resumeTimeoutRef = useRef<number | null>(null)

  const pauseGallery = () => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current)
    }

    tweenRef.current?.pause()
  }

  const resumeGallery = () => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current)
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      tweenRef.current?.resume()
      setActivePhotoIndex(null)
    }, 1000)
  }

  const service = services.find((item) => item.slug === serviceSlug)
  const galleryPhotos = useMemo(() => (service ? [...service.photos, ...service.photos] : []), [service])

  useEffect(() => {
    if (!galleryTrackRef.current || galleryPhotos.length === 0) return

    tweenRef.current = gsap.to(galleryTrackRef.current, {
      xPercent: -50,
      duration: 30,
      ease: "none" /*no animation while changing the photo*/,
      repeat: -1 /*repeat infinitely */,
    })
    return () => {
      tweenRef.current?.kill()
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
    <main className="service-page">
      <section className="service-page-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="service-page-hero-content">
          <p className="service-page-label">Our Services</p>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <a href="/quote" className="service-page-cta">
            Get a Free Quote
          </a>
        </div>
      </section>
      <section className="service-page-gallery">
        {service.photos.length > 0 ? (
          <div className="service-gallery-viewport">
            <div
              className="service-gallery-track"
              ref={galleryTrackRef}
              onMouseEnter={() => tweenRef.current?.pause()}
              onMouseLeave={() => tweenRef.current?.resume()}
            >
              {galleryPhotos.map((photo, index) => (
                <img
                  key={`${photo}-${index}`}
                  src={photo}
                  alt={service.title}
                  className={activePhotoIndex === index ? "is-active" : ""}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") {
                      pauseGallery()
                    }
                  }}
                  onPointerLeave={(event) => {
                    if (event.pointerType === "mouse") {
                      resumeGallery()
                    }
                  }}
                  onPointerDown={() => {
                    pauseGallery()
                    setActivePhotoIndex(index)
                  }}
                  onPointerUp={resumeGallery}
                  onPointerCancel={resumeGallery}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="service-gallery-empty">Project photos pertaining to this service will be added soon.</p>
        )}
      </section>

      <Footer />
    </main>
  )
}
