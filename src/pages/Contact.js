import React from "react";
import "../PagesCss/ContactUs.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <div className="img">
        <h1>Contact Us</h1>
        <div className="home_container">
       <Link  to='/'>
              Home 
              </Link>
              <i class="fa-solid fa-chevron-right"></i> <h4>Contact Us</h4>
       </div>
      </div>

    <div className="add">
    <div className="email">
      <div className="contact">
          <div className="contact1">
          <i class="fa-regular fa-envelope"></i>
          </div>
          <div className="contact2">
            <h3>Email Address</h3>
            <p>Sent mail asap anytime</p>
          </div>
        </div>
       <p> info@unixtechnologies.com.com</p>
      <p>  hr@unixtechnologies.com</p>
      </div>

      <div className="email">
      <div className="contact">
          <div className="contact1">
          <i class="fa-solid fa-phone"></i>
          </div>
          <div className="contact2">
            <h3> Phone Number</h3>
            <p>call us asap anytime</p>
          </div>
        </div>
       <p>+91 8261931619</p>
      <p>+91 7823874975</p>
      </div>
     

      <div className="email">
      <div className="contact">
          <div className="contact1">
          <i  class="fa-solid fa-location-dot"></i>
          </div>
          <div className="contact2">
            <h3>  Office Address</h3>
            <p>Sent mail asap anytime</p>
          </div>
        </div>
       <p>Oppo. Orange Corner, Unix </p>
      <p>Technologies, Sangamner - 422605</p>
      </div>
    </div>
<div className="map">
<iframe src=
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15036.003733155067!2d74.201414!3d19.5844607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd017bab2fc9cb%3A0xb04b78cd5a90353b!2sUnix%20Technologies!5e0!3m2!1sen!2sin!4v1679390093851!5m2!1sen!2sin"
          >
          </iframe>
</div>

<div className="form_contact">
<p>SEND US MESSAGE</p>
<h1>
Don’t Hesited To Contact Us <br />
Say Hello Or Message
</h1>
  <form action="">

    <div className="form_contactus">
    <div>
    <label htmlFor="fullname">Full Name:</label><br /><br />
    <input type="text" placeholder="Enter Name" required/><br /><br /><br />
    </div>

   <div>
   <label htmlFor="email"> Email Address:</label><br /><br />
    <input type="email" placeholder="Enter Name"required /> <br /><br /><br />
   </div>
   <div>
    
   <label htmlFor="phone">Phone Number:</label><br /><br />
    <input type="tel" placeholder="Enter Name" required/><br /><br /><br />
   </div>

    <div>
      <label htmlFor="subject">Subject:</label><br /><br />
    <input  placeholder="Enter Name"  type="text" required/><br /><br /><br />
    </div>
    </div>
<div className="message1">
<label htmlFor="EnterMessage">Enter Message:</label><br /><br />
    <textarea name="" id="" cols="30" rows="10" placeholder="Enter Message"></textarea>
   
</div>
<div className="submit_but">
  <button>SEND MESSAGE &nbsp; <i class="fa-solid fa-arrow-right"></i></button>
</div>
   
    

    
  </form>
</div>




    </div>
  );
};

export default Contact;
