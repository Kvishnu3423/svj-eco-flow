import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Services from './components/Services'
import ServiceDetail from './pages/ServiceDetail'
import AMC from './components/AMC'
import Contact from './components/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/amc" element={<AMC />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
