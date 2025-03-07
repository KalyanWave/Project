import React from 'react'
import './services.css'
const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="top">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.774272479816!2d78.71886857471235!3d17.47051480040593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76ea23dfa8d5%3A0x72d3ea7f454e19ea!2sVignana%20Bharathi%20Institute%20of%20Technology%20%7C%20Top%20Engineering%20Colleges%20In%20Telangana!5e0!3m2!1sen!2sin!4v1700074669417!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="downn">
          <form action="https://formspree.io/f/xknlabnk" method='post'>
            <input className='input1' required name='username' type="text" placeholder='username'/>
            <input className='input2' required name='email' type="email" placeholder='Email'/>
            <textarea required  name="text" id="text" cols="50" rows="6"></textarea>
            <button type='submit'>send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
