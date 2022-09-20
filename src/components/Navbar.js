import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* <Link to='/profile'><img src={profile.id}></img></Link> */}
          <Link to='/' >
            Home 
          </Link>
          <Link to='/myworkouts'>
            My workouts
          </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar