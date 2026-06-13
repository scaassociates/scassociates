import { services } from '../data/profile.js'

export default function Services() {
  return (
    <section className="section services-section">
      <div className="section-heading reveal">
        <span className="section-kicker">Complete Service Portfolio</span>
        <h2>Compliance, control, growth, funding and project execution support.</h2>
      </div>
      <div className="service-grid">
        {services.map(service => (
          <article className="service-card reveal" key={service.title}>
            <span className="service-icon">{service.code}</span>
            <div className="service-topline">
              <h3>{service.title}</h3>
              <span>{service.hover}</span>
            </div>
            <p>{service.text}</p>
            <div className="service-hover-panel" aria-hidden="true">
              {service.chips.map(chip => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
