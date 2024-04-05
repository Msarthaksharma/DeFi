import React, { useState } from 'react'
import './Navbar.css'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {

  const [hamburger,setHamburger] = useState(false)

  const handleClick = () =>{setHamburger(!hamburger)}

  return (
    <div className='navbar'>
        <div className='container'>
            <h1 style={{ marginLeft:'1rem',color:'#008dff'}}>Defi</h1>
              <ul className={hamburger ? 'nav active':'nav'}>
                <li className='nav-item'>
                  <a href='/'>Platform</a>
                </li>
                <li className='nav-item'>
                  <a href='/'>Developers</a>
                </li>
                <li className='nav-item'>
                  <a href='/'>Community</a>
                </li>
                <li className='nav-item'>
                  <a href='/'>About</a>
                </li>
                <li className='nav-item'>
                  <a className='btn' href='/'>Use Defi</a>
                </li>
              </ul>
              <div onClick = {handleClick} className='hamburger'>
                {hamburger ? (<AiOutlineClose className= 'icon' />) : <AiOutlineMenu className= 'icon'/>}
              </div>
        </div>
    </div>
  )
}

export default Navbar