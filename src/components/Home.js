import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    // <Container>
        <Carousel variant='dark' id='carousel'>
        <Carousel.Item>
            <a href='./NewestWebResume.pdf' download><img
            className="d-block w-100 carousel-img"
            src="./blue-gradient.jpg"
            alt="First slide"
            height={700}
            /></a>
            <Carousel.Caption>
            <h3>Resume</h3>
            <p>Download my resume here</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <a href='/Portfolio'><img
            className="d-block w-100 carousel-img"
            src='./lilac-gradient.jpg'
            alt="Second slide"
            height={700}
            /></a>

            <Carousel.Caption>
            <h3>Portfolio</h3>
            <p>See a collection of my works here</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <a href='/AboutMe'><img
            className="d-block w-100 carousel-img"
            src="./orange-gradient.jpg"
            alt="Third slide"
            height={700}
            /></a>

            <Carousel.Caption>
            <h3>About Me</h3>
            <p>
                Learn more about me here
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    // </Container>
  );
}