import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BeastEdit from './components/BeastEdit'
import BeastIndex from './components/BeastIndex'
import BeastNew from './components/BeastNew'
import BeastShow from './components/BeastShow'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'
import { Routes, Route } from "react-router-dom"
import mockBeasts from './mockBeasts'


const App = () => {
  const [beasts, setBeasts] = useState(mockBeasts)

  return (
    <>
      <Header />
      <div className='pageContainer'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beastindex" element={<BeastIndex beasts={beasts} />} />
          <Route path="/beastshow/:id" element={<BeastShow beasts={beasts} />} />
          <Route path="/beastnew" element={<BeastNew />} />
          <Route path="/beastedit" element={<BeastEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
