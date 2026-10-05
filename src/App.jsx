import { useEffect } from 'react'
import { Aurora, Noise, ScrollProgress } from './components/Decor'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Results from './components/Results'
import Process from './components/Process'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      const top = el.getBoundingClientRect().top + window.scrollY - 68
      window.scrollTo({ top, behavior: 'smooth' })
      history.replaceState(null, '', id)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <Aurora />
      <Noise />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Services />
        <Results />
        <Process />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
