import { useEffect, useRef, useState } from 'react'

export default function Counter({ value }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      setCount(value)
      return undefined
    }

    let frame = 0
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return
      const start = performance.now()
      const animate = now => {
        const progress = Math.min((now - start) / 900, 1)
        setCount(Math.round(value * progress))
        if (progress < 1) frame = requestAnimationFrame(animate)
      }
      frame = requestAnimationFrame(animate)
      observer.disconnect()
    })

    observer.observe(node)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [value])

  return <span ref={ref}>{count}</span>
}
