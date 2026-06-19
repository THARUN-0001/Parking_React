import React, { useState } from 'react'

export default function Dashboard({ user }) {
  const [nestedPath, setNestedPath] = useState('profile')

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '40px', minHeight: '100vh', maxWidth: '900px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
      <h2>🅿️ Secure Driver Dashboard</h2>
      <p style={{ fontFamily: 'var(--font-body)', marginTop: '8px' }}>Welcome back, {user?.username}!</p>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {/* Dynamic Nested Sidebar Tabs */}
        <div style={{ width: '200px', background: '#eceae3', padding: '15px', borderRadius: '10px', height: 'fit-content' }}>
          <a onClick={() => setNestedPath('profile')} style={{ display: 'block', marginBottom: '10px', cursor: 'pointer', fontWeight: nestedPath === 'profile' ? '800' : '400', textDecoration: 'none' }}>👤 My Profile</a>
          <a onClick={() => setNestedPath('settings')} style={{ display: 'block', cursor: 'pointer', fontWeight: nestedPath === 'settings' ? '800' : '400', textDecoration: 'none' }}>⚙️ Vehicle &amp; Alerts</a>
        </div>
        {/* Nested Routing Content Subpanel */}
        <div style={{ flex: 1, padding: '20px', background: '#fff', border: '1px solid #cce8e0', borderRadius: '10px' }}>
          {nestedPath === 'profile' && (
            <div>
              <h3>Driver Account Data</h3>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-body)' }}><strong>Username Identifier:</strong> {user?.username}</p>
              <p style={{ fontFamily: 'var(--font-body)' }}><strong>Account Tier:</strong> Premium Commuter Pass</p>
            </div>
          )}

          {nestedPath === 'settings' && (
            <div>
              <h3>Vehicle &amp; Alert Configurations</h3>
              <p style={{ marginTop: '10px', fontFamily: 'var(--font-body)' }}>
                <label><input type="checkbox" defaultChecked /> Enable instant booking confirmation emails</label>
              </p>
              <p style={{ fontFamily: 'var(--font-body)' }}>
                <label><input type="checkbox" defaultChecked /> SMS alerts when my session is about to expire</label>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
