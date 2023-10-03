import React from 'react'
import { Link } from 'react-router-dom'
import content from '../data/content.json'

function Header() {
  return (
    <section>
            <nav className="navbar navbar-expand-md navbar-dark bg-custom fixed-top">
                <div className="container">
                    <Link to={`/#`} className="navbar-brand">
                         <img src="https://www.be-practical.com/images/Be-logo.png" alt="" className='img-fluid' width={200} height={150} />
                    </Link>

                    <div className="collapse navbar-collapse d-flex justify-content-end" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={content.pay.url} target="_blank" className="btn btn-outline-warning">
                                    Book Now
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </section>
  )
}

export default Header
