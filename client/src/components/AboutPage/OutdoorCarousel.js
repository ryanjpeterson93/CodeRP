import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Unicorn, Kayaking, WhitePine, Hiking, ZionHike} from './images/AboutImages'

function OutdoorCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 outdoorImg"
          src={Unicorn}
          alt="no picture"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 outdoorImg"
          src={Kayaking}
          alt="no picture"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 outdoorImg"
          src={WhitePine}
          alt="no picture"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 outdoorImg"
          src={Hiking}
          alt="no picture"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 outdoorImg"
          src={ZionHike}
          alt="no picture"
        />
        <Carousel.Caption>
          {/* <p>Information about a thing</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default OutdoorCarousel