import React from 'react'
import '../css/Forms.css'
const Forms = () => {
  return (
    <div className='bg2'>
        <div className="forms">
            <div className="form1">
                <h1>Don’t Hesited To <br />
Contact With Us, We’re  <br /> Very Friendly</h1>
<p>We Would Love to have a cup of Tea.... <br />
Or Coffee with you...!</p>

<h5>Phone Number</h5>
<li><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;+91 8261931619</li>
<li><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;+91 7823874975</li>
            </div>
            <div className="form2">
            <h5>LET’S TALK WITH US </h5>
            <h1>Free Consultations</h1>
           <form action="">
           <input type="text" placeholder='Full Name Here'required /> <br /><br />
            <input type="email" placeholder='Email Address'required /><br /><br />
            <textarea name="" id="" cols="30" rows="8" placeholder='Write Message' required></textarea><br /><br />

            <button className='but5'>GET FREE QUOTE <i class="fa-solid fa-arrow-right"></i></button>
            
            </form></div>

        </div>
    </div>
  )
}

export default Forms
