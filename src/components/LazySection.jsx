import { Suspense, useEffect, useRef, useState } from 'react'

export default function LazySection({ children, id, minHeight = 420 }) {
  const ref = useRef(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    let observer

    const reveal = () => {
      setShouldRender(true)
      observer?.disconnect()
    }

    if (id && window.location.hash === `#${id}`) {
      reveal()
    }

    if (typeof IntersectionObserver === 'undefined') {
      reveal()
    } else {
      observer = new IntersectionObserver(
        entries => {
          if (entries.some(entry => entry.isIntersecting)) {
            reveal()
          }
        },
        { rootMargin: '320px 0px 240px 0px', threshold: 0.01 },
      )

      observer.observe(node)
    }

    const renderFromHash = () => {
      if (!id || window.location.hash !== `#${id}`) return
      reveal()
    }

    window.addEventListener('hashchange', renderFromHash)
    return () => {
      observer?.disconnect()
      window.removeEventListener('hashchange', renderFromHash)
    }
  }, [id])

  return (
    <div id={id} className="anchor-section" ref={ref} style={{ minHeight: shouldRender ? undefined : minHeight }}>
      {shouldRender ? <Suspense fallback={<div className="section-loader">Loading section</div>}>{children}</Suspense> : null}
    </div>
  )
}
