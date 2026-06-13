import { firm } from '../data/profile.js'

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${firm.name} home`}>
        <span className="brand-mark">{firm.shortName}</span>
        <span>
          <strong>{firm.name}</strong>
          <small>{firm.credential}</small>
        </span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#industries">Industries</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
