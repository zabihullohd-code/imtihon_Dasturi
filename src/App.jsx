import React from 'react'
import './Asilbek/Asilbek.css'
import logo from './logo.png'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Firdavs from './Firdavs/Firdavs'
import Mrizo from './Mrizo/Mrizo'

const Asilbek = () => {
  return (
    <BrowserRouter>
    <div>
        <div className="Menu">
            <div className="navbar">
                <img src={logo} alt="" />
                <ul>
                    <li>
                        <a href="">menu</a>
                        <Link to="firdavs">news</Link>
                        <Link to="Umar">about us</Link>
                        <Link to="Jasurbek">contact us</Link>
                        <Link to="Samandar"> <button>Log in</button> </Link>
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
                <Route path='firdavs' element={<Firdavs />}/>
                <Route path='Mrizo' element={<Mrizo />}/>
            </Router>
        </div>

    </div>


    </BrowserRouter>
  )
}

export default Asilbek