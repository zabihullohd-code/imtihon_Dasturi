import React from 'react'
import './Asilbek.css'
import logo from './logo.png'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Firdavs from '../Firdavs/Firdavs'
import Mrizo from '../Mrizo/Mrizo'

const Asilbek = () => {
    return (
        <div>
            <div className="Menu">
                <div className="orta">
                    <div className="orta_t">
                        <div className="harf">
                            <p>Home</p>
                            <p>|</p>
                            <p className='asd'>Menu</p>
                        </div>
                        <div className="chap">
                            <h2>Our Regular Menu Pack</h2>
                            <div className="tugma">
                                <a href="">
                                    <button>all</button>
                                </a>
                                <a href="">
                                    <button>kebabs</button>
                                </a>
                                <a href="">
                                    <button>pidesburgers</button>
                                </a>
                                <a href="">
                                    <button>other dishes</button>
                                </a>
                                <a href="">
                                    <button>sides</button>
                                </a>
                                <a href="">
                                    <button>drinks</button>
                                </a>
                                <a href="">
                                    <button>desserts</button>
                                </a>
                                <a href="">
                                    <button>meal deals</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pass">
                    <div className="footer11">

                        <div className="shriftlar">

                            <h2>Newsletter</h2>

                            <h1>Subscribe to Our Newsletter</h1>

                            <p>And never miss latest Updates!</p>

                        </div>

                        <div className="inpbtn">

                            <input type="text" placeholder='Email Address' />

                            <button>Subscribe</button>
                        </div>
                    </div>



                    {/* foteer1 */}




                    <div className="footer21">
                        <div className="a1">
                            <h2>Contact Us</h2>
                            <br />
                            <p>9 W 53rd St, London, NY 10019, UK</p>
                            <br />
                            <p>+1 212-344-1230 <br /> +1 212-555-1230</p>
                        </div>

                        <div className="a2">
                            <img src={logo} alt="" />
                            <br />
                            <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
                            <br />
                            <div className="i">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>

                        <div className="a3">
                            <h2>Working Hours</h2>
                            <br />
                            <p>Monday-Friday: <br /> 08:00 am -12:00 am</p>
                            <br />
                            <p>Saturday-Sunday: <br /> 07:00am -11:00 pm</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Asilbek