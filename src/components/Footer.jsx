import { firm, services } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{firm.name}</strong>
        <p>{firm.credential}</p>
      </div>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#industries">Industries</a>
        <a href="#contact">Contact</a>
      </div>
      <p>{services.slice(0, 4).map(service => service.title).join(' | ')}</p>
      <p>{firm.phone} | {firm.email}</p>
      <small>Copyright {new Date().getFullYear()} {firm.name}. All rights reserved.</small>
    </footer>
  )
}
