import { industries } from '../data/profile.js'

export default function Industries() {
  return (
    <section className="section industries">
      <div className="section-heading reveal">
        <span className="section-kicker">Industries Served</span>
        <h2>Sector-relevant finance, taxation, compliance and advisory support.</h2>
      </div>
      <div className="industry-track reveal">
        {[...industries, ...industries].map((industry, index) => (
          <span key={`${industry}-${index}`}>{industry}</span>
        ))}
      </div>
    </section>
  )
}
