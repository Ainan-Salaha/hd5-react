import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/nav.css';
function Navbar() {
    return (
        <>
            <div className='navbar flex'>
                <NavLink  to='/' style={({ isActive }) => ({ color: isActive ? "purple" : "white" })} className='link' >Pure Component </NavLink>
                <NavLink to='/hoc' style={({ isActive }) => ({ color: isActive ? "purple" : "white" })} className='link'  >High Order Component </NavLink>
            </div>

        </>
    )
}

export default Navbar