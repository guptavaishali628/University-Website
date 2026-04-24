import React from 'react'

//import components here
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title/>
       <Programs/> {/* to give more spaces from left and right so we will put this inside the div */}
      </div>
    </div>  

  )
}

export default App
