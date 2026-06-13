import { commitments, firm, trustCards } from '../data/profile.js'
import Counter from './Counter.jsx'

export default function WhyChooseUs() {
  return (
    <section className="section split-section">
      <div className="section-heading compact reveal">
        <span className="section-kicker">Why Clients Choose SC&A</span>
        <h2>A single professional window for finance, tax, compliance and project support.</h2>
        <p>SC&A combines audit expertise, taxation knowledge, infrastructure project support, financial advisory and technology-enabled reporting into one integrated professional service platform.</p>
      </div>
      <div className="stats-panel reveal">
        <div><strong><Counter value={firm.founded} /></strong><span>Established</span></div>
        <div><strong><Counter value={8} /></strong><span>Industries in the profile</span></div>
        <div><strong><Counter value={5} /></strong><span>Engagement steps</span></div>
        <div><strong><Counter value={commitments.length} /></strong><span>Client commitments</span></div>
      </div>
      <div className="trust-grid">
        {trustCards.map(([title, text]) => (
          <article className="trust-card reveal" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
