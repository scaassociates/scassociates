import { about } from '../data/profile.js'

export default function About() {
  return (
    <section className="section about">
      <div className="section-heading reveal">
        <span className="section-kicker">About the Firm</span>
        <h2>Professional, ethical and result-oriented services.</h2>
        <p>{about.intro}</p>
      </div>
      <div className="about-grid">
        <article className="glass-panel reveal"><h3>Vision</h3><p>{about.vision}</p></article>
        <article className="glass-panel reveal"><h3>Mission</h3><p>{about.mission}</p></article>
        <article className="glass-panel reveal"><h3>Client Value</h3><p>{about.value}</p></article>
      </div>
    </section>
  )
}
