import React from 'react';
import logo from '..//assets/dawitLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-exapand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: 'white'}}/>
                </button>
                <div>
                    <ul>
                        <li>
                            <Link></Link>
                        </li>
                         <li>
                            <Link></Link>
                        </li>
                         <li>
                            <Link></Link>
                        </li>
                         <li>
                            <Link></Link>
                        </li>
                         <li>
                            <Link></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}