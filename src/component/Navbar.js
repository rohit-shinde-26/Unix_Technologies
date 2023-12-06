import React from 'react';
import '../css/Navbar.css'
import Logo from '../assets/image/Logo.png'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  
 

  return (
    <div className='navbar_container'>
      <div className='main_container'>
        <div className='logo'>
            <img src={Logo} alt="" />

        </div>
        <div className='menus'>
            <ul>
              <Link  to='/'>
              <li>Home</li>
              </Link>
              <Link to='/about'>

              <li>About</li>
              </Link>

              <Link >
              <li className='arrow'>Services <i class="fa-sharp fa-solid fa-angle-down" ></i>
              <div className="down">
                <ul>
                  <Link to='/reactdev'>
                  <li>React Development</li>
                  </Link>
                  <Link to='/graphicde'>
                  <li>Graphic Design</li>
                  </Link>
                  
                  <Link to='/motiongra'>
                  <li>Motion Graphics</li>
                  </Link>
                  <Link to='/datas'>                 
                  <li>Data Science</li>
                  </Link>
                
                  </ul>
              </div> </li>
              </Link>

              <Link  to='/contact'>
              <li>Contact </li>
              </Link>             
               
            </ul>
        </div>
        <div>
         <button className='but' onClick={() => navigate('/contact')}>          
          Contact Us <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      <div className='hamburger' >          
        <i class="fa-solid fa-bars"></i>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar