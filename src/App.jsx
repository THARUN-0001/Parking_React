import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import ParkingSpots from './components/ParkingSpots'
import SpotDetail from './components/SpotDetail'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import BookingConfirm from './components/BookingConfirm'

export default function App() {
  const [user, setUser] = useState(null)
  const [booking, setBooking] = useState(null)
  const navigate = useNavigate()

  const handleBook = (spot) => {
    setBooking(spot)
    navigate('/confirm')
  }

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home onBook={handleBook} />} />
        <Route path="/spots" element={<ParkingSpots onBook={handleBook} />} />
        <Route path="/spots/detail/:id" element={<SpotDetail onBook={handleBook} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/confirm" element={<BookingConfirm booking={booking} />} />
      </Routes>
      <Footer />
    </>
  )
}
