import React from 'react'
import Hero from './Hero'
import ParkingSpots from './ParkingSpots'

export default function Home({ onBook }) {
  return (
    <div>
      <Hero />
      <ParkingSpots onBook={onBook} />
    </div>
  )
}
