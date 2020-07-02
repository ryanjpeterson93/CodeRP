import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { BelizeRuins, CinqueTerre, Coliseum, Iguanas, ItalySquare, PizaTower, ThailandMonkey} from './images/AboutImages'


function TravelCarousel() {
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
          alt="nothing to see here"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={CinqueTerre}
          alt="nothing to see here"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={ThailandMonkey}
          alt="nothing to see here"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={Coliseum}
          alt="nothing to see here"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={ItalySquare}
          alt="nothing to see here"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={PizaTower}
          alt="nothing to see here"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 aboutCarImg"
          src={Iguanas}
          alt="nothing to see here"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default TravelCarousel