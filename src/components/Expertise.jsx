import React from 'react'
import './Expertise.css'

const items = [
  {
    icon: 'fas fa-microscope',
    title: 'Lab & analysis',
    desc: 'In-house water testing, treatability studies, and troubleshooting.',
  },
  {
    icon: 'fas fa-tools',
    title: 'Retrofitting & Upgrades',
    desc: 'Upgrade old STP/RO plants for higher efficiency & low energy.',
  },
  {
    icon: 'fas fa-charging-station',
    title: 'Remote Monitoring',
    desc: 'IoT-enabled O&M for real-time alerts & predictive maintenance.',
  },
]

export default function Expertise() {
  return (
    <section className="expertise-section">
      <div className="container">
        <h2 className="section-title">Expertise in Water &amp; Wastewater Treatment</h2>
        <div className="expertise-grid">
          {items.map((item, i) => (
            <div className="expertise-card" key={i}>
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
