import React from 'react'
import '../App.css'
import {FaRegUserCircle} from 'react-icons/fa'

function Navbar() {
  return (
    <div className='Navbar'>
    <div className='leftSide'>
    <div className='link'>
      <a href= ' /home'>Logo</a>
      </div>
    </div>
    

    <div className='rightSide'>
      <div className='profile'>
      <FaRegUserCircle size='2rem' color='white'/>
      <a href='/user'>User</a>
      </div>
    </div>

    </div>
  )
}

export default Navbar