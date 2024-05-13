import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                    <img src={assets.logo} alt=""/>
                    <p>This is a trusted food delivery app, we track each of our services. thanks to vising our page. Hope we expect one more time to visit our services.</p>
                    <div className="footer-social-icons">

                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                    <ul>
                      <li>Home</li>
                      <li>About us</li>
                      <li>Delivery</li>
                      <li>Privacy policy</li>
                    </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                    <li>+91 8985074606</li>
                    <li>softtapps@gmail.com</li>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © softtapps.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
