import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='navbar-wrapper'>
        <form id="searchForm">
          <input id="searchInput" className="search-input" type="text" placeholder='Find a game...'></input>
        </form>
        <i class="fa-solid fa-magnifying-glass"></i>
        <Link to="/"><div className='nav-link'>Home</div></Link>
        <Link to="/About"><div className='nav-link'>About</div></Link>
        <a href="mailto:skyemclean87@gmail.com"><div className='nav-link'>Contact</div></a>
        <Link to="/Review"><div className='review-btn'>Review</div></Link>
      </div>
    </div>
  )
}

export default Navbar