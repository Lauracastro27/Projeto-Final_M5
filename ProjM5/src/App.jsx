import { useState } from 'react'
import Header from './components/Header/header'
import Home from './components/Home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    </>
  )
}

export default App
