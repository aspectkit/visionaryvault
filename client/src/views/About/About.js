import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstSlideImage from '../assets/cloud.jpg';
import './About.css';

const About = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h1>
            {/* What do we wnat the title for this to be? */}
            Title
          </h1>
          <p>
            {/* What do we want to say? */}
            Welcome to our site! 
            We hope that you find it enjoyable and easy to navigate. 
            We are a team of four who have set out to create a page where artists can show off their work!
          </p>
        </div>
      </div>

      <div className="row justify-content-center carouselRow">
        <div className="col-md-8">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                // need to change these to group photos add links to pages
                src={firstSlideImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className='carouselText'>First slide label</h3>
                <p className='carouselText'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                <h3 className='carouselText'>Second slide label</h3>
                <p className='carouselText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                <h3 className='carouselText'>Third slide label</h3>
                <p className='carouselText'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default About;