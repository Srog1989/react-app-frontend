import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm  px-sm-5 bg-primary navbar-dark">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link"> Home </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/current" className="nav-link"> Current Weather </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/favorites" className="nav-link"> Favorites </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}