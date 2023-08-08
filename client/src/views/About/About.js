import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstSlideImage from '../assets/hero.jpg';
import secondSlideImage from '../assets/tylerSmith.jpg';
import './About.css';


const About = () => {
  return (
    <div className="container">
      <div className="row justify-content-center down">
        <div className="col-md-10">
          <h1>Who are we?</h1>
            <p>
              Welcome to Visionary Vault, your online destination for exploring and supporting the incredible world of art and creativity. 
              We are a dedicated team of four junior web developers who share a passion for both technology and the arts. 
              Our project was born from the desire to provide a platform where talented artists can showcase their work and connect with art enthusiasts worldwide.
            </p>

            <h3>Our Vision</h3>
              <p>
                At Visionary Vault, our vision is simple yet powerful: to create a space where artists can freely express themselves and art lovers can discover captivating pieces that resonate with them. 
                As a team of junior developers, we understand the importance of bridging the gap between the digital realm and the artistic one. 
                Our goal is to empower artists to share their unique perspectives and creativity through our intuitive and user-friendly platform.
              </p>

            <h3>What We Offer</h3>
              <p>
                Our platform features an expansive gallery that showcases a diverse range of artworks from emerging artists across various mediums. 
                Whether you're drawn to paintings, sculptures, digital art, or other forms of artistic expression, you'll find a wealth of inspiration within Visionary Vault. 
                Each artwork is accompanied by in-depth information about the artist, their background, and their creative process, providing a deeper connection between creator and audience.
              </p>

            <h3>Our Commitment</h3>
              <p>
                As junior developers, we understand the value of continuous growth and improvement. 
                That's why we're committed to enhancing Visionary Vault based on user feedback and evolving industry trends. 
                We believe in fostering a supportive community that encourages artists to thrive and art enthusiasts to engage with the creative journey. 
                Your experience on Visionary Vault is important to us, and we're dedicated to making it as enjoyable and seamless as possible.
              </p>

            <h3>Connect with Us</h3>
              <p>
                We're excited to embark on this journey with you and invite you to join us in celebrating the beauty of art in all its forms. Whether you're an artist looking to share your creations or an art lover seeking inspiration, Visionary Vault is the platform where innovation meets imagination. Feel free to explore the gallery, connect with artists, and become a part of our growing community.
              </p>
              <p>
                Thank you for joining us on this artistic adventure.
              </p>

              <p>Sincerely,</p>
              <p>The Visionary Vault Team</p>
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