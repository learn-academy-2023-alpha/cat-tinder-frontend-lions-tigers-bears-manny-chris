import React, { useState, useEffect } from 'react'
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

const App = () => {

  const [beasts, setBeasts] = useState([])

  const createBeast = (beast) => {
    fetch("http://localhost:3000/beasts", {
      // converts the object to a string that can be passed in the request
      body: JSON.stringify(beast),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readBeast())
      .catch((errors) => console.log("Spawning errors:", errors))
  }

  useEffect(() => {
    readBeast()
  }, [])

  const readBeast = () => {
    fetch("http://localhost:3000/beasts")
      .then((response) => response.json())
      .then((payload) => {
        setBeasts(payload)
        console.log({fetch: payload})
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <Header />
      <div className='pageContainer'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beastindex" element={<BeastIndex beasts={beasts} />} />
          <Route path="/beastshow/:id" element={<BeastShow beasts={beasts} />} />
          <Route path="/beastnew" element={<BeastNew createBeast={createBeast} />} />
          <Route path="/beastedit" element={<BeastEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
