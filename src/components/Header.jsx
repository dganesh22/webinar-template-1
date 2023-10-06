import React from 'react'
import { Link } from 'react-router-dom'
import content from '../data/content.json'

function Header() {
  return (
    <section>
            <nav className="navbar navbar-expand-md navbar-dark bg-custom fixed-top">
                <div className="container">
                    <a href={`/`} className="navbar-brand">
                         <img src={content.header.logo} alt="" className='img-fluid' width={200} height={150} />
                    </a>
                    <ul className="navbar-nav">
                      <li className="nav-item">
                          <a href={`#register`} className="btn btn-warning btn-lg">Register <i className="bi bi-person-fill"></i> </a>
                      </li>
                    </ul>
                </div>
            </nav>
    </section>
  )
}

export default Header
