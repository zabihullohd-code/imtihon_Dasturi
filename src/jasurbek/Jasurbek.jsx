import React from 'react'
import "./Jasurbek.css";
import logo from './logo.png'

const jasurbek = () => {
    return (


        <div>

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
            <div className="footer">

                <div className="shriftlar">

                <h2>Newsletter</h2>

                <h1>Subscribe to Our Newsletter</h1>

                <p>And never miss latest Updates!</p>

                </div>

                <div className="inpbtn">

                <input type="text" placeholder='Email Address'/>

                <button>Subscribe</button>
                </div>
            </div>
<div className="footer2">
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





    )
}

export default jasurbek