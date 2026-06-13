import { leaders } from '../data/profile.js'

export default function Team() {
  const publishedLeaders = leaders.filter(member => member.published !== false)

  return (
    <section className="section team">
      <div className="section-heading reveal">
        <span className="section-kicker">Leadership Team</span>
        <h2>Experienced professionals across audit, taxation, compliance and advisory.</h2>
      </div>
      <div className="team-grid">
        {publishedLeaders.map(member => (
          <article className="team-card reveal" key={member.name}>
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                width={member.width}
                height={member.height}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="member-photo">Photo Placeholder</div>
            )}
            <h3>{member.name}</h3>
            <strong>{member.role}</strong>
            <p>{member.expertise}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
