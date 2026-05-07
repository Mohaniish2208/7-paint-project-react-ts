import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HeroAnimation(hero: HTMLElement) {
  const punchLineSection = hero.querySelector(".punch-line-section")
  const punchLine = hero.querySelector(".punch-line")
  const forYou = hero.querySelector(".for-you")
  const summary = hero.querySelector(".summary")
  const trustBar = hero.querySelector(".trust-bar")

  gsap.from([punchLine, forYou, summary], {
    y: 45,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: "power3.out",
  })

  gsap.from(trustBar, {
    y: 50,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: trustBar,
      start: "top 85%",
    },
  })

  gsap.to(punchLineSection, {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })
}
