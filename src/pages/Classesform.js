import React from 'react'
import '../PagesCss/Classesform.css'
import { useNavigate } from 'react-router-dom'

function Classesform (){
  const navigate = useNavigate();

  return (
    <div>
      <div className="Classesform_container">
        <div className="class_btn">
            <button onClick={() => navigate('/')}>React Development</button>
        </div>
        <div className="class_btn">
            <button onClick={() => navigate('/Graphicde')}>Graphics Design</button>

        </div>
        <div className="class_btn">
            <button onClick={() => navigate('/Motiongra')}>Motion Graphics</button>

        </div>
        <div className="class_btn">
            <button onClick={() => navigate('/Datas')}>Data Science</button>

        </div>

      </div>
      <div className="class_contact">
        <h3>Contact Us</h3>
        <input type="email" placeholder='Email Address' /> <br /> <br />
        <textarea name="" id="" cols="30" rows="4" placeholder='Message'></textarea> <br /> <br />
      <button className='class_btn2'>SEND MESSAGE <i class="fa-solid fa-arrow-right"></i></button>
      
      </div>
<div className="Brochures">
    <h3>Brochures</h3>
    <button className='class_btn3'>DOWNLOAD DOC&nbsp; <i class="fa-solid fa-circle-down"></i></button> <br /> <br />
    <button className='class_btn2'>DOWNLOAD PDF&nbsp; <i class="fa-regular fa-file-pdf"></i></button>

</div>



    </div>
  )
}

export default Classesform
