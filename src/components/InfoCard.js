import "./InfoCardStyles.css"

import React from 'react'
import {Link} from 'react-router-dom'

const InfoCard = () => {
  return (
    <div className="info">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className = "btc">$000</p>
                <p>- 3 Days -</p>
                <p>- penis -</p>
                <p>- poonis -</p>
                <p>- pinis -</p>
                <Link to="/contact" className="btn">
                    TALK TO ME.
                </Link>

            </div>
            <div className="card">
                <h3>- Basicpenis -</h3>
                <span className="bar"></span>
                <p className = "btc">$000</p>
                <p>- 2 Days -</p>
                <p>- piienis -</p>
                <p>- poooidjfnis -</p>
                <p>- psfkjghsdinis -</p>
                <Link to="/contact" className="btn">
                    TALK TO ME.
                </Link>

            </div>
            <div className="card">
                <h3>- fast -</h3>
                <span className="bar"></span>
                <p className = "btc">$000</p>
                <p>- 30 Days -</p>
                <p>- pendfis -</p>
                <p>- poonis -</p>
                <p>- pinis -</p>
                <Link to="/contact" className="btn">
                    TALKno TO ME.
                </Link>

            </div>
        </div>
    </div>
  )
}

export default InfoCard