import React from 'react'
import { Link } from 'react-router-dom'
import { serviceList } from '../pages/serviceData'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="services-page">
      {/* ── PAGE HEADER ── */}
      <div className="services-header">
        <div className="container">
          <span className="svc-tag">What We Do</span>
          <h1>Our Services</h1>
          <p>
            End-to-end water and wastewater treatment solutions — design, supply, installation,
            commissioning and long-term maintenance under one roof.
          </p>
        </div>
      </div>

      {/* ── CARDS ── */}
      <div className="container services-grid-wrap">
        <div className="services-card-grid">
          {serviceList.map((s) => (
            <div className="svc-card" key={s.id}>
              <div
                className="svc-card-img"
                style={{ backgroundImage: `url(${s.cardImage})` }}
              >
                <div className="svc-card-img-overlay" />
                <div className="svc-icon-badge">
                  <i className={s.icon}></i>
                </div>
              </div>
              <div className="svc-card-body">
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <div className="svc-tags">
                  {s.tags.map((t, i) => <span key={i}>{t}</span>)}
                </div>
                <Link to={s.externalRoute || `/services/${s.id}`} className="svc-detail-link">
                  View Full Details <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="services-cta-bar">
        <div className="container services-cta-inner">
          <div>
            <h3>Not sure which solution fits your needs?</h3>
            <p>Our engineers will assess your site and recommend the right system.</p>
          </div>
          <Link to="/contact" className="btn">
            <i className="fas fa-headset"></i> Get Expert Advice
          </Link>
        </div>
      </div>
    </section>
  )
}
