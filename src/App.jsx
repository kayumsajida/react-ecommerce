import { useState } from 'react'
import './App.css'
import { Router } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
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
