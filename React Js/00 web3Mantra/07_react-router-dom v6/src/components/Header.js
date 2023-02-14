import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const NavLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "white",
      fontSize: "2rem",
      fontWeight: "700"
    }
  }


  return (
    <div className='header'>
      <NavLink style={NavLinkStyles} to={'/'}>Home</NavLink>
      <NavLink style={NavLinkStyles} to={'/about'}>About</NavLink>
      <NavLink style={NavLinkStyles} to={'/contact'}>Contact</NavLink>
    </div>
  )
}

export default Header