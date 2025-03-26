import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Header.css";
import { home_slider } from "../../img/PropertyImages/propertyImages";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true, // Smooth fade transition
  };

  const sliderImages = Object.values(home_slider);

  return (
      <Row className="align-items-center header-container">
        {/* Left Text Section */}
        <Col lg={6} md={6} sm={12} className="text-container">
          <h1 className="header-title">Find Your Dream Property</h1>
          <h2 className="dynamic-text">
            Explore{" "}
            <span className="typing-effect">
              <Typewriter
                words={["Villas", "Farm Houses", "Luxury Apartments"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </h2>
          <p className="header-description">
            Discover handpicked properties crafted to perfection. Whether you're looking for 
            a farmhouse, an exquisite villa, or a modern apartment, or Lands to invest or Build .We bring you the best in your area.
            <br />
            <span>From Kally RealEstate</span>
          </p>
        </Col>

        {/* Right Image Slider Section */}
        <Col lg={6} md={6} sm={12} className="slider-container">
          <Slider {...settings}>
            {sliderImages.map((image, index) => (
              <div key={index} className="slider-image">
                <img src={image} alt={`Slide ${index + 1}`} className="image-overlay" />
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
  );
};

export default Header;
