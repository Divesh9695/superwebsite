import React from 'react'
import './Navbar.css';
import Link from 'antd/es/typography/Link';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='text'>
        <li>Home</li>
        <Link>
        <li>Search for jabs</li>
        </Link>
        <li>why work for Us</li>
      </ul>


    </div>
  )
}

export default Navbar