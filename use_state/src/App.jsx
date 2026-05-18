import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calulator from './Calculator'
import Signup from './Signup'
import Signup2 from './Signup2'
import Form from './Form'
import Header from './Header'
import Login from './Login'
import Login2 from './Login2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Header />
        <Routes>


          <Route path="/form" element={<Form />} />
          <Route path="/calculator" element={<Calulator />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup2" element={<Signup2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
