import React from "react";
import image1 from "./images/img1.png";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CozyMain = () => {
  return (
    <>
      <div className="hero-parent">
        <Image className="img-1 " src={image1} />
        <div className="hero-child d-flex align-items-center justify-content-center">
          <Container className="text-center text-white">
            <h1 className="cozy-title">Boutique Mountain Chalet</h1>
            <p className="mt-3 cozy-para">
              The forest paradise of warmth, tranquility and restoration
            </p>
            <Button
              href="https://cozystay.loftocean.com/mountain-chalet/contact/"
              className="btn-main fw-bold fs-5 mt-4 hover-all  "
            >
              Enquire Now
            </Button>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CozyMain;
