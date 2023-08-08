import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstSlideImage from '../assets/hero.jpg';
import secondSlideImage from '../assets/tylerSmith.jpg';
import './About.css';


const About = () => {
  return (
    <div className="container">
      <div className="row justify-content-center down">
        <div className="col-md-5">
          <h1>
            {/* What do we wnat the title for this to be? */}
            Visionary Vault
          </h1>
          <p>
            {/* What do we want to say? */}
            Welcome to our site! 
            We hope that you find it enjoyable and easy to navigate. 
            We are a team of four who have set out to create a page where artists can show off their work!
            Users are able to purchase artwork from Artist through their page. Simply click the Commission Button!
          </p>
        </div>
      </div>

      <div className="row justify-content-center carouselRow">
        <div className="col-md-7">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                // need to change these to group photos add links to pages
                src={firstSlideImage}
                alt="First slide"
              />
              <Carousel.Caption>
              <a href="https://trace-martin.github.io/trace-martin-rport/" target='_blank' className='carouselText'>Trace Martin</a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                // need to change these to group photos add links to pages
                src={firstSlideImage}
                alt="Second slide"
              />
              <Carousel.Caption>
              <a href="https://trace-martin.github.io/trace-martin-rport/" target='_blank' className='carouselText'>Tyler Smith</a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                // need to change these to group photos add links to pages
                src={firstSlideImage}
                alt="Third slide"
              />
              <Carousel.Caption>
              <a href="https://trace-martin.github.io/trace-martin-rport/" target='_blank' className='carouselText'>Kit Dhingra</a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                // need to change these to group photos add links to pages
                src={firstSlideImage}
                alt="Third slide"
              />
              <Carousel.Caption>
              <a href="https://trace-martin.github.io/trace-martin-rport/" target='_blank' className='carouselText'>Michael Gibson</a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default About;