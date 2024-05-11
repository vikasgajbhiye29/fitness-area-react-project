import React from 'react'
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import pic4 from './images/pic4.jpg'



function Home() {
  return (
    <div className='container my-2'>
      <div className='row'>
        <div className='col'>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img style={{height:'80vh'}} className='d-block w-100' src={pic1} alt='network error'/>
                      <div class="carousel-caption d-none d-md-block">
                        <h3> WELCOME TO FITNESS_AREA</h3>
                        <p>Thank You To Connect Us</p>
                      </div>
                  </div>
                  <div class="carousel-item">
                    <img style={{height:'80vh'}} className='d-block w-100' src={pic2} alt='network error'/>
                      <div class="carousel-caption d-none d-md-block">
                        <h3>We Are Providing A Best Fitness Solution</h3>
                        <p>Fallow Our Instructions To Build Your Fitness</p>
                      </div>
                    </div>
                  <div class="carousel-item">
                      <img style={{height:'80vh'}} className='d-block w-100' src={pic3} alt='network error'/>
                      <div class="carousel-caption d-none d-md-block">
                        <h3>Perfect Look Make Us Impressive</h3>
                        <p>Every Activity Make You Perfect Day By Day</p>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <img style={{height:'80vh'}} className='d-block w-100' src={pic4} alt='network error'/>
                      <div class="carousel-caption d-none d-md-block">
                        <h3>Join Us Now</h3>
                        <p style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#Registration">Register Here</p>
                      </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home

