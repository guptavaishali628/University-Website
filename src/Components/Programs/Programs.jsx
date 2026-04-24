import React from 'react'

//import css file
import './Programs.css'

//importing assets
import program1 from '../../assets/program-1.png'    
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import program1_icon from '../../assets/program-icon-1.png'
import program2_icon from '../../assets/program-icon-2.png'
import program3_icon from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program1} alt='Program1'></img>
            <div className='caption'>
                <img src={program1_icon} alt='Program1 Icon'></img>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">    
            <img src={program2} alt='Program2'></img>
            <div className='caption'>
                <img src={program2_icon} alt='Program2 Icon'></img>
                <p>Masters Degree</p   >
            </div>
        </div>
        <div className="program">
            <img src={program3} alt='Program3'></img>
            <div className='caption'>
                <img src={program3_icon} alt='Program3 Icon'></img>
                <p>Post Degree</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
