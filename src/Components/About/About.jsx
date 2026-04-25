import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'  

const About = ({ setPlayState}) => {
  return (
    <div className='about' id='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'></img>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}></img>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
              Embark on a tranform educational journey with our university's comprehensive education programs. Our cutting-edge
              curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education
            </p>
            <p>
              with a focus on innovation , hands-on learning experiences and personalized mentorships, our program prepare aspiring 
              educators to make a meaningful impact in classrooms, schools, and communities.
            </p>
            <p>
                Wheather you're a passionate educator looking to enhance your teaching skills or an aspiring teacher ready to embark on a rewarding career, 
                our education programs provide the resources and support you need to succeed. Join us in shaping the future of education and making a difference in the lives of students worldwide.
            </p>


        </div>
    </div>
  )
}

export default About
