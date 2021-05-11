import React from 'react'
import CartWidget from './CartWidget'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar(props) {
        return (
            <div>
              <ul id="nav" >
                <li id="titulo" ><NavLink to='/' style={{ color: '#91b4ca', textDecoration: 'none' }}>Surf Stuff</NavLink></li>
                <li><NavLink to={`/category/begineers`} style={{ color: '#91b4ca' }} >Begineers</NavLink></li>
                <li><NavLink to={`/category/advanced`} style={{ color: '#91b4ca' }} >Advanced</NavLink></li>
                <li><NavLink to={`/cart`} style={{ color: '#91b4ca' }} ><CartWidget /></NavLink></li>
              </ul>
            </div>
        );
}

export default Navbar;