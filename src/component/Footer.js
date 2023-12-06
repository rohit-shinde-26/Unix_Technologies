import React from 'react'
import '../css/Footer.css'
import Logo from '../assets/image/black_logo.png'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <div className="footer_container">
        <div className="foot1">
          <img src={Logo} alt="" />
          <p>At Unix Technologies, we believe that our success is achieved by providing quality service to our clients and by hiring only the best talent for our team</p>

          <div className="icon1">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>

        </div>

        <div className="foot2">
          <h5>Menu</h5>
          <ul>            
            
             <Link  to='/'>
            <li className='demo'><i class="fa-solid fa-angles-right"></i> &nbsp;&nbsp; <span className='move'>Home</span></li>
              </Link>
              <Link to='/about'>

              <li className='demo'><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp; <span className='move'>About Us</span></li>
              </Link>

              <Link  to='/Reactdev'>
              <li className='demo'><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp; <span className='move'>Services</span></li>
              </Link>

              <Link  to='/contact'>
              <li className='demo'><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp; <span className='move'>Contact Us</span></li>
              </Link> 
          </ul>
        </div>

        <div className="foot2 foot3">
          <h5>Contact </h5>

          <ul>
            <li className='demo'><i class="fa-solid fa-angles-right"></i> &nbsp;&nbsp; <span className='move'> +91 8261931619</span></li>
            <li className='demo'><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp; <span className='move'>+91 7823874975</span></li>
            <li className='demo demo1'><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp; <span className='move'>Oppo. Orange Corner,</span><br />&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
              <span className='move'>Unix Technologies,</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='move'> Sangamner-422605</span></li>
            <li className='demo'><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp; <span className='move'> <a href="mailto:Info@Unixtechnologies.In">Info@Unixtechnologies.In</a></span></li>
          </ul>

        </div>

        <div className="foot4">
          <h5>Location</h5>
          <iframe src=
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15036.003733155067!2d74.201414!3d19.5844607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd017bab2fc9cb%3A0xb04b78cd5a90353b!2sUnix%20Technologies!5e0!3m2!1sen!2sin!4v1679390093851!5m2!1sen!2sin"
          >
          </iframe>
        </div>

      </div>
    </div>
  )
};


export default Footer
