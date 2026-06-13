import { useState } from 'react'
import { firm, services } from '../data/profile.js'

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialFormState)
  const [submitStatus, setSubmitStatus] = useState('')

  const whatsappNumber = firm.phone.replace(/\D/g, '')
  const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello ${firm.shortName}, I would like to enquire about ${form.service || 'your services'}.`,
  )}`
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(firm.address)}&output=embed`

  const handleChange = event => {
    const { name, value } = event.target
    setForm(current => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    const subject = `Website inquiry${form.service ? ` - ${form.service}` : ''}`
    const body = [
      'SC&A | Sekhar Chandra & Associates',
      'Chartered Accountants',
      '',
      'A new enquiry has been submitted from the SC&A website.',
      '',
      '============================================',
      'ENQUIRY DETAILS',
      '============================================',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service required: ${form.service}`,
      '',
      '============================================',
      'MESSAGE',
      '============================================',
      form.message,
      '',
      '============================================',
      'NEXT STEP',
      '============================================',
      'Please review this enquiry and reply with the next steps, required documents, and a suitable time for a call.',
      '',
      'Sent from the SC&A website contact form.',
    ].join('\n')

    const composeUrl = new URL('https://mail.google.com/mail/')
    composeUrl.searchParams.set('view', 'cm')
    composeUrl.searchParams.set('fs', '1')
    composeUrl.searchParams.set('to', firm.email)
    composeUrl.searchParams.set('su', subject)
    composeUrl.searchParams.set('body', body)

    const anchor = document.createElement('a')
    anchor.href = composeUrl.toString()
    anchor.target = '_blank'
    anchor.rel = 'noopener noreferrer'
    anchor.style.display = 'none'
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()

    setSubmitStatus('A polished Gmail draft opened in a new tab. Please review and click Send.')
  }

  return (
    <section className="section contact">
      <div className="contact-panel reveal">
        <div>
          <span className="section-kicker">Contact</span>
          <h2>Let us support your business growth.</h2>
          <p>{firm.contactLine}</p>
          <address>{firm.address}</address>
          <p><a href={`tel:${firm.phone.replace(/\s/g, '')}`}>{firm.phone}</a></p>
          <p><a href={`mailto:${firm.email}`}>{firm.email}</a></p>
          <div className="map-shell">
            <iframe
              className="map-frame"
              title={`${firm.name} office location`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              className="map-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(firm.address)}`}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
        <form className="inquiry-form" aria-label="Inquiry form" onSubmit={handleSubmit}>
          <input aria-label="Name" name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} autoComplete="name" required />
          <input aria-label="Email" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} autoComplete="email" required />
          <input aria-label="Phone" name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={handleChange} autoComplete="tel" required />
          <select aria-label="Service required" name="service" value={form.service} onChange={handleChange} required>
            <option value="" disabled>Service Required</option>
            {services.map(service => <option key={service.title}>{service.title}</option>)}
          </select>
          <textarea aria-label="Message" name="message" placeholder="Message" rows="5" value={form.message} onChange={handleChange} required />
          <div className="form-buttons">
            <button type="submit">Send Inquiry</button>
            <a href={`tel:${firm.phone.replace(/\s/g, '')}`}>Call Now</a>
            <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          {submitStatus ? <p className="form-status" aria-live="polite">{submitStatus}</p> : null}
        </form>
      </div>
    </section>
  )
}
