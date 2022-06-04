import { useState } from 'react'
import Header from './components/header'
import "./assents/index.css"
import api from "./utils/axios"
function App() {
  const [count, setCount] = useState(0)
  console.log(api);
  return (
    <Header />
  )
}

export default App
