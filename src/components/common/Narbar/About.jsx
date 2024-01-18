import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
    <div className="about-container">
      <div className="content-center">
        <h1>OUR TEAM</h1>
      
        <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, inventore consequuntur dicta accusantium facilis dolor explicabo rerum magnam voluptatibus repudiandae. consequatur dicta et ex.</p>
      
      </div>
     <section class="container">
      <div class="card">
        <div class="card-image car-1"></div>
        <h2>Sana Safe</h2>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti.</p>
        <br />
        <a href="">Read More</a>
      </div>


      <div class="card">
        <div class="card-image car-2"></div>
        <h2>usama usman</h2>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti.</p>
        <br />
        <a href="">Read More</a>
      </div>

      
      <div class="card">
        <div class="card-image car-3"></div>
        <h2>Fatima Noor</h2>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti.</p>
        <br />
        <a href="">Read More</a>
      </div>

     </section>

    </div>
    </div>
  );
};

export default About;
