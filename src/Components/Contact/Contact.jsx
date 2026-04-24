import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'  
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
   
    // logic for form submission to web3forms.com (create access key and paste it here then go to documentatio and scroll down and click on simple react form to get the code for form submission and paste it here)
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...."); // to show the user that the form is being submitted
    const formData = new FormData(event.target);

    formData.append("access_key", "27336c79-82ed-47bc-80f5-dd0517224735"); //past here your access key created by web3forms.com

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();  //reset form after successful submission: we added this line.
    } else {
      console.log("Error", data);
      setResult(data.message);
      event.target.reset();
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon} alt=''/></h3>
        <p>Feel free to reach out through contact form our contact information below. Your feedback, questions, 
        and suggestions are importtant to us as we strive to provide exceptional services to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt=''/>Contact@gmail.com</li>
            <li><img src={phone_icon} alt=''/>+1 123 456 7890</li>
            <li><img src={location_icon} alt=''/>123 Massachausetts Ave, Cambridge<br/>
            MA 02139 , United States</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}> 
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>

            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required/>

            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder="Type your message here" required/>

            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt=''/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
