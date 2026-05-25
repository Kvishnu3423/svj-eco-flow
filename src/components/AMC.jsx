import React from 'react'
import { Link } from 'react-router-dom'
import './AMC.css'

const plans = [
  {
    name: 'Basic',
    icon: 'fas fa-shield-alt',
    price: 'Custom Pricing',
    tag: null,
    features: [
      'Quarterly preventive maintenance visits',
      'Basic performance inspection report',
      'Telephone & email support (business hours)',
      'Breakdown response within 24 hours',
      'Chemical dosing recommendation',
      'Annual performance audit',
    ],
    excluded: ['Spare parts supply', 'Emergency weekend support', 'Remote SCADA monitoring'],
  },
  {
    name: 'Standard',
    icon: 'fas fa-shield-halved',
    price: 'Custom Pricing',
    tag: 'Most Popular',
    features: [
      'Monthly preventive maintenance visits',
      'Detailed monthly performance reports',
      'Priority support — 24/7 helpline',
      'Breakdown response within 8 hours',
      'Chemical dosing & adjustment',
      'Minor spare parts included (filters, seals)',
      'Online parameter monitoring setup',
      'Bi-annual performance audit',
    ],
    excluded: ['Major equipment replacement', 'Remote SCADA monitoring'],
  },
  {
    name: 'Comprehensive',
    icon: 'fas fa-medal',
    price: 'Custom Pricing',
    tag: 'Best Value',
    features: [
      'Fortnightly preventive maintenance visits',
      'Real-time SCADA / remote monitoring',
      'Dedicated site engineer (as needed)',
      'Emergency response within 4 hours',
      'All spare parts covered (membranes, pumps, seals)',
      'Chemical dosing, adjustment & supply',
      'Unlimited breakdown call-outs',
      'Quarterly compliance reports for CPCB/SPCB',
      'Annual plant upgrade recommendations',
      'Operator training & refresher sessions',
    ],
    excluded: [],
  },
]

const coverage = [
  { icon: 'fas fa-industry',       title: 'STP Plants',         desc: 'MBR, MBBR, SBR — biological systems, blowers, clarifiers' },
  { icon: 'fas fa-fill-drip',      title: 'RO Systems',         desc: 'Membranes, high-pressure pumps, CIP skids, pre-treatment' },
  { icon: 'fas fa-faucet-drip',    title: 'Pump Systems',       desc: 'Submersible, centrifugal, dosing pumps & VFD panels' },
  { icon: 'fas fa-flask',          title: 'ETP Plants',         desc: 'Chemical dosing, aeration, clarifiers & filter presses' },
  { icon: 'fas fa-bolt',           title: 'Electrical & Panels', desc: 'MCC panels, control wiring, sensors & instruments' },
  { icon: 'fas fa-microscope',     title: 'Lab & Testing',      desc: 'Routine water quality testing & compliance sampling' },
]

const process = [
  { step: '01', icon: 'fas fa-file-signature', title: 'Site Assessment',     desc: 'Our engineer visits your plant to assess installed equipment, current condition and your operational requirements.' },
  { step: '02', icon: 'fas fa-file-invoice',   title: 'Custom AMC Proposal', desc: 'We prepare a tailored AMC plan with scope, visit schedule, response SLAs and transparent pricing.' },
  { step: '03', icon: 'fas fa-handshake',       title: 'Contract Sign-off',   desc: 'Proposal agreed, contract signed and your plant is enrolled in our service management system.' },
  { step: '04', icon: 'fas fa-calendar-check',  title: 'Scheduled Visits',    desc: 'Planned maintenance visits carried out as per contract — inspection, cleaning, lubrication, chemical checks.' },
  { step: '05', icon: 'fas fa-headset',         title: 'Emergency Support',   desc: 'Any breakdown triggers an immediate response within your contracted SLA — 4, 8 or 24 hours.' },
  { step: '06', icon: 'fas fa-chart-line',      title: 'Reporting & Review',  desc: 'Monthly / quarterly performance reports with KPIs, fault log, recommendations and compliance status.' },
]

const slaItems = [
  { time: '< 1 hr',  label: 'Remote diagnosis via phone / SCADA', icon: 'fas fa-phone-alt' },
  { time: '4 hrs',   label: 'On-site response (Comprehensive plan)', icon: 'fas fa-truck-fast' },
  { time: '8 hrs',   label: 'On-site response (Standard plan)', icon: 'fas fa-clock' },
  { time: '24 hrs',  label: 'On-site response (Basic plan)', icon: 'fas fa-calendar-day' },
  { time: '48 hrs',  label: 'Spare parts delivery (stocked items)', icon: 'fas fa-boxes-stacked' },
]

const equipment = [
  'Aeration blowers & diffusers', 'RO membranes & pressure vessels',
  'Submersible & centrifugal pumps', 'Dosing pumps & chemical skids',
  'UV disinfection systems', 'Filter media (sand, carbon, cartridge)',
  'VFD drives & motor control centres', 'Control panels & PLCs',
  'Flow meters & pressure gauges', 'Clarifier mechanism & scrapers',
  'MBBR / MBR media & modules', 'Hydro-pneumatic pressure sets',
]

