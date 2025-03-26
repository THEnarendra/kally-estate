import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PropertyDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRulerCombined,
  faBed,
  faBath,
  faChild,
  faHome,
  faCompass,
  faCouch,
  faMapMarkerAlt,
  faRoad,
  faBuilding,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import propertyData from "../../staticData/propertyData";
import { useParams } from "react-router-dom";

export default function PropertyDetails() {
  const [showAll, setShowAll] = useState(false);
  const { id, route } = useParams();
  const apartments =
    route === "Lands"
      ? propertyData.LandData
      : route === "Villas"
      ? propertyData.VillasData
      : route === "Farm%20Houses"
      ? propertyData.FarmHouseData
      : propertyData.FlatsData;

  const property = apartments.find((property) => property.id === parseInt(id));

  const handleShowAll = () => {
    setShowAll(true);
  };

  const imagesToShow = showAll
    ? property?.images
    : property?.images.slice(0, 6);
  const remainingCount = property?.images.length - 6;

  const renderVillaDetails = () => (
    <>
      <Row>
        <Col md={3}>
          <h5>Property Details</h5>
          <ul className="propertyDetails-list">
            <li>
              <FontAwesomeIcon icon={faBed} />{" "}
              {property?.propertyDetails.bedrooms} Bedrooms
            </li>
            <li>
              <FontAwesomeIcon icon={faBath} />{" "}
              {property?.propertyDetails.bathrooms} Bathrooms
            </li>
            {property?.propertyDetails.kidsRoom && (
              <li>
                <FontAwesomeIcon icon={faChild} />{" "}
                {property?.propertyDetails.kidsRoom} Kids Room
              </li>
            )}
            {property?.propertyDetails.studyRoom && (
              <li>
                <FontAwesomeIcon icon={faHome} />{" "}
                {property?.propertyDetails.studyRoom} Study Room
              </li>
            )}
            <li>
              <FontAwesomeIcon icon={faCompass} />{" "}
              {property?.propertyDetails.facing} Facing
            </li>
            {property?.propertyDetails.drawingRoom && (
              <li>
                <FontAwesomeIcon icon={faCouch} /> Drawing Room
              </li>
            )}
            {property?.propertyDetails.servantRoom && (
              <li>
                <FontAwesomeIcon icon={faHome} /> Servant Room
              </li>
            )}
          </ul>
        </Col>
        <Col md={3}>
          <h5>Features</h5>
          <ul className="propertyDetails-list">
            <li>{property?.propertyDetails.features.interior}</li>
            <li>{property?.propertyDetails.features.furnished}</li>
            <li>{property?.propertyDetails.features.approvals}</li>
            {property?.propertyDetails.features.separatePatta && (
              <li>Separate Patta Available</li>
            )}
          </ul>
        </Col>
        <Col md={3}>
          <h5>Furniture</h5>
          <p>{property?.propertyDetails.features.furniture?.join(", ")}</p>
        </Col>
        <Col md={3}>
          <h5>Kitchen</h5>
          <p>{property?.propertyDetails.features.kitchen?.join(", ")}</p>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <h5>Security</h5>
          <p>{property?.propertyDetails.features.security?.join(", ")}</p>
        </Col>
        {property?.propertyDetails.features.additionalFeatures && (
          <Col md={3}>
            <h5>Additional Features</h5>
            <p>
              {property?.propertyDetails.features.additionalFeatures.join(", ")}
            </p>
          </Col>
        )}
        <Col md={3}>
          <h5>Nearby</h5>
          <p>{property?.propertyDetails.nearby?.join(", ")}</p>
        </Col>
      </Row>
    </>
  );

  const renderLandDetails = () => (
    <>
      <Row>
        <Col md={3}>
          <h5>Land Details</h5>
          <ul className="propertyDetails-list">
            <li>
              <FontAwesomeIcon icon={faRulerCombined} />{" "}
              {property?.propertyDetails.dimensions}
            </li>
            <li>
              <FontAwesomeIcon icon={faCompass} />{" "}
              {property?.propertyDetails.facing} Facing
            </li>
            <li>
              <FontAwesomeIcon icon={faRoad} /> Road Width:{" "}
              {property?.propertyDetails.roadWidth}
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} /> Land Use:{" "}
              {property?.propertyDetails.landUse}
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <h5>Approvals</h5>
          <p>{property?.propertyDetails.approvals?.join(", ")}</p>
        </Col>
        <Col md={3}>
          <h5>Legal Status</h5>
          <ul className="propertyDetails-list">
            <li>
              <FontAwesomeIcon icon={faFileSignature} /> Registry:{" "}
              {property?.propertyDetails.registryStatus}
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <h5>Amenities</h5>
          <p>{property?.propertyDetails.amenities?.join(", ")}</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h5>Nearby</h5>
          <p>{property?.propertyDetails.nearby?.join(", ")}</p>
        </Col>
      </Row>
    </>
  );

  return (
    <>
      <Container className="propertyDetails-page">
        <Row>
          <Col md={8}>
            <Row>
              {imagesToShow.map((img, index) => (
                <Col key={index} md={4}>
                  {index === 5 && !showAll && remainingCount > 0 ? (
                    <div
                      className="propertyImages-overlay"
                      onClick={handleShowAll}
                    >
                      <img
                        className="propertyImages"
                        src={img}
                        alt={`Image ${index + 1}`}
                      />
                      <div className="overlay-text">+{remainingCount}</div>
                    </div>
                  ) : (
                    <img
                      className="propertyImages"
                      src={img}
                      alt={`Image ${index + 1}`}
                    />
                  )}
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4} className="get-contact">
            <div className="sticky-contact">
              <h5>Contact Dealer</h5>
              <p>
                {property?.contactInfo?.phone && (
                  <>
                    {property?.contactInfo?.name || "JP Kumawat"} <br />-{" "}
                    {property?.contactInfo?.phone}
                  </>
                )}
              </p>
              {property?.askprice && (
                <div className="price-info">
                  <h5>Price</h5>
                  <p>{property?.askprice}</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row className="propertyDetails-info">
          <Col>
            <h4>{property?.title}</h4>
            <h5>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {property?.location}
            </h5>
            <p>
              <FontAwesomeIcon icon={faRulerCombined} />{" "}
              {property?.propertyDetails.dimensions},{" "}
              {property?.propertyDetails.size}
            </p>
            <hr />
            {route === "Lands" ? renderLandDetails() : renderVillaDetails()}
          </Col>
        </Row>
      </Container>
      <Container className="footer-container-unit">
        <h2>Designed by JSLEE Interior Designers </h2>
        <h3>- a unit of Kally Estate</h3>
      </Container>
    </>
  );
}