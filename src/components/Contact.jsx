import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Contact.css'

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwGS7DhzsfRaIeWVr_YvADVM_JZ9AU2WuHsvIjY_1CZln0crhharjyOKujbl88IcaYSAg/exec'

const EMPTY_FORM = {
  fullName:    '',
  companyName: '',
  emailId:     '',
  phoneNo:     '',
  city:        '',
  serviceType: 'AMC / Maintenance Contract',
  plantSize:   '',
  urgency:     'Normal',
  message:     '',
}

const infoCards = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Our Office',
    lines: [
      'Shop No: 15, HRT Complex,',
      '1st Floor, Bhavanipuram,',
      'Vijayawada, Andhra Pradesh – 520012',
    ],
  },
  {
    icon: 'fas fa-phone-alt',
    title: 'Call Us',
    lines: [
      { text: '+91 9959992037 (Sales & AMC)',   href: 'tel:+919959992037' },
      { text: '+91 9959992027 (24/7 For Support)', href: 'tel:+919959992027' },
    ],
  },
  {
    icon: 'fas fa-envelope',
    title: 'Email Us',
    lines: [
      { text: 'Info@svjecoflow.com', href: 'mailto:Info@svjecoflow.com' },
      'Response within 4 business hours',
    ],
  },
  {
    icon: 'fas fa-clock',
    title: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Emergency support: 24 / 7'],
  },
]

const faqs = [
  {
    q: 'How quickly can you respond to a breakdown?',
    a: 'Under our Comprehensive AMC plan we guarantee on-site response within 4 hours. Standard plan — 8 hours. Basic plan — 24 hours. Emergency helpline is available 24/7.',
  },
  {
    q: 'Do you cover plants installed by other companies?',
    a: 'Yes. We take over O&M and AMC contracts for STP, RO plants and pump systems regardless of the original installer, subject to a site assessment.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We currently serve clients across Andhra Pradesh, with our primary operations centred in Vijayawada, Guntur, Krishna and surrounding districts.',
  },
  {
    q: 'How long does it take to get an AMC proposal?',
    a: 'After a free site visit we typically deliver a detailed proposal within 48 hours.',
  },
]

export default function Contact() {
  const [form, setForm]       = useState(EMPTY_FORM)
  const [status, setStatus]   = useState('idle')   // idle | submitting | success | error
  const [openFaq, setOpenFaq] = useState(null)
  const { hash } = useLocation()

  useEffect(() => {
    if (hash === '#enquiry-form') {
      const el = document.getElementById('enquiry-form')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, submittedAt: new Date().toLocaleString('en-IN') }),
      })
      setStatus('success')
      setForm(EMPTY_FORM)
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">

      {/* ── HERO ── */}
      <div className="contact-hero">
        <div className="container">
          <span className="contact-tag">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>
            Request a free site assessment, AMC proposal, breakdown support or any
            water treatment enquiry — our team responds within 4 business hours.
          </p>
        </div>
      </div>

      {/* ── INFO CARDS ── */}
      <div className="contact-info-strip">
        <div className="container contact-info-grid">
          {infoCards.map((c, i) => (
            <div className="contact-info-card" key={i}>
              <div className="ci-icon"><i className={c.icon}></i></div>
              <div>
                <h4>{c.title}</h4>
                {c.lines.map((l, j) =>
                  typeof l === 'object'
                    ? <p key={j}><a href={l.href}>{l.text}</a></p>
                    : <p key={j}>{l}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container contact-body">

        {/* ── FORM + SIDEBAR ── */}
        <div className="contact-main-grid">

          {/* FORM */}
          <div className="contact-form-wrap" id="enquiry-form">
            <h2>Send Us an Enquiry</h2>
            <p className="contact-form-sub">
              Fill in the details below and our technical coordinator will get back to you
              with a tailored solution.
            </p>

            {status === 'success' ? (
              <div className="contact-success">
                <div className="success-icon"><i className="fas fa-check-circle"></i></div>
                <h3>Request Received!</h3>
                <p>
                  Thank you, <strong>{form.fullName || 'there'}</strong>! Your enquiry has been saved
                  to our system. Our team will contact you within 4 business hours.
                </p>
                <button className="btn" onClick={() => setStatus('idle')}>
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name <span className="req">*</span></label>
                    <input type="text" name="fullName" placeholder="Your full name"
                      value={form.fullName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Company / Organisation</label>
                    <input type="text" name="companyName" placeholder="Company name (optional)"
                      value={form.companyName} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address <span className="req">*</span></label>
                    <input type="email" name="emailId" placeholder="email@example.com"
                      value={form.emailId} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number <span className="req">*</span></label>
                    <input type="tel" name="phoneNo" placeholder="+91 XXXXX XXXXX"
                      value={form.phoneNo} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>City / Location</label>
                    <input type="text" name="city" placeholder="e.g. Vijayawada"
                      value={form.city} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Plant Capacity (if known)</label>
                    <input type="text" name="plantSize" placeholder="e.g. 50 KLD, 100 m³/hr"
                      value={form.plantSize} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Service Required <span className="req">*</span></label>
                    <select name="serviceType" value={form.serviceType} onChange={handleChange}>
                      <option>AMC / Maintenance Contract</option>
                      <option>STP Installation or Repair</option>
                      <option>RO Plant Service</option>
                      <option>Pump Repair / Maintenance</option>
                      <option>ETP Installation or Repair</option>
                      <option>New Plant Installation</option>
                      <option>Lab Testing &amp; Water Analysis</option>
                      <option>General O&amp;M Support</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Urgency</label>
                    <select name="urgency" value={form.urgency} onChange={handleChange}>
                      <option value="Normal">Normal — within a few days</option>
                      <option value="Urgent">Urgent — within 24 hours</option>
                      <option value="Emergency">Emergency — plant is down</option>
                    </select>
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Message / Requirements</label>
                  <textarea rows="4" name="message"
                    placeholder="Describe your system, the issue you're facing, or what you need..."
                    value={form.message} onChange={handleChange} />
                </div>

                {status === 'error' && (
                  <p className="form-error">
                    <i className="fas fa-exclamation-circle"></i> Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button type="submit" className="btn submit-btn" disabled={status === 'submitting'}>
                  {status === 'submitting'
                    ? <><i className="fas fa-spinner fa-spin"></i> Submitting...</>
                    : <><i className="fas fa-paper-plane"></i> Submit Enquiry</>}
                </button>
                <p className="form-note">
                  <i className="fas fa-lock"></i> Your details are stored securely and never shared with third parties.
                </p>
              </form>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="contact-sidebar">

            <div className="sidebar-cta emergency">
              <i className="fas fa-exclamation-triangle"></i>
              <div>
                <h4>Plant Emergency?</h4>
                <p>Call our 24/7 breakdown line immediately</p>
                <a href="tel:+919959992027" className="btn">
                  <i className="fas fa-phone-alt"></i> +91 9959992027
                </a>
              </div>
            </div>

            <div className="sidebar-cta whatsapp">
              <i className="fab fa-whatsapp"></i>
              <div>
                <h4>WhatsApp Us</h4>
                <p>Quick queries answered on WhatsApp</p>
                <a href="https://wa.me/919959992037" target="_blank" rel="noreferrer" className="btn whatsapp-btn">
                  <i className="fab fa-whatsapp"></i> Open WhatsApp
                </a>
              </div>
            </div>

            <div className="sidebar-map">
              <h4><i className="fas fa-map-marker-alt"></i> Our Location</h4>
              <div className="map-embed">
                <iframe
                  title="SVJ Eco Flow Systems Location"
                  src="https://maps.google.com/maps?q=HRT+Complex+Bhavanipuram+Vijayawada+Andhra+Pradesh+520012&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="map-address">
                Dr.No:76-1-FF15, HRT Complex, 1st Floor,<br />
                Bhavanipuram, Vijayawada – 520012
              </p>
            </div>

          </div>
        </div>

        {/* ── FAQ ── */}
        <section className="contact-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === i ? 'up' : 'down'}`}></i>
                </button>
                {openFaq === i && <div className="faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
