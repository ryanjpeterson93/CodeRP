import React, { useState } from 'react'
// import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import { BelizeRuins, CinqueTerre, Coliseum, Iguanas, ItalySquare, PizaTower, ThailandMonkey, Hiking, MeGDog } from './images/AboutImages'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={BelizeRuins}
          alt="no picture"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={CinqueTerre}
          alt="no picture"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={ThailandMonkey}
          alt="no picture"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={Coliseum}
          alt="no picture"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={ItalySquare}
          alt="no picture"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={PizaTower}
          alt="no picture"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={Iguanas}
          alt="no picture"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const AboutMe = () => (
  <>
    <div className="aboutDiv">
      <div className="aboutColumn1">
        <h4> About Me </h4>
        <p> Take a look at what I am about Take a look at what I am about Take a look at what I am about Take a look at what I am about Take a look at what I am about Take a look at what I am about Take a look at what I am about Take a look at what I am about Take a look at what I am about Take a look at what I am about </p>
      </div>
      <div className="aboutColumn2">
        <div className="aboutImg">
          <img src={MeGDog} id="MeGDog" />
        </div>
      </div>
    </div>

    <div className="aboutDiv">
      <div className="aboutColumn2">
        <div className="aboutImg">
          <img src={Hiking} id="MeGDog" />
        </div>
      </div>
      <div className="aboutColumn1">
        <h4> Interests </h4>
        <p> Talk about some stuff that you like to do, including some stuff about like hiking and camping and maybe through in something about games. </p>
      </div>
    </div>

    <div id="aboutDivCarousel">
      <div id="aboutCarColumn1">
        <h4> Traveling</h4>
        <p> I LOVE to travel. My partner and I try to get out of the country as often as possible. Checkout some of the places we have been. </p>
      </div>
      <div id="aboutCarColumn2">
        {ControlledCarousel()}
      </div>
    </div>


    <div className="aboutDiv">
      <h4> Education? </h4>
      <p> Talk a bit about what you have learned </p>
    </div>

  </>
)

export default AboutMe;