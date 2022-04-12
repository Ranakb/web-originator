import React from 'react'
import {Link} from 'react-router-dom'
import Support from './Support'
import {BiUserCircle} from 'react-icons/bi'
const NavBar = () => {
    return (
        <>
            <div className="navbar">
            <h3 className="title">WOG</h3>

            <div className="navbarLinks">
            <Link to="/" className="Home">Home</Link>
            <Link to="/webstore" className="Home">Web Store</Link>
            <Link to="/Support" className="Home">Support</Link>
            <Link to="/dashboard" className="Home"><BiUserCircle  className='style_icon'/></Link>
           
            </div>
    
            </div>
           
        </>
    )
}
export default NavBar;