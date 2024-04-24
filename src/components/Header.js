import React from 'react'
import './Header.css'

function Header() {

  return (
    <div>
        <header id="head">
        <h1>Your Website Name</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Header