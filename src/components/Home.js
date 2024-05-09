import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import pic4 from './images/pic4.jpg'



function Home() {
  return (
    <div className='container my-2'>
       <Carousel>
      <Carousel.Item>
        <img style={{height:'80vh'}} className='d-block w-100' src={pic1} alt='network error'/>
        <Carousel.Caption>
          <h3> WELCOME TO FITNESS_AREA</h3>
          <p>Thank You To Connect Us</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
      <img style={{height:'80vh'}} className='d-block w-100' src={pic2} alt='network error'/>
        <Carousel.Caption>
         <h3>We Are Providing A Best Fitness Solution</h3>
          <p>Fallow Our Instructions To Build Your Fitness</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'80vh'}} className='d-block w-100' src={pic3} alt='network error'/>
        <Carousel.Caption>
          <h3>Perfect Look Make Us Impressive</h3>
          <p>Every Activity Make You Perfect Day By Day</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'80vh'}} className='d-block w-100' src={pic4} alt='network error'/>
        <Carousel.Caption>
          <h3>Join Us Now</h3>
          <p>Register Here</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}

export default Home

