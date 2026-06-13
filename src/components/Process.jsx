import { commitments, processSteps } from '../data/profile.js'

export default function Process() {
  return (
    <section className="section process">
      <div className="section-heading reveal">
        <span className="section-kicker">Client Engagement Approach</span>
        <h2>Structured support from first review to ongoing monitoring.</h2>
      </div>
      <div className="timeline">
        {processSteps.map(([title, text], index) => (
          <article className="timeline-item reveal" key={title}>
            <span>{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="commitment-grid">
        {commitments.map(([title, text]) => (
          <article className="mini-card reveal" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
