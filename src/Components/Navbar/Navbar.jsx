import React, { useEffect, useState } from 'react'

// import './Navbar.css'
import './Navbar.css'

//import logo here
import logo from '../../assets/logo.png'


const Navbar = () => {
    // create a state for sticky navbar using useState hook and set it to false initially. when the user scrolls down the page and the scrollY value is greater than 50, we will set the sticky state to true and when the user scrolls up the page and the scrollY value is less than or equal to 50, we will set the sticky state to false. we will add an event listener to the window object to listen for the scroll event and we will remove the event listener when the component unmounts to prevent memory leaks. we will also add a class name to the nav element based on the value of the sticky state to change the background color of the navbar when it becomes sticky.
    const [sticky, setSticky] = useState(false)
    
    useEffect(() => {
      window.addEventListener('scroll', () => {
        window.scrollY>500? setSticky(true) : setSticky(false)  //ternary operator to check if the scrollY value is greater than 50, if it is then set the sticky state to true, otherwise set it to false.
      })
    }, []);

  return (
    <>
     <nav className={`container ${sticky ? 'dark-nav' : ''}`}>  {/*dark-nav is the class name which will be added when the sticky is true and it will change the background color of the navbar to dark blue and transition will be added to make it smooth when we scroll down and up the page. */}
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
