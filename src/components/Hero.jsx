import { useState } from 'react'
import { firm, heroSummary, services } from '../data/profile.js'

const heroServices = services.slice(0, 4)

export default function Hero() {
  const [activeService, setActiveService] = useState(heroServices[0])

  return (
    <section id="home" className="hero">
      <div className="grid-lines" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-copy">
          <div className="hero-topline">
            <span className="hero-trust-label">Trusted CA Advisory</span>
            <p className="eyebrow">{firm.shortName} | {firm.credential}</p>
          </div>
          <h1 className="hero-title">
            Chartered Accountants for <span className="hero-accent">Compliance</span>, Tax &amp; Growth
          </h1>
          <p className="hero-summary">{heroSummary}</p>
          <div className="hero-actions">
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
        <figure className="hero-founder">
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
        <div className="hero-service-console" aria-label="Explore key advisory areas">
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
