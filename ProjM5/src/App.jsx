import { useState } from 'react'
import Header from './components/header'
import "./assents/index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header />
  )
}

export default App
