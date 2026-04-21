import React from 'react'

// import './Navbar.css'
import './Navbar.css'

//import logo here
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <>
     <nav className='container'>
        <img src={logo} alt="edusity" className='logo'></img>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact us</button></li>

        </ul>
     </nav>
    </>
  )
}

export default Navbar
