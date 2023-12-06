import React from "react";
import "../PagesCss/Reactdev.css";
import img4 from "../assets/image/img4.png";
import Classesform from "./Classesform";
import { Link } from "react-router-dom";
import Read from "../component/Read";

function Datas(){
  return (
    <div>
      <div className="img">
        <h1>Data Science</h1>
        <div className="home_container">
       <Link  to='/'>
              Home 
              </Link>
              <i class="fa-solid fa-chevron-right"></i> <h4>Data Science</h4>
       </div>
      </div>

      <div className="React_container">
        <div className="react_container1">
          <Classesform />
        </div>
        <div className="react_container2">
          <h1>Data Science and Data Analytics:</h1>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i>{" "}
            &nbsp;&nbsp;Data Mining.
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Machine learning.
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Data Visualization and modeling.
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Marketing Analytics.

          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i> &nbsp;&nbsp;Social Media and Web Analytics.
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i>{" "}
            &nbsp;&nbsp;Cyber Security Analytics
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i>{" "}
            &nbsp;&nbsp;Marketing Analytics.
          </p>
          <img src={img4} alt="" />
          <h2>Tools:</h2>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i>{" "}
            &nbsp;&nbsp;Tableau.
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i>{" "}
            &nbsp;&nbsp;PowerBI.
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i>{" "}
            &nbsp;&nbsp;Python.
          </p>
          <p>
            <i class="fa-sharp fa-solid fa-circle-check"></i>{" "}
            &nbsp;&nbsp;R.
          </p>

          <h2>About Data Science</h2>
          <p className="react_text">
          A data scientist's duties can include developing strategies for analyzing data, preparing data for analysis, exploring, analyzing, and visualizing data, building models with data using programming languages, such as Python and R, and deploying models into applications. The data scientist doesn't work solo.
          </p>
        </div>
      </div>
      <Read />
    </div>
  );
  }



export default Datas;
