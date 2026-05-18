import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import Contect from './BodyContect'
import About from './BodyAbout'
import Error from './Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import BodyAbout from './BodyAbout'
import BodyContect from './BodyContect'

function App() {
  const about = [
    {
      schooling: "mhs",
      college: "vgu",
      job: "software developer",
      address: "india",

    },
     {
      schooling: "mhs",
      college: "vgu",
      job: "software developer",
      address: "india",

    }
  ]

  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/about" element={<About about={about} />} />
          <Route path="/contact" element={<Contect />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
