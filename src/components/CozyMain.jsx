import React from "react";
import image1 from "./images/img1.png";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CozyMain = () => {
  return (
    <>
      <Image className="img-1 " src={image1} />
      <Container fluid className="Whitesmoke padding">
        <Container className="cozy-main text-center text-white">
          <h1 className="cozy-title">Boutique Mountain Chalet</h1>
          <p className="text-center mt-3 cozy-para">
            The forest paradise of warmth, tranquility and restoration
          </p>
          <Button
            href="https://cozystay.loftocean.com/mountain-chalet/contact/"
            className="btn-main fw-bold fs-5 mt-3 hover-all  "
          >
            Enquire Now
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default CozyMain;
