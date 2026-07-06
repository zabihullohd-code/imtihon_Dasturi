import React from 'react'
import './Asilbek/Asilbek.css'
import logo from './logo.png'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Firdavs from './Firdavs/Firdavs'
import Mrizo from './Mrizo/Mrizo'

const App = () => {
  return (
      <div>
        <BrowserRouter>
    

      <Firdavs />
    </BrowserRouter>
    </div>


  )
}

export default App