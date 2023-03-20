import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="slider"
          src="img/slider1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="slider_caption">
          <h3>COLORAMA COLLECTION</h3>
          <Button variant="outline-dark" className="shop">SHOP NOW</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider"
          src="img/slider2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="slider_caption">
          <h3>ISLAND BREEZE COLLECTION</h3>
          <Button variant="outline-dark" className="shop">SHOP NOW</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    // <Carousel fade>
    //   <Carousel.Item>
    //     <img
    //       className="slide1"
    //       src="/img/slide1.jpg"
    //       alt="colorama"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="slide2"
    //       src="/img/slide2.jpg"
    //       alt="island breeze"
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
  
    // </Carousel>
  );
}

export default CarouselFadeExample;