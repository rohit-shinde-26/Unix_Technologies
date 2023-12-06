import React from "react";
import "../PagesCss/Reactdev.css";
import img3 from "../assets/image/img2.png";
import Classesform from "./Classesform";
import { Link } from "react-router-dom";
import Read from "../component/Read";
function Motiongra(){
  return (
    <div>
      <div className="img">
        <h1>Motion Graphics Design</h1>
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
          <h1>Key benefits of Motion Graphics Design:</h1>
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
            &nbsp;&nbsp;In this ever demanding program, the student will learn different Multimedia tools such as Computer graphics, Sound & Video Editing techniques
          </p>
        
          <img src={img3} alt="" />
          <h2>About Motion graphic design</h2>
          <p className="react_text">
          Motion graphic design, also known as motion design, is a subset of graphic design in that it uses graphic design principles in a filmmaking or video production context (or other temporally evolving visual media) through the use of animation or filmic techniques.
Motion graphics is animation, but with text as a major component. Essentially, it’s animated graphic design.
          </p>
        </div>
      </div>
      <Read />
    </div>
  );
  }


export default Motiongra;
