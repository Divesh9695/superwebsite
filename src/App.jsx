import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home'
import search from './search'
import './index.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <search />
    </div>
  )
}

export default App