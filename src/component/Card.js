import React from 'react'
import '../css/Card.css'

import img1 from '../assets/image/img1.png'
import img2 from '../assets/image/img2.png'
import img3 from '../assets/image/img2.png'
import img4 from '../assets/image/img4.png'




const Card = () => {
  return (
    <div className='Card_container'>
        <div className="text22">
            <p>POPULAR IT SERVICES</p>
            <h2>Solutions For IT Business</h2>
        </div>
        <div className="card-1">
            <div className="card2">
            <div className="card14">
                <img src= {img1}alt=""/>
                <figcaption><h2>React Development</h2>
            <p>Become expert React Developer</p></figcaption>
                
            </div>
            <div className="hovertext">
                    <p>Become expert User Interface developer, our 6 months program will make you expert in HTML,CSS, SASS, Javascript and React. Also you get 100% placement assistance.
                </p>
                <button className='butn_learn'>Learn More&nbsp; <i class="fa-solid fa-arrow-right"></i></button>

                </div>
            </div>
           <div className="card2">
           <div className="card14">
            <img src= {img2}alt="" />
            <figcaption><h2>React Development</h2>
            <p>Become expert React Developer</p></figcaption>
            
            </div>
            <div className="hovertext">
                    <p>Become expert User Interface developer, our 6 months program will make you expert in HTML,CSS, SASS, Javascript and React. Also you get 100% placement assistance.
                </p>
                <button className='butn_learn'>Learn More&nbsp; <i class="fa-solid fa-arrow-right"></i></button>

                </div>
           </div>
           <div className="card2">
           <div className="card14">
            <img src= {img3}alt="" />
            <figcaption><h2>React Development</h2>
            <p>Become expert React Developer</p></figcaption>
            
            </div>
            <div className="hovertext">
                    <p>Become expert User Interface developer, our 6 months program will make you expert in HTML,CSS, SASS, Javascript and React. Also you get 100% placement assistance.
                </p>

                <button className='butn_learn'>Learn More&nbsp; <i class="fa-solid fa-arrow-right"></i></button>

                </div>
           </div>
          <div className="card2">
          <div className="card14">
            <img src= {img4}alt="" />
            <figcaption><h2>React Development</h2>
            <p>Become expert React Developer</p></figcaption>
           

            </div>
            <div className="hovertext">
                    <p>Become expert User Interface developer, our 6 months program will make you expert in HTML,CSS, SASS, Javascript and React. Also you get 100% placement assistance.
                </p>
                <button className='butn_learn'>Learn More&nbsp; <i class="fa-solid fa-arrow-right"></i></button>
                </div>
          </div>
        </div>
      
    </div>
  )
}

export default Card