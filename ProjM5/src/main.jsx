import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Login from './pages/Login'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<App/>}/> 
      <Route path='/Login' element={<Login/>}/> 

    </Routes>
  </BrowserRouter>
)
