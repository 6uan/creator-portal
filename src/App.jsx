import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className="w-screen h-dvh border-2 content-center">
        <div className="w-8/12 grid grid-cols-3 gap-5 mx-auto border-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default App
