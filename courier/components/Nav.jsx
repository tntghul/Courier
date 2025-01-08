import React from 'react'
import courier from '../src/assets/courier.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={courier} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/book">BOOK SHIPMENT</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link" to="/track">TRACK SHIPMENT</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/contact">CONTACT US</Link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav
