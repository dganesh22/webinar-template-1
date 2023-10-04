import React from 'react'
import { Link } from 'react-router-dom'
import content from '../data/content.json'

function Header() {
  return (
    <section>
            <nav className="navbar navbar-expand-md navbar-dark bg-custom fixed-top">
                <div className="container">
                    <Link to={`/#`} className="navbar-brand">
                         <img src={content.header.logo} alt="" className='img-fluid' width={200} height={150} />
                    </Link>
                </div>
            </nav>
    </section>
  )
}

export default Header
