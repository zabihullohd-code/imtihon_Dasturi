import React from 'react'
// import './Asilbek/Asilbek.css'
import logo from './logo.png'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import Firdavs from './Firdavs/Firdavs'
import Mrizo from './Mrizo/Mrizo'
import Asilbek from './Asilbek/Asilbek'
import Umar from './Umar/Umar'
import Abdurahmon from './Abdurahmon/Abdurahmon'
import Jasurbek from './Jasurbek/Jasurbek'
import Samandar from './Samandar/Samandar'

const App = () => {
  return (

    <BrowserRouter>
    <div>
        <div className="Menu">
            <div className="navbar">
                <img src={logo} alt="" />
                <ul>
                    <li>
                        <Link to="abdurahmon">Home</Link>
                        <Link to="asilbek">menu</Link>
                        <Link to="firdavs">news</Link>
                        <Link to="umar">about us</Link>
                        <Link to="jasurbek">contact us</Link>
                        <Link to="samandar"> <button>Log in</button> </Link>
                    </li>
                </ul>
            </div>

            <Routes>
                {/* <Route path='abdurahmon' element={<Abdurahmon />}/> */}
                <Route path='abdurahmon' element={<Mrizo />}/>
                <Route path='asilbek' element={<Asilbek />}/>
                <Route path='firdavs' element={<Firdavs />}/>
                <Route path='jasurbek' element={<Jasurbek />}/>
                <Route path='umar' element={<Umar />}/>
                <Route path='Samandar' element={<Samandar />}/>
            </Routes>
        </div>
      {/* <Asilbek /> */}
    </div>
    </BrowserRouter>

  )
}

export default App