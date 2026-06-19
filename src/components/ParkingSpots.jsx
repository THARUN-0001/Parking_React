import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const SPOTS = [
  { id: 0, name: 'Downtown Civic Garage', tag: 'Downtown', rating: 4.9, code: 'D-12', spots: 24, car: 60, bike: 25, img: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=500&q=75' },
  { id: 1, name: 'Skyline Plaza Deck', tag: 'Downtown', rating: 4.7, code: 'D-07', spots: 12, car: 75, bike: 30, img: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=500&q=75' },
  { id: 2, name: 'Terminal 2 Short-Stay', tag: 'Airport', rating: 4.8, code: 'A-03', spots: 40, car: 110, bike: 45, img: 'https://images.unsplash.com/photo-1530296969059-1b3c1d3d3c3e?w=500&q=75' },
  { id: 3, name: 'Airport Long-Term Lot C', tag: 'Airport', rating: 4.6, code: 'A-19', spots: 86, car: 50, bike: 20, img: 'https://images.unsplash.com/photo-1568605117036-731ff663ba93?w=500&q=75' },
  { id: 4, name: 'Riverside Mall Garage', tag: 'Mall', rating: 4.8, code: 'M-05', spots: 60, car: 40, bike: 18, img: 'https://images.unsplash.com/photo-1597328829471-6b9e2dba8e54?w=500&q=75' },
  { id: 5, name: 'Stadium North Lot', tag: 'Stadium', rating: 4.9, code: 'S-01', spots: 200, car: 95, bike: 35, img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=75' },
  { id: 6, name: 'General Hospital Visitor Deck', tag: 'Hospital', rating: 4.5, code: 'H-08', spots: 30, car: 35, bike: 15, img: 'https://images.unsplash.com/photo-1545179605-1296651e9d43?w=500&q=75' },
  { id: 7, name: 'Old Town Surface Lot', tag: 'Downtown', rating: 4.4, code: 'D-22', spots: 18, car: 45, bike: 20, img: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=500&q=75' },
]

const TABS = ['All', 'Downtown', 'Airport', 'Mall', 'Stadium', 'Hospital']

export default function ParkingSpots({ onBook }) {
  const [tab, setTab] = useState('All')
  const [saved, setSaved] = useState([])
  const [toastMessage, setToastMessage] = useState('')
  const navigate = useNavigate()

  const filtered = tab === 'All' ? SPOTS : SPOTS.filter(p => p.tag === tab)

  const toggleSaved = (name) => {
    if (saved.includes(name)) {
      setSaved(saved.filter(n => n !== name))
      setToastMessage(`Removed ${name} from Saved Spots`)
    } else {
      setSaved([...saved, name])
      setToastMessage(`Saved ${name} for later! 🅿️`)
    }
  }

  useEffect(() => {
    if (!toastMessage) return
    const timer = setTimeout(() => setToastMessage(''), 3000)
    return () => clearTimeout(timer)
  }, [toastMessage])

  return (
    <section id="spots" style={{ paddingTop: '80px', minHeight: '100vh' }}>
      {toastMessage && <div className="success-msg" style={{ position: 'fixed', top: '80px', right: '20px', zIndex: 1000, boxShadow: '0 4px 15px rgba(0,0,0,0.2)', marginTop: 0 }}>{toastMessage}</div>}

      <div className="section-head">
        <h2>Available Parking</h2>
        <p>Pick a zone and reserve a confirmed space</p>
      </div>
      <div className="tab-bar">
        {TABS.map(t => (
          <button key={t} className={`tab-btn ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>
      <div className="container">
        {filtered.map((p) => {
          const isSaved = saved.includes(p.name)
          return (
            <div className="card" key={p.id}>
              <div className="card-img-wrap">
                <img className="pimg" src={p.img} alt={p.name} loading="lazy" style={{ cursor: 'pointer' }} onClick={() => navigate(`/spots/detail/${p.id}`)} />
                <button className="wish-btn" onClick={() => toggleSaved(p.name)}>
                  {isSaved ? '❤️' : '🤍'}
                </button>
                <span className="card-tag">{p.tag}</span>
                <span className="spot-code">{p.code}</span>
              </div>
              <div className="details">
                <h2 style={{ fontSize: '18px', cursor: 'pointer' }} onClick={() => navigate(`/spots/detail/${p.id}`)}>{p.name}</h2>
                <div className="card-meta">
                  <span>⭐ {p.rating}</span>
                  <span>🅿️ {p.spots} Open</span>
                </div>
                <div className="price">
                  <div>
                    <p className="label">Per Hour</p>
                    <p>₹{p.car} <span>(Car)</span></p>
                  </div>
                </div>
              </div>
              <div className="ticket-perf" />
              <div className="barcode">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} style={{ height: `${4 + (i % 5) * 2}px` }} />
                ))}
              </div>
              <button className="btn" onClick={() => onBook(p)}>Reserve Now</button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
