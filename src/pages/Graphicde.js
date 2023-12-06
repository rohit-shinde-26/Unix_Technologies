import React from 'react'
import img2 from "../assets/image/img2.png";
import Classesform from "./Classesform";
import { Link } from 'react-router-dom';
import Read from '../component/Read';
function Graphicde(){
  return (
    <div>
    <div className="img">
      <h1>Graphics Design</h1>
      <div className="home_container">
       <Link  to='/'>
              Home 
              </Link>
              <i class="fa-solid fa-chevron-right"></i> <h4>Motion Graphics Design</h4>
       </div>
    </div>

    <div className="React_container">
      <div className="react_container1">
        <Classesform />
      </div>
      <div className="react_container2">
        <h1>Graphic and Interactive Design:</h1>
        <p>
          <i class="fa-sharp fa-solid fa-circle-check"></i>{" "}
          &nbsp;&nbsp;Increase design and visualization skills.
        </p>
        <p>
          <i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Learn various Multimedia tools.
          structure.
        </p>
        <p>
          <i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Continuous evaluation through competitions andactivities.
        </p>
        <p>
          <i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Continuous evaluation through examination, competitions, and activities.
        </p>
        <p>
          <i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Placement support.
        </p>
        <p>
          <i class="fa-sharp fa-solid fa-circle-check"></i>{" "}
          &nbsp;&nbsp;Interaction design emphasizes on the framework, logic, feedback, overall structure and process, more importantly, the user experience.

        </p>
       
        <img src={img2} alt="" />
        <h2>Graphics Design</h2>
        <p className="react_text">
        Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.
        </p>
      </div>
    </div>
    <Read />
  </div>
  )
}

export default Graphicde
