import React from 'react'
import card_one from './images/card_one.png'
import card_two from './images/card_two.png'
import card_three from './images/card_three.png'
import card_four from './images/card_four.png'
function Carousel() {
  return (
    <div className='row'>
    <div className='col'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img style={{height:'60vh', borderRadius:'20px'}} className='d-block w-100' src={card_one} alt='network error'/>
                  <div className="carousel-caption d-none d-md-block " style={{color:"whitesmoke"}}>
                    <h3> WELCOME TO FITNESS_AREA</h3>
                    <p>Thank You To Connect Us</p>
                  </div>
              </div>
              <div className="carousel-item">
                <img style={{height:'60vh',borderRadius:'20px'}} className='d-block w-100' src={card_two} alt='network error'/>
                  <div className="carousel-caption d-none d-md-block" style={{color:"whitesmoke"}}>
                    <h3>We Are Providing A Best Fitness Solution</h3>
                    <p>Fallow Our Instructions To Build Your Fitness</p>
                  </div>
                </div>
              <div className="carousel-item">
                  <img style={{height:'60vh',borderRadius:'20px'}} className='d-block w-100' src={card_three} alt='network error'/>
                  <div className="carousel-caption d-none d-md-block" style={{color:"whitesmoke"}}>
                    <h3>Perfect Look Make Us Impressive</h3>
                    <p>Every Activity Make You Perfect Day By Day</p>
                  </div>
              </div>
              <div className="carousel-item">
                  <img style={{height:'60vh',borderRadius:'20px'}} className='d-block w-100' src={card_four} alt='network error'/>
                  <div className="carousel-caption d-none d-md-block" style={{color:"whitesmoke"}}>
                    <h3>Join Us Now</h3>
                    <p style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#Registration">Register Here</p>
                  </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  </div>
  )
}

export default Carousel
