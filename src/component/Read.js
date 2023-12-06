import React from 'react'
import'../css/Read.css'
import { useNavigate } from 'react-router-dom';

function Read (){
  const navigate = useNavigate();

  return (
    <div className='read'>
     <div className="read1">
     <h1>Ready To Get Free Consulations For <br />
Any Kind Of It Solutions ?</h1>

<div className="butt11">
          <button className="but11" onClick={() => navigate('/contact')}>GATE A QUOTE <i class="fa-solid fa-arrow-right"></i></button>
          <button className="but12">READ MORE <i class="fa-solid fa-arrow-right"></i></button>
        </div>
     </div>
    </div>
  )
}

export default Read
