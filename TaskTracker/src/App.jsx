import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />



        </Routes>

      </Router>

    </>
  )
}
export default App