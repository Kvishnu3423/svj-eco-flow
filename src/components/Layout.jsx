import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import BackToTop from './BackToTop'

const REVEAL_SELECTORS = [
  'section',
  '.about-grid',
  '.why-grid',
  '.home-cta-section',
  '.sd-overview',
  '.sd-mid-image',
  '.sd-cta',
  '.sd-applications',
  '.sd-others',
  '.amc-intro',
  '.amc-mid-image',
  '.amc-sla',
  '.amc-cta-section',
  '.contact-form-wrap',
  '.contact-sidebar',
  '.contact-faq',
].join(', ')

const GROUP_SELECTORS = [
  '.home-services-grid',
  '.gallery-grid',
  '.services-card-grid',
  '.sd-process-grid',
  '.sd-others-grid',
  '.amc-plans-grid',
  '.amc-coverage-grid',
  '.amc-process-grid',
  '.amc-equip-grid',
  '.contact-info-grid',
  '.expertise-grid',
  '.pillar-grid',
  '.faq-list',
  '.why-list',
  '.about-badges',
].join(', ')

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
      )

      // Single elements
      document.querySelectorAll(REVEAL_SELECTORS).forEach((el) => {
        if (!el.classList.contains('revealed')) {
          el.classList.add('reveal')
          observer.observe(el)
        }
      })

      // Staggered groups
      document.querySelectorAll(GROUP_SELECTORS).forEach((el) => {
        if (!el.classList.contains('revealed')) {
          el.classList.add('reveal-group')
          observer.observe(el)
        }
      })

      return () => observer.disconnect()
    }, 120)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  )
}
