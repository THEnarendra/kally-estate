import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./BuilderSection.css";
import PropertyPopup from "../Popup/PropertyPopup";
import propertyData from "../../staticData/propertyData";

const BuilderSection = ({ propertyType }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();

  const openPopup = (property) => {
    setSelectedProperty(property);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProperty(null);
  };

  
  const spotlightProperties =
    propertyType === "Villas"
      ? propertyData.VillasData.filter((property) => property.featureType.includes("Spotlight"))
      : propertyData.LandData.filter((property) => property.featureType.includes("Spotlight"));

    
      const settings = {
        dots: true,
        infinite: spotlightProperties.length > 1, // Only allow infinite scroll if more than one property
        speed: 500,
        slidesToShow: Math.min(spotlightProperties.length, 1), // Show only available properties
        slidesToScroll: 1,
        autoplay: spotlightProperties.length > 1, // Only autoplay if there's more than one slide
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: spotlightProperties.length > 1, // Hide arrows if only one slide
      };
      
  return (
    <Container fluid>
      <Row className="builderSection-heading">
        <h1>
          {propertyType} in <span>Spotlight</span>
        </h1>
        <p>Our premium {propertyType.toLowerCase()} projects</p>
      </Row>

      <Slider {...settings}>
        {spotlightProperties.map((property) => (
          <div key={property.id} className="carousel-item">
            <Container className="gradient-container">
              <Row className="align-items-center">
                {/* Text Content */}
                <Col md={6} xs={12} className="text-content order-2 order-md-1">
                  <h3 className="property-name">{property.title}</h3>
                  <p className="property-description">{property.description}</p>
                  <p className="property-location">{property.location}</p>
                  <div className="display-flex">
                    <strong className="property-price">For Price: </strong>
                    <Button
                      variant="primary"
                      className="contact-btn"
                      onClick={() => openPopup(property)}
                    >
                      Contact Us
                    </Button>
                  </div>
                </Col>
                {/* Image */}
                <Col md={6} xs={12} className="image-container order-1 order-md-2">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="property-image"
                  />
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </Slider>

      {/* Popup */}
      {isPopupOpen && selectedProperty && (
        <PropertyPopup
          isOpen={isPopupOpen}
          onClose={closePopup}
          image={selectedProperty.images[0]}
          name={selectedProperty.title}
          price={selectedProperty.askprice}
          id={selectedProperty.id}
          propertyType={selectedProperty.propertyType}
          contactInfo={{
            phone: selectedProperty.contactInfo.phone,
            email: selectedProperty.contactInfo.email,
          }}
        />
      )}
    </Container>
  );
};

export default BuilderSection;
