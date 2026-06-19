import React from 'react'

export default function About() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '700px', margin: '0 auto', padding: '0 20px', minHeight: '100vh' }}>
      <h2 style={{ paddingTop: '100px' }}>About ParkEase</h2>
      <p style={{ fontFamily: 'var(--font-body)', marginTop: '16px', lineHeight: 1.7 }}>
        ParkEase connects drivers with real-time availability at garages and lots
        across the city. Every listing reflects live open spaces, so the spot you
        reserve is the spot waiting for you — no repeat laps around the block.
      </p>
      <p style={{ fontFamily: 'var(--font-body)', marginTop: '16px', lineHeight: 1.7 }}>
        We started in 2018 with a single downtown garage and a stopwatch. Today
        we cover downtown decks, airport lots, malls, stadiums, and hospital
        visitor parking.
      </p>
    </div>
  )
}
