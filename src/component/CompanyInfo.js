import React from 'react'
import '../css/CompanyInfo.css'

function CompanyInfo(){
  return (
    <div className='company_info'>
      <div className="companyinfo_container">
        <div className="courses">
            <div className='icon'>
            <i class="fa-brands fa-react"></i>
                <p>React.Js</p>
            </div>
            <div  className='icon'>
            <i class="fa-sharp fa-solid fa-desktop"></i>
            
                <p>Web Design</p>
            </div>
            <div  className='icon'>
            {/* <i class="fa-sharp fa-solid fa-desktop"></i> */}
            <i class="fa-solid fa-arrow-up-right-dots"></i>
                <p>Graphics</p>
            </div>
            <div className='icon'>
            {/* <i class="fa-sharp fa-solid fa-desktop"></i> */}
            <i class="fa-solid fa-chart-line"></i>
                <p>Motion G.</p>
            </div>
            <div className='icon'>
            {/* <i class="fa-sharp fa-solid fa-desktop"></i> */}
            <i class="fa-solid fa-users"></i>
                <p>Data Science</p>
            </div>
            <div className='icon'>
            {/* <i class="fa-sharp fa-solid fa-desktop"></i> */}
            <i class="fa-solid fa-mobile"></i>
                <p>Apps Design</p>
            </div>

        </div>

        <div className="courses_info">
        <h6>HOW CAN HELP YOU</h6>
        <h1>Business Solutions To Business Growth</h1>
        <p>Our services include website development, graphics design, mobile application design and development.</p>
        <div>
         <button className='button1'>Contact Us <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        
        </div>
      </div>


    </div>
  )
}
export default CompanyInfo
