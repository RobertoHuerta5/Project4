import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export default function HomePage() {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/HomePageImage4.jpeg" alt="Slide1" />
        <Carousel.Caption>
        <h1>AutoIQ</h1>
        <p>Sign in to continue</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src="/images/HomePageImage2.jpg" alt="Slide2"/>
        <Carousel.Caption>
        <h1>AutoIQ</h1>
        <p>Sign in to continue</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src="/images/HomePageImage3.jpg" alt="Slide3"/>
        <Carousel.Caption>
        <h1>AutoIQ</h1>
        <p>Sign in to continue</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
    
  )
}
