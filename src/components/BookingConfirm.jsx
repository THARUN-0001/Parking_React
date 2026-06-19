import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BookingConfirm({ booking }) {
  const navigate = useNavigate()

  if (!booking) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '100vh' }}>
        <p>No reservation found.</p>
        <button className="btn" onClick={() => navigate('/spots')}>Find Parking</button>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div className="card" style={{ maxWidth: '380px', width: '100%' }}>
        <div className="details" style={{ textAlign: 'center' }}>
          <h3>Reservation Confirmed</h3>
          <p style={{ fontFamily: 'var(--font-body)', marginTop: '10px' }}>{booking.name}</p>
          <div className="spot-code" style={{ position: 'static', display: 'inline-block', marginTop: '12px' }}>{booking.code}</div>
          <p style={{ fontFamily: 'var(--font-body)', marginTop: '14px', color: '#6b7280' }}>Zone: {booking.tag} · ⭐ {booking.rating}</p>
        </div>
        <div className="ticket-perf" />
        <div className="barcode">
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} style={{ height: `${4 + (i % 5) * 2}px` }} />
          ))}
        </div>
        <button className="btn" onClick={() => navigate('/spots')}>Find More Parking</button>
      </div>
    </div>
  )
}
