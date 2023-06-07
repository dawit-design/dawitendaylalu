import React from 'react';
import logo from '../Assets/dawitLogo.png';
import {FontAwesome} from '@fontawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
            <div className="container">
                <a href="/"><img className="logo" src={logo} alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></button>
            </div>
        </nav>
    )
}