import './App.css'
import './global.css'
import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './Layout'
import Configuration from './pages/Confiugration'
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Layout />} >
            <Route path="/config" element={<Configuration />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
