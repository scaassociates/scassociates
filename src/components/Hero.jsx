import { useEffect, useRef, useState } from 'react'
import { firm, heroSummary, services } from '../data/profile.js'

const heroServices = services.slice(0, 4)

export default function Hero() {
  const [activeService, setActiveService] = useState(heroServices[0])
  const heroRef = useRef(null)
  const heroRectRef = useRef(null)
  const pointerRef = useRef({ clientX: 0, clientY: 0 })
  const frameRef = useRef(null)

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const updateHeroPointer = () => {
    frameRef.current = null

    const hero = heroRef.current
    const rect = heroRectRef.current
    if (!hero || !rect) return

    const { clientX, clientY } = pointerRef.current
    const x = ((clientX - rect.left) / rect.width) * 100
    const y = ((clientY - rect.top) / rect.height) * 100

    hero.style.setProperty('--hero-x', `${x}%`)
    hero.style.setProperty('--hero-y', `${y}%`)
  }

  const scheduleHeroPointer = event => {
    pointerRef.current = { clientX: event.clientX, clientY: event.clientY }

    if (heroRectRef.current === null) {
      heroRectRef.current = event.currentTarget.getBoundingClientRect()
    }

    if (frameRef.current !== null) return

    frameRef.current = window.requestAnimationFrame(updateHeroPointer)
  }

  const handlePointerEnter = event => {
    heroRectRef.current = event.currentTarget.getBoundingClientRect()
    scheduleHeroPointer(event)
  }

  const handlePointerMove = event => {
    scheduleHeroPointer(event)
  }

  const handlePointerLeave = () => {
    heroRectRef.current = null
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current)
      frameRef.current = null
    }
    if (heroRef.current) {
      heroRef.current.style.setProperty('--hero-x', '62%')
      heroRef.current.style.setProperty('--hero-y', '34%')
    }
  }

  return (
    <section
      id="home"
      className="hero"
      ref={heroRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="grid-lines" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-copy">
          <div className="hero-topline hero-visible">
            <span className="hero-trust-label">Trusted CA Advisory</span>
            <p className="eyebrow">{firm.shortName} | {firm.credential}</p>
          </div>
          <h1 className="hero-title hero-visible">
            Chartered Accountants for <span className="hero-accent">Compliance</span>, Tax &amp; Growth
          </h1>
          <p className="hero-summary hero-visible">{heroSummary}</p>
          <div className="hero-actions hero-visible">
            <a className="button button-primary" href="#contact">Book Consultation</a>
            <a className="button button-secondary" href="#services">Explore Services</a>
          </div>
          <div className="hero-proof-strip" aria-label="Founder and firm details">
            <span>
              <strong>CA. Rajasekhar</strong>
              Managing Partner
            </span>
            <span>
              <strong>Established in {firm.founded}</strong>
              {firm.tagline}
            </span>
          </div>
        </div>
        <figure className="hero-founder hero-visible">
          <img
            src="/images/CA_Rajasekar_hero_layout_image.jpeg"
            alt="CA. Rajasekhar, Managing Partner"
            width="1086"
            height="1448"
            fetchPriority="high"
            decoding="async"
          />
          <figcaption>
            <strong>CA. Rajasekhar</strong>
            <span>Managing Partner</span>
          </figcaption>
        </figure>
        <div className="hero-service-console hero-visible" aria-label="Explore key advisory areas">
          <div className="hero-service-tabs" role="tablist" aria-label="Key services">
            {heroServices.map(service => (
              <button
                type="button"
                role="tab"
                aria-selected={activeService.code === service.code}
                className={activeService.code === service.code ? 'is-active' : ''}
                key={service.code}
                onMouseEnter={() => setActiveService(service)}
                onFocus={() => setActiveService(service)}
                onClick={() => setActiveService(service)}
              >
                <span>{service.code}</span>
                {service.title.split(',')[0]}
              </button>
            ))}
          </div>
          <div className="hero-service-preview" role="tabpanel" key={activeService.code}>
            <strong>{activeService.title}</strong>
            <p>{activeService.text}</p>
            <div>
              {activeService.chips.map(chip => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
