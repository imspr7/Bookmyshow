import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
//import bg from "..bms1.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
             src='https://i.postimg.cc/w341kVMb/bms1.png'
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://i.postimg.cc/TKghfv9Z/bms2.jpg'
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://i.postimg.cc/L5Rg45Gv/bms3.avif'
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ControlledCarousel;
