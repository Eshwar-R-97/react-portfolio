import "./FooterStyles.css";

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size ={20} style={{color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>FILL IN LATER</p>
                        <p>FILL IN LATER</p>

                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size ={20} style={{color: "#fff", marginRight: "2rem" }} />1-408-913-5427</h4>
                </div>
                <div className="gmail">
                <h4><FaMailBulk size ={20} style={{color: "#fff", marginRight: "2rem" }} />epicfortnitegamer5492@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About my shot</h4>
                <p>To be completely honest this is all bs I AM LYING TO YOU HEELP</p>
                <div className="social">
                    <FaLinkedin size ={30} style={{color: "#fff", marginRight: "1rem" }} />
                    <FaInstagram size ={30} style={{color: "#fff", marginRight: "1rem" }} />
                    <FaYoutube size ={30} style={{color: "#fff", marginRight: "1rem" }} />

                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer