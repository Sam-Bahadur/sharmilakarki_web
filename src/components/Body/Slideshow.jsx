import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import car1 from "../../img/6.JPG";
import car2 from "../../img/2.jpg";
import car3 from "../../img/rall.JPG";
import car4 from "../../img/15.JPG";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slideshow.css";

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slideshow_container">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
        <Carousel.Item>
          <img className=" fit" src={car2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="fit" src={car1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="fit" src={car3} alt="third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 fit" src={car4} alt="fourth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
// render(<ControlledCarousel />);
