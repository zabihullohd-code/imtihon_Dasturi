import React from 'react'
import './Asilbek.css'
import logo from './logo.png'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Firdavs from '../Firdavs/Firdavs'
import Mrizo from '../Mrizo/Mrizo'

const Asilbek = () => {
  return (
    <BrowserRouter>
    <div>
        <div className="Menu">
            <div className="navbar">
                <img src={logo} alt="" />
                <ul>
                    <li>
                        <Link to="">menu</Link>
                        <Link to="Firdavs.jsx">news</Link>
                        <Link to="Umar.jsx">about us</Link>
                        <Link to="Jasurbek.jsx">contact us</Link>
                        <Link to="Samandar.jsx"> <button>Log in</button> </Link>
                    </li>
                </ul>
            </div>
            <div className="orta">
                <div className="orta_t">
                    <p>Home</p>
                    <p>|</p>
                    <p>Menu</p>
                </div>
            </div>
            <Router>
                <Route path='/' element={<Asilbek />}/>
                <Route path='Firdavs.jsx' element={<Firdavs />}/>
                <Route path='Mrizo' element={<Mrizo />}/>
            </Router>
        </div>

    </div>


    </BrowserRouter>
  )
}

export default Asilbek