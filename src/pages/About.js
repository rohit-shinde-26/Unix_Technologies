import React from "react";
import Read from "../component/Read";
import "../PagesCss/About.css";
import about_img from "../assets/image/about-us.jpg";
import about_img1 from "../assets/image/dot-circle.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="About_container">
      <div className="img">
        <h1>About Us</h1>
       <div className="home_container">
       <Link  to='/'>
              Home 
              </Link>
              <i class="fa-solid fa-chevron-right"></i> <h4>About Us</h4>
       </div>
      </div>

      <div className="about21">
        <div className="about22">
          <h5>ABOUT COMPANY</h5>
          <h1>
            Get’s IT Solutions For <br />
            Expert Consultants
          </h1>
          <p>
            At Unix Technologies, we believe that our success is achieved by
            providing quality service to our clients and by hiring only the best
            talent for our team. We have been able to provide innovative
            software solutions all the time to our clients.
          </p>

          <div className="user">
            <div className="user_icon">
              <i class="fa-solid fa-users"></i>
            </div>
            <div className="user_text">
              <h4>Our Focus</h4>
              <p>
                Our services include website design, website development, mobile
                application design and development, graphics design.
              </p>
            </div>
          </div>
        </div>
        <div className="about3">
          <div className="img22">
            <img src={about_img} alt="" />
          </div>
          <div className="img32">
            <img src={about_img1} alt="" />
            <div className="triangle-down-right"></div>
          </div>
        </div>
      </div>

      <div className="design">
        <div className="design1">
          <div className="design2">
            <i class="fa-solid fa-arrow-up-right-dots"></i>
          </div>
          <div className="design3">
            <h3>Graphics Design</h3>
            <p>Faster & Smarter Solutions</p>
          </div>
        </div>
        <div className="design1">
          <div className="design2">
            <i class="fa-solid fa-users"></i>
          </div>
          <div className="design3">
            <h3>Data Science</h3>
            <p>Faster & Smarter Solutions</p>
          </div>
        </div>
        <div className="design1">
          <div className="design2">
            <i class="fa-sharp fa-solid fa-desktop"></i>
          </div>

          <div className="design3">
            <h3>Web Development</h3>
            <p>Faster & Smarter Solutions</p>
          </div>
        </div>
      </div>
      <Read />
    </div>
  );
};

export default About;
