import { lazy, useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import LazySection from './components/LazySection.jsx'

const About = lazy(() => import('./components/About.jsx'))
const Services = lazy(() => import('./components/Services.jsx'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs.jsx'))
const Industries = lazy(() => import('./components/Industries.jsx'))
const Process = lazy(() => import('./components/Process.jsx'))
const Testimonials = lazy(() => import('./components/Testimonials.jsx'))
const Team = lazy(() => import('./components/Team.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))
const Footer = lazy(() => import('./components/Footer.jsx'))

function useReveal() {
  useEffect(() => {
    const supportsObserver = typeof IntersectionObserver !== 'undefined'
    const observer = supportsObserver
      ? new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
        )
      : null

    const observe = () => {
      document.querySelectorAll('.reveal:not(.is-observed)').forEach((element, index) => {
        element.classList.add('is-observed')
        element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 55}ms`)
        if (observer) {
          observer.observe(element)
        } else {
          element.classList.add('is-visible')
        }
      })
    }

    observe()
    const mutationObserver = new MutationObserver(observe)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer?.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}

function useStableHashScroll() {
  useEffect(() => {
    const scrollToHash = ({ behavior = 'auto', stabilize = false } = {}) => {
      const id = window.location.hash.replace('#', '')
      if (!id) return
      const scroll = () => document.getElementById(id)?.scrollIntoView({ block: 'start', behavior })

      scroll()
      if (stabilize) {
        window.requestAnimationFrame(scroll)
        window.setTimeout(scroll, 160)
      }
    }

    const handleHashChange = () => scrollToHash({ behavior: 'smooth' })

    scrollToHash({ stabilize: true })
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])
}

export default function App() {
  useReveal()
  useStableHashScroll()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <LazySection id="about"><About /></LazySection>
        <LazySection id="services"><Services /></LazySection>
        <LazySection><WhyChooseUs /></LazySection>
        <LazySection id="industries"><Industries /></LazySection>
        <LazySection><Process /></LazySection>
        <LazySection><Testimonials /></LazySection>
        <LazySection id="team"><Team /></LazySection>
        <LazySection id="contact"><Contact /></LazySection>
      </main>
      <LazySection minHeight={180}><Footer /></LazySection>
    </>
  )
}
