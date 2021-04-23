import React from 'react'
import CartWidget from './CartWidget'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar(props) {
        return (
            <div>
              <ul id="nav" style={{color: 'azure'}} >
                <li id="titulo"><NavLink to='/'>Surf Stuff</NavLink></li>
                <li><NavLink to={`/category/begineers`}>Begineers</NavLink></li>
                <li><NavLink to={`/category/advanced`}>Advanced</NavLink></li>
                <li><NavLink to={`/cart`} ><CartWidget /></NavLink></li>
              </ul>
            </div>
        );
}

export default Navbar;