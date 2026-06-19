import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h2 className="logo" style={{ color: '#f4f3ee' }}>🅿️ ParkEase</h2>
          <p>Smarter parking, fewer laps around the block — since 2018.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a onClick={() => navigate('/')}>Home</a>
          <a onClick={() => navigate('/spots')}>Find Spots</a>
          <a onClick={() => navigate('/about')}>About</a>
          <a onClick={() => navigate('/contact')}>Contact</a>
        </div>
        <div>
          <h4>Top Locations</h4>
          <a onClick={() => navigate('/spots')}>Downtown Garage</a>
          <a onClick={() => navigate('/spots')}>Airport Lot</a>
          <a onClick={() => navigate('/spots')}>Riverside Mall</a>
          <a onClick={() => navigate('/spots')}>Stadium Plaza</a>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: '34px' }}>© 2026 ParkEase. All spaces reserved.</p>
    </footer>
  )
}
