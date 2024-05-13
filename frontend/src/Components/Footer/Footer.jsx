import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsApp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src="" alt="" />
            <p>MENIVOL</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-social-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-social-container">
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer-social-container">
                <img src={whatsApp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyrights">
            <hr />
            <p>Copyrights @ 2024 -All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
