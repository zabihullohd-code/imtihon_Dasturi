import React from 'react'
import "./Jasurbek.css";
import logo from './logo.png'

const jasurbek = () => {
    return (


        <div>
            <div className="navbar">
                <div className="navbar1">

                    <img className='img' src={logo} alt="" />
                </div>
                <div className="navbar2">

                    <ul>
                        <li>
                            <a href="/">menu</a>
                            <a href="Firdavs.jsx">news</a>
                            <a href="Umar.jsx">about us</a>
                            <a href="Jasurbek.jsx">contact us</a>
                            <button>Log in</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tepa1">

                <ul className='ul'>
                    <li className='li' >Home | <span>Contact Us</span></li>
                </ul>
                <h1>Contact Us</h1>
            </div>

            <div className="contact">
                <div className="left">

                    <div className="card">
                        <div className="icon"></div>
                        <div>
                            <h3>Phone Number</h3>
                            <p>+1 212-344-1230</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon"></div>
                        <div>
                            <h3>Email Address</h3>
                            <p>eaturkish@gmail.com</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon"></div>
                        <div>
                            <h3>Instagram</h3>
                            <p>eaturkish</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon"></div>
                        <div>
                            <h3>Twitter</h3>
                            <p>eaturkish</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">    </div>
                        <div>
                            <h3>Facebook</h3>
                            <p>eaturkish</p>
                        </div>
                    </div>

                </div>

                <div className="right">
                    <h1>Send Message</h1>
                    <p>
                        If you have any questions, you can send us an SMS or contact us by
                        phone.
                    </p>

                    <div className="input-box">
                        <input type="text" placeholder="Your name" />
                        <input type="email" placeholder="Email address" />
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="Phone number" />
                        <input type="text" placeholder="Subject" />
                    </div>

                    <textarea placeholder="Message"></textarea>

                    <button>Send message</button>
                </div>
            </div>
<center>

<h6>Find Us By Card</h6>
</center>
<center>
<section className="map-section">
      <iframe
        title="Tashkent Map"
        src="https://maps.google.com/maps?q=Tashkent,%20Uzbekistan&t=&z=11&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </section>

</center>


        </div>





    )
}

export default jasurbek