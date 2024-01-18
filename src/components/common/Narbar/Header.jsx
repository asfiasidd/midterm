import React from 'react'
import '../Narbar/Header.css'

export default function Header() {
  return (
    <div>
      <header>
    <div class="logo">
    <h1>Skater</h1>
    </div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#Service">Service</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <div class="content-left">
      {/* <h1>Self</h1> */}
      <h2> Self Marketing</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, inventore consequuntur dicta accusantium  facilis dolor explicabo rerum magnam voluptatibus repudiandae. consequatur dicta et ex.</p>
      <button class="cta">learn more</button>
      </div>
    <div  class="content-right" >
   <img src="home.page.png"></img>
      </div>
      
  </main>
    </div>


  )
}


