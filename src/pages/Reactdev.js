import React from "react";
import "../PagesCss/Reactdev.css";
import img1 from "../assets/image/img1.png";
import Classesform from "./Classesform";
import { Link } from "react-router-dom";
import Read from "../component/Read";
function Reactdev(){
  return (
    <div>
      <div className="img">
        <h1>React Development</h1>
        <div className="home_container">
       <Link  to='/'>
              Home 
              </Link>
              <i class="fa-solid fa-chevron-right"></i> <h4>React Development</h4>
       </div>
      </div>

      <div className="React_container">
        <div className="react_container1">
          <Classesform />
        </div>
        <div className="react_container2">
          <h1>Key benefits of React.js for front-end development:</h1>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i>{" "}
            &nbsp;&nbsp;Ultimately boosts the speed of the development process.
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;React
            code is easier to maintain and is flexible due to its modular
            structure.
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;It
            helps to build rich user interfaces.
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Highly
            demand of React Developers.
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;High
            Salary Packages.
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i>{" "}
            &nbsp;&nbsp;Supports for latest technologies like
            Metaverse,Blockchain Development,NFT Development
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i>{" "}
            &nbsp;&nbsp;Training with live projects.
          </p>
          <img src={img1} alt="" />
          <h2>About React.js</h2>
          <p className="react_text">
            ReactJS developers are front-end developers who build modern-day UI
            components to improvise application performance. They leverage their
            knowledge about JavaScript, HTML, CSS and work closely with testers,
            designers, web designers, and project managers to create a robust
            and effective application.
          </p>
        </div>
      </div>
      <Read />
    </div>
  );
  }

export default Reactdev;
