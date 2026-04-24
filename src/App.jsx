import React from 'react'

//import components here
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle="OUR PROGRAM" title="What We Offer"/> {/*pass props here to the title component */}
        <Programs/> {/* to give more spaces from left and right so we will put this inside the div */}
        <About/>
        <Title subtitle="GALLERY" title="Campus Photos"/> {/*pass props here to the title component */}
        <Campus/>
        <Title subtitle="TESTIMONIALS" title="What Students Says"/> {/*pass props here to the title component */}
        <Testimonials/>
      </div>

    </div>  
    </>

  )
}

export default App
