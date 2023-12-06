import React from 'react'
import '../css/Companyabout.css'
import aboutimg from'../assets/image/about1.jpg'
import aboutimg2 from '../assets/image/about2.jpg'
import aboutimg3 from '../assets/image/about3.jpg'

const Companyabout = () => {
  return (
    <div >
      <div className="don">
        <div className="don1">
          <h5>ABOUT COMPANY</h5>
          <h1>Build With Experts..!</h1>
          <p>At Unix Technologies, we believe that our success is achieved by providing quality service to our clients and by hiring only the best talent for our team. We have been able to provide innovative software solutions all the time to our clients.</p>

          <div className="hero">
            <div className="hero1">
            <img src={aboutimg} alt="" />
            </div>
            <div className="hero2">
            <ul>
              <li><i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;React Development</li>
              <li><i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Web Development</li>
              <li><i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Graphic Design</li>
              <li><i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Motion Graphics</li>
              <li><i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Data Science</li>
            </ul>
            </div>

          </div>
        </div>
        <div className="don2">
          <div className="blue"></div>
          <img className='aboutimg1' src={aboutimg3} alt="" />
          <img className='aboutimg2' src={aboutimg2} alt="" />


        </div>
      </div>
      
    </div>
  )
}

export default Companyabout