export default function AMC() {
  return (
    <div className="amc-page">

      {/* ── HERO ── */}
      <div className="amc-hero" style={{ backgroundImage: 'url(/images/11.jpg)' }}>
        <div className="amc-hero-overlay">
          <div className="container">
            <span className="amc-hero-tag">Annual Maintenance Contracts</span>
            <h1>AMC &amp; Maintenance Services</h1>
            <p>
              Keep your STP, RO plant and pump systems running at peak efficiency —
              with planned maintenance, emergency support and compliance reporting all
              covered under one transparent contract.
            </p>
            <div className="amc-hero-stats">
              <div><strong>4-Hr</strong><span>Emergency SLA</span></div>
              <div><strong>24/7</strong><span>Support Helpline</span></div>
              <div><strong>100%</strong><span>Compliance Focus</span></div>
              <div><strong>All</strong><span>Plant Types Covered</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container amc-body">

        {/* ── WHAT IS AMC ── */}
        <section className="amc-intro">
          <div className="amc-intro-text">
            <span className="amc-tag">What is AMC?</span>
            <h2>Total Peace of Mind for Your Water Infrastructure</h2>
            <p>
              An Annual Maintenance Contract (AMC) with SVJ Eco Flow Systems is a structured
              service agreement that keeps your water and wastewater treatment plants operating
              reliably, efficiently and in full regulatory compliance — without the unpredictability
              of reactive repairs.
            </p>
            <p>
              Our certified engineers conduct scheduled preventive maintenance visits, monitor
              plant performance, replace consumable parts and respond to breakdowns within agreed
              SLA windows — so you never have to worry about unexpected downtime or compliance failures.
            </p>
            <div className="amc-intro-badges">
              <span><i className="fas fa-check-circle"></i> Preventive maintenance</span>
              <span><i className="fas fa-check-circle"></i> Breakdown support</span>
              <span><i className="fas fa-check-circle"></i> Compliance reporting</span>
              <span><i className="fas fa-check-circle"></i> Spares management</span>
            </div>
          </div>
          <div className="amc-intro-img">
            <img src="/images/12.jpg" alt="Water treatment plant under maintenance contract" />
          </div>
        </section>

        {/* ── PLANS ── */}
        <section className="amc-plans-section">
          <span className="amc-tag center">Choose Your Plan</span>
          <h2 className="amc-section-title">AMC Plans</h2>
          <p className="amc-section-sub">
            All plans are customised to your plant type and capacity. Pricing is provided after a free site assessment.
          </p>
          <div className="amc-plans-grid">
            {plans.map((plan, i) => (
              <div className={`amc-plan-card ${plan.tag ? 'featured' : ''}`} key={i}>
                {plan.tag && <div className="plan-featured-tag">{plan.tag}</div>}
                <div className="plan-icon"><i className={plan.icon}></i></div>
                <h3>{plan.name}</h3>
                <p className="plan-price">{plan.price}</p>
                <ul className="plan-features">
                  {plan.features.map((f, j) => (
                    <li key={j}><i className="fas fa-check"></i> {f}</li>
                  ))}
                  {plan.excluded.map((f, j) => (
                    <li key={`x-${j}`} className="excluded"><i className="fas fa-times"></i> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="plan-cta">Get a Quote</Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── MID IMAGE ── */}
        <div className="amc-mid-image">
          <img src="/images/2.png" alt="Aerial view of water treatment plant under AMC" />
          <p className="amc-mid-caption">
            <i className="fas fa-camera"></i> Aerial view of a multi-tank STP facility maintained under our Comprehensive AMC plan.
          </p>
        </div>

        {/* ── WHAT WE COVER ── */}
        <section className="amc-coverage">
          <span className="amc-tag center">Scope of Work</span>
          <h2 className="amc-section-title">Equipment &amp; Systems We Maintain</h2>
          <div className="amc-coverage-grid">
            {coverage.map((c, i) => (
              <div className="amc-cover-card" key={i}>
                <div className="amc-cover-icon"><i className={c.icon}></i></div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="amc-process">
          <span className="amc-tag center">How It Works</span>
          <h2 className="amc-section-title">Our AMC Process</h2>
          <div className="amc-process-grid">
            {process.map((p, i) => (
              <div className="amc-process-card" key={i}>
                <div className="amc-process-icon"><i className={p.icon}></i></div>
                <div className="amc-step-num">{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SLA SECTION ── */}
        <section className="amc-sla">
          <div className="amc-sla-inner">
            <div className="amc-sla-text">
              <span className="amc-tag">Response Guarantee</span>
              <h2>Our Service Level Commitments</h2>
              <p>
                When your plant has a problem, every hour of downtime has a cost. Our SLA guarantees
                set the maximum time between your call and our engineer arriving on site.
              </p>
              <ul className="amc-sla-list">
                {slaItems.map((s, i) => (
                  <li key={i}>
                    <div className="sla-time">{s.time}</div>
                    <div className="sla-icon"><i className={s.icon}></i></div>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="amc-sla-img">
              <img src="/images/1.jpg" alt="SVJ engineer responding to plant breakdown" />
            </div>
          </div>
        </section>

        {/* ── EQUIPMENT LIST ── */}
        <section className="amc-equip">
          <span className="amc-tag center">Parts &amp; Equipment</span>
          <h2 className="amc-section-title">Spare Parts &amp; Consumables We Handle</h2>
          <div className="amc-equip-grid">
            {equipment.map((e, i) => (
              <div className="amc-equip-item" key={i}>
                <i className="fas fa-wrench"></i>
                <span>{e}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="amc-cta-section">
          <div className="amc-cta-inner">
            <div className="amc-cta-text">
              <h2>Ready to Protect Your Plant?</h2>
              <p>
                Get a free site assessment and a customised AMC proposal within 48 hours.
                No obligation — just expert advice.
              </p>
            </div>
            <div className="amc-cta-actions">
              <Link to="/contact" className="btn">
                <i className="fas fa-file-signature"></i> Request AMC Quote
              </Link>
              <a href="tel:+919959992037" className="btn btn-outline">
                <i className="fas fa-phone-alt"></i> Call Us Now
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
