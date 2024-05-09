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
          <h3>WELCOME TO FIINESS_AREA</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
      <img style={{height:'80vh'}} className='d-block w-100' src={pic2} alt='network error'/>
        <Carousel.Caption>
          <h3>We Are Providing A Best Fitness Solution</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'80vh'}} className='d-block w-100' src={pic3} alt='network error'/>
        <Carousel.Caption>
          <h3>C</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'80vh'}} className='d-block w-100' src={pic4} alt='network error'/>
        <Carousel.Caption>
          <h3>Join Us To Look Better</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}

export default Home

