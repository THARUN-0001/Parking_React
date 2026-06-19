import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ onLogin }) {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    onLogin({ username: name })
    navigate('/dashboard')
  }

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form className="contact-form" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '360px' }}>
        <h3 style={{ marginBottom: '15px', textAlign: 'center' }}>Sign In to ParkEase</h3>
        <label>Demo Driver Name</label>
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
        <button type="submit" className="submit-btn">Login to Dashboard</button>
      </form>
    </div>
  )
}
