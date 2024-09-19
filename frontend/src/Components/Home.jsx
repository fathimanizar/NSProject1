import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import i1 from '../Images/i1.jpg';
import i2 from '../Images/i3.jpg';
import i3 from '../Images/i4.jpg';
const Home = () => {
  return (
    <div>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={i2} class="d-block w-100" alt="..." height={500}></img>
    </div>
    <div class="carousel-item">
      <img src={i1} class="d-block w-100" alt="..." height={500}></img>
    </div>
    <div class="carousel-item">
      <img src={i3} class="d-block w-100" alt="..." height={500}></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Home