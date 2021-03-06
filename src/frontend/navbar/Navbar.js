import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css';
import logo from '../images/sf.svg';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <img src={logo} className="company-logo" alt="logo" />
          <div className="right">
            <NavLink exact activeClassName="selected" to="/redshift/">Home</NavLink>❘
            <NavLink exact activeClassName="selected" to="/redshift/about">About</NavLink>❘
            <NavLink exact activeClassName="selected" to="/redshift/contact">Contact</NavLink>
          </div>
        </nav>
      </div>
    )
  }
}
