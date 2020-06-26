import React, { useState } from 'react'
// import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/black.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h4>Title</h4>
          <p>Information about a thing</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/black.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h4>Title</h4>
          <p>Information about a thing</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/black.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4>Title</h4>
          <p>Information about a thing</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const AboutMe = () => (
  <>
    <div className="aboutDiv1">
      <h1> About Me </h1>
      <p> Take a look at what I am about </p>
    </div>

    <div className="aboutDiv2">
      <h4> About Me (in a nut shell) </h4>
      <p> Background Information </p>
    </div>

    <div className="aboutDiv4">
      <h4> Interests </h4>
      <p> I like to do these kinds of things </p>
    </div>

    {ControlledCarousel()}

    <div className="aboutDiv4">
      <h4> Education? </h4>
      <p> Talk a bit about what you have learned </p>
    </div>

  </>
)

export default AboutMe;