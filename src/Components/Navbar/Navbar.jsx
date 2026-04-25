import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

// import './Navbar.css'
import './Navbar.css'

//import logo here
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'


const Navbar = () => {
    // create a state for sticky navbar using useState hook and set it to false initially. when the user scrolls down the page and the scrollY value is greater than 50, we will set the sticky state to true and when the user scrolls up the page and the scrollY value is less than or equal to 50, we will set the sticky state to false. we will add an event listener to the window object to listen for the scroll event and we will remove the event listener when the component unmounts to prevent memory leaks. we will also add a class name to the nav element based on the value of the sticky state to change the background color of the navbar when it becomes sticky.
    const [sticky, setSticky] = useState(false)
    
    useEffect(() => {
      window.addEventListener('scroll', () => {
        window.scrollY>500? setSticky(true) : setSticky(false)  //ternary operator to check if the scrollY value is greater than 50, if it is then set the sticky state to true, otherwise set it to false.
      })
    }, []);

    //toggle menu for mobile view when the menu icon is clicked, we will toggle the 'active' class on the ul element to show or hide the menu items. we will also toggle the 'active' class on the menu icon to change its appearance when the menu is active.
    
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);  //ternary operator to check if the mobileMenu state is true, if it is then set it to false, otherwise set it to true.
    }

  return (
    <>
     <nav className={`container ${sticky ? 'dark-nav' : ''}`}>  {/*dark-nav is the class name which will be added when the sticky is true and it will change the background color of the navbar to dark blue and transition will be added to make it smooth when we scroll down and up the page. */}
        <img src={logo} alt="edusity" className='logo'></img>
        <ul className={mobileMenu ? ' ':'hide-mobile-menu'}>  {/*nav-menu is the class name for the ul element and active is the class name which will be added when the mobileMenu state is true and it will show the menu items in mobile view. */}
            <li><Link to='hero' smooth={true} offset={-260} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-220} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-110} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-220} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-220} duration={500}>Testimonials</Link></li> 
            <li><Link to='contact' smooth={true} offset={-220} duration={500}><button className='btn'>Contact us</button></Link></li>
        </ul>
        <img src={menu_icon} alt="menu" className='menu-icon' onClick={toggleMenu}></img>
     </nav>
    </>
  )
}

export default Navbar
