import React from 'react'


const Navbar = () => {



  return (
    <div className='navbar'>
      <div className='navbar-wrapper'>
        <form id="searchForm">
        <input id="searchInput" className="search-input" type="text" placeholder='Find a game...'></input>
        </form>
      <i class="fa-solid fa-magnifying-glass"></i>
        <div className='nav-link'>Home</div>
        <a href="https://skyewasthelimit.netlify.app/" rel="noreferrer" target='_blank'><div className='nav-link'>About</div></a>
        <a href="mailto:skyemclean87@gmail.com"><div className='nav-link'>Contact</div></a>
        <div className='review-btn'>Review</div>
      </div>
    </div>
  )
}

export default Navbar