import Carousel from 'react-bootstrap/Carousel';

import '../css/Slider.css';
function IndividualIntervalsExample() {
  
  return (
    <Carousel controls={false}>
      <Carousel.Item interval={1000}>

        
       <div id='show_bg_1'>
       <div className="text">
       <h1>Technology <br /> Grow Your Business.</h1>
        <p>We Have Best Services For Your Business</p>
        <div className="butt1">
          <button className="but1">SERVICE WE PROVIDE <i class="fa-solid fa-arrow-right"></i></button>
          <button className="but2">LEARN MORE <i class="fa-solid fa-arrow-right"></i></button>
        </div>
       </div>
       </div>
        
      </Carousel.Item>
      
      <Carousel.Item interval={1000} >
      <div  id='show_bg_2'>
      <div className="text">
       <h1> Grow Your IT <br />
       Tech Skill</h1>
        <p>We Have Industry Expert To Build Your Carrier</p>
        <div className="butt1">
          <button className="but1">SERVICE WE PROVIDE <i class="fa-solid fa-arrow-right"></i></button>
          <button className="but2">LEARN MORE <i class="fa-solid fa-arrow-right"></i></button>
        </div>
       </div>
      </div>
       
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;