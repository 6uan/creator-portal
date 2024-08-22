import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import DisplayAllArtists from './pages/DisplayAllArtists'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-dvh content-center">
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
