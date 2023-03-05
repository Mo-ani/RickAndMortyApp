import React from 'react'
import { NavLink, Link } from "react-router-dom"
import '../../App.css';
import Logout from '../Login/Logout';
import style from './Navbar.module.scss'

const Navbar = ({setLoggedIn, loggedIn }) => {
  
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
        <div className="container">
        <Link to="/"><img src="https://i.postimg.cc/SRWDFytd/Rick-and-Morty.png" alt="logo" className={style.img} to="/"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

            <style>
                {/* Para cambiar a menu burguer o X cuando se de click*/}

                {`

                button[aria-expanded="false"] > .close{
                    display : none;
                }
                
                button[aria-expanded="true"] > .open{
                    display : none;
                }
                `}
            </style>

            <i className="fas fa-bars open fw-bold text-dark"></i>
            <i className="fas fa-times close fw-bold text-dark"></i>

          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink activeclassname="active" className="nav-link" to="/" aria-current="page">Characters</NavLink>
              <NavLink className="nav-link" to="/episodes"> Episodes </NavLink>
              <NavLink className="nav-link" to="/location"> Location </NavLink>
              {loggedIn ? <Logout setLoggedIn={setLoggedIn}/> : ''}
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar