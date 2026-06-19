import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { SPOTS } from './ParkingSpots'

export default function SpotDetail({ onBook }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [nestedPath, setNestedPath] = useState('related')

  const spot = SPOTS.find(p => p.id === parseInt(id))

  if (spot === undefined) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '100vh' }}>
        <p>Parking spot route configuration mismatch.</p>
        <button className="btn" onClick={() => navigate('/spots')}>Return to Spots</button>
      </div>
    )
  }
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '60px', minHeight: '100vh', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
      <a onClick={() => navigate('/spots')} style={{ cursor: 'pointer', color: '#2d9d6f', fontWeight: 'bold', textDecoration: 'none' }}>← Back to Spots</a>

      <div style={{ marginTop: '20px' }}>
        <img src={spot.img} alt={spot.name} style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '12px' }} />
        <h1 style={{ marginTop: '20px' }}>{spot.name} (Spot Code: {spot.code})</h1>
        <p style={{ fontSize: '18px', color: '#555', fontFamily: 'var(--font-body)' }}>
          Secure, monitored parking in the {spot.tag} zone with {spot.spots} open spaces right now. (Rating: ⭐ {spot.rating})
        </p>
        <button className="submit-btn" style={{ maxWidth: '220px', marginTop: '15px' }} onClick={() => onBook(spot)}>Reserve This Spot</button>
      </div>
      {/* Nested Routing Panel Triggers */}
      <div style={{ display: 'flex', gap: '15px', marginTop: '40px', borderBottom: '2px solid #cce8e0', paddingBottom: '10px' }}>
        <a onClick={() => setNestedPath('related')} style={{ cursor: 'pointer', fontWeight: nestedPath === 'related' ? '800' : '400', textDecoration: 'none' }}>🔄 Nearby Spots</a>
        <a onClick={() => setNestedPath('comments')} style={{ cursor: 'pointer', fontWeight: nestedPath === 'comments' ? '800' : '400', textDecoration: 'none' }}>💬 Driver Reviews</a>
      </div>
      {/* Outlet simulator area mapping sub-route components */}
      <div style={{ marginTop: '20px', background: '#f6fffe', padding: '15px', borderRadius: '8px' }}>
        {nestedPath === 'related' && (
          <div>
            <h4>More Parking Nearby</h4>
            <ul style={{ fontFamily: 'var(--font-body)' }}>
              <li>Overflow lot with {spot.spots + 30} additional spaces in {spot.tag}</li>
              <li>Off-peak discounted overnight rates for {spot.tag} zone</li>
            </ul>
          </div>
        )}

        {nestedPath === 'comments' && (
          <div>
            <h4>Driver Reviews (2)</h4>
            <p style={{ fontSize: '13px', margin: '5px 0', fontFamily: 'var(--font-body)' }}><strong>Rahul S.</strong>: Easy in, easy out, well lit at night.</p>
            <p style={{ fontSize: '13px', margin: '5px 0', fontFamily: 'var(--font-body)' }}><strong>Sneha M.</strong>: App confirmation made check-in instant.</p>
          </div>
        )}
      </div>
    </div>
  )
}
