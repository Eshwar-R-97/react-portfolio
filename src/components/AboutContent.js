import "./AboutContentStyles.css";

import React from 'react';
import {Link} from 'react-router-dom';
import aboutimg1 from "../assets/Random_Turtle.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={aboutimg1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={aboutimg1} className="img" alt="true"/>
                </div>
            </div>
        </div>

        <div className="right">
            <h1>Who Am I?</h1>
            <p>No, like seriously, who the fack am I?</p>
            <Link to="/contact">
                <button className="btn">
                    Contact
                </button>
            </Link>
        </div>
    </div>
  )
};

export default AboutContent