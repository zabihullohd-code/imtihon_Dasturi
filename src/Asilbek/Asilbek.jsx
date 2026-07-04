import React from 'react'
import './Asilbek.css'
import logo from './logo.png'

const Asilbek = () => {
  return (
    <div>
        <div className="tepa_A">
            <div className="navbar">
                <img src={logo} alt="" />
                <ul>
                    <li>
                        <a href="/">menu</a>
                        <a href="Firdavs.jsx">news</a>
                        <a href="Umar.jsx">about us</a>
                        <a href="Jasurbek">contact us</a>
                        <a href="Samandar"> <button>Log in</button> </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Asilbek