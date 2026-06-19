import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <form className="contact-form" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '420px' }}>
        <h3 style={{ marginBottom: '15px', textAlign: 'center' }}>Contact ParkEase</h3>
        {sent ? (
          <div className="success-msg">Thanks — our team will get back to you shortly.</div>
        ) : (
          <>
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
            <label>Message</label>
            <input type="text" placeholder="How can we help?" required />
            <button type="submit" className="submit-btn">Send Message</button>
          </>
        )}
      </form>
    </div>
  )
}
