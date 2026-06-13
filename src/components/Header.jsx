import { useEffect, useRef, useState } from 'react'
import { firm } from '../data/profile.js'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    const closeOutside = event => {
      if (!headerRef.current?.contains(event.target)) setIsMenuOpen(false)
    }

    const desktopQuery = window.matchMedia('(min-width: 761px)')
    const closeOnDesktop = event => {
      if (event.matches) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    desktopQuery.addEventListener('change', closeOnDesktop)

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      desktopQuery.removeEventListener('change', closeOnDesktop)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header ref={headerRef} className={`site-header${isMenuOpen ? ' menu-open' : ''}`}>
      <a className="brand" href="#home" aria-label={`${firm.name} home`} onClick={closeMenu}>
        <span className="brand-mark">{firm.shortName}</span>
        <span className="brand-copy">
          <strong>{firm.name}</strong>
          <small>{firm.credential}</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsMenuOpen(current => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <nav
        id="primary-navigation"
        className="primary-nav"
        aria-label="Primary navigation"
        data-open={isMenuOpen}
      >
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#industries" onClick={closeMenu}>Industries</a>
        <a href="#team" onClick={closeMenu}>Team</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  )
}
