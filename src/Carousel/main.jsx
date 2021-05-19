import React from 'react';
import { Carousel, Nav } from 'react-bootstrap';
import laptop1 from "../imgs/slideShow/laptop1.jpg"
import laptops from "../imgs/slideShow/laptops.jpg"
import laptopss from "../imgs/slideShow/laptopss.jpg"
import laptopsss from "../imgs/slideShow/laptopsss.jpg"
import laptopa from "../imgs/slideShow/laptopa.jpg"

const Main = () => {
    return (
        <Carousel style={{
           marginTop:"8%"
        }}>
            
  <Carousel.Item>
    <img
     height = "600px"
      className="d-block w-100"
                    src={laptop1}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
 <img 
                    height="600px"
      className="d-block w-100"
      src={laptops}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
     
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      height= "600px"
      className="d-block w-100"
      src={laptopss}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
            <Carousel.Item>
                <img
                    height="600px"
                    className="d-block w-100"
                    src={laptopsss}
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height="600px"
                    className="d-block w-100"
                    src={laptopa}
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
            </Carousel.Item>
</Carousel>

    );
};

export default Main;