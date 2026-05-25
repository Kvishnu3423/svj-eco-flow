import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { serviceDetails, serviceList } from './serviceData'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { id } = useParams()
  const data = serviceDetails[id]

  if (!data) return <Navigate to="/services" replace />

  const others = serviceList.filter(s => s.id !== id).slice(0, 3)

  return (
    <div className="sd-page">

      {/* ── HERO ── */}
      <div className="sd-hero" style={{ backgroundImage: `url(${data.heroImage})` }}>
        <div className="sd-hero-overlay">
          <div className="container">
            <Link to="/services" className="sd-back">
              <i className="fas fa-arrow-left"></i> All Services
            </Link>
            <h1>{data.title}</h1>
            <p className="sd-tagline">{data.tagline}</p>
          </div>
        </div>
      </div>

      <div className="container sd-body">

        {/* ── OVERVIEW ── */}
        <section className="sd-overview">
          <div className="sd-overview-text">
            <span className="sd-tag">Overview</span>
            <h2>What We Offer</h2>
            <p>{data.overview}</p>
          </div>
          <ul className="sd-highlights">
            {data.highlights.map((h, i) => (
              <li key={i}>
                <i className={h.icon}></i>
                <span>{h.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── PROCESS ── */}
        <section className="sd-process-section">
          <span className="sd-tag center">How It Works</span>
          <h2 className="sd-section-title">Our Process</h2>
          <div className="sd-process-grid">
            {data.process.map((p, i) => (
              <div className="sd-process-card" key={i}>
                <div className="sd-step-num">{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MID IMAGE ── */}
        <div className="sd-mid-image">
          <img src={data.midImage} alt={data.midCaption} />
          <p className="sd-mid-caption">
            <i className="fas fa-camera"></i> {data.midCaption}
          </p>
        </div>

        {/* ── APPLICATIONS ── */}
        <section className="sd-applications">
          <span className="sd-tag">Industries</span>
          <h2 className="sd-section-title">Where We Apply It</h2>
          <div className="sd-app-grid">
            {data.applications.map((a, i) => (
              <div className="sd-app-item" key={i}>
                <i className="fas fa-check-double"></i>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="sd-cta">
          <div className="sd-cta-inner">
            <h3>{data.ctaText}</h3>
            <p>Our engineers will assess your site and deliver a detailed proposal within 48 hours.</p>
            <Link to="/contact" className="btn">
              <i className="fas fa-headset"></i> Talk to an Expert
            </Link>
          </div>
        </section>

        {/* ── OTHER SERVICES ── */}
        <section className="sd-others">
          <h3>Explore Other Services</h3>
          <div className="sd-others-grid">
            {others.map(s => (
              <Link to={`/services/${s.id}`} className="sd-other-card" key={s.id}>
                <div
                  className="sd-other-img"
                  style={{ backgroundImage: `url(${s.cardImage})` }}
                />
                <div className="sd-other-body">
                  <i className={s.icon}></i>
                  <h4>{s.title}</h4>
                  <span>Learn more <i className="fas fa-arrow-right"></i></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
