import React from "react";
import image2 from "./images/img2.png";
import image3 from "./images/img3.png";
import image4 from "./images/img4.png";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";

const CozyResort = () => {
  return (
    <>
      <Container fluid className="padding">
        <Container className="position-relative cozyResortWrapper p-0 shadow-lg">
          <Row className="g-0">
            {" "}
            <Col xs={12} md={4}>
              <Image className="resort-img" src={image2} alt="Resort 1" />
            </Col>
            <Col xs={12} md={4}>
              <Image
                className="resort-img brightness-low"
                src={image4}
                alt="Resort 2"
              />
            </Col>
            <Col xs={12} md={4}>
              <Image className="resort-img" src={image3} alt="Resort 3" />
            </Col>
          </Row>
          <div className="cozyResortMain2">
            <p className="cozyResortChild1">Welcome To CozyStay Resort</p>
            <h1 className="cozyResortChild2">
              In the Heart of Banff Park, Outstanding Views
            </h1>
            <button className="cozyResortChild3">Explore the hotel</button>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default CozyResort;
