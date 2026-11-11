import { useState } from 'react'
import './App.css'
import { Router } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'sonner'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CoolectionPage from './pages/CoolectionPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collection/:collection" element={<CoolectionPage />} />
        </Route>
        <Route>
          /* admin layout */
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
