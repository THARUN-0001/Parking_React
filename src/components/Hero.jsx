import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <span className="hero-eyebrow">REAL-TIME AVAILABILITY · CITYWIDE</span>
      <h1>Find Your Spot,<br />Before You Even Park</h1>
      <p>
        Check live availability at garages and lots near you, lock in a rate,
        and walk straight to a confirmed space — no circling the block.
      </p>
      <div className="hero-actions">
        <button className="btn" onClick={() => navigate('/spots')}>Find Parking</button>
        <button className="outline-btn" onClick={() => navigate('/about')}>Learn More</button>
      </div>
    </section>
  )
}
