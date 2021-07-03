import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap';

function HomeCarousel() {
    
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel001.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Maabara za sayansi</h3>
          <p>Baadhi ya wanafunzi wakiwa katika practicals.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel002.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Ukaribu kwa wanafunzi</h3>
          <p>Mkuu wa shule akiwa katika picha ya pamoja na baadhi ya wanafunzi wa kike.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel003.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Mazingira rafiki</h3>
          <p>
            Mazingira yanayopendeza na kuvutia kwa wanajamii wote.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel
