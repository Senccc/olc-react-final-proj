import React from 'react'
import { Routes, Route } from 'react-router-dom'
import First from './pages/FirstPage'
import Main from './pages/MainPage'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/folders" element={<Main />} />
    </Routes>
  )
}

export default AppRoutes
