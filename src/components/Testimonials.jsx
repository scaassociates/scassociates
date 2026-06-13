export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="section-heading reveal">
        <span className="section-kicker">Client Feedback</span>
        <h2>Verified testimonials only, never placeholder quotes.</h2>
        <p>The current site does not publish public client testimonials because no approved quotes were provided. That keeps the website accurate and avoids presenting invented feedback.</p>
      </div>
      <div className="testimonial-grid reveal">
        <article className="testimonial-card">
          <span>Publication policy</span>
          <strong>Approved quotes only</strong>
          <p>Testimonials should be added only after the client confirms the wording and consent for publication.</p>
        </article>
        <article className="testimonial-card">
          <span>Owner input needed</span>
          <strong>Verified client name and company</strong>
          <p>Please provide the client name, company name, service context and permission status before this section goes live.</p>
        </article>
        <article className="testimonial-card">
          <span>Current status</span>
          <strong>References available on request</strong>
          <p>Until approved feedback is supplied, the safest professional option is to direct prospects to speak with the firm.</p>
        </article>
      </div>
    </section>
  )
}
