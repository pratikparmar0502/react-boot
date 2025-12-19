import React from "react";
import image2 from "./images/img2.png";
import image3 from "./images/img3.png";
import image4 from "./images/img4.png";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

const CozyResort = () => {
  return (
    <>
      <Container fluid className="Whitesmoke padding">
        <Container className="d-flex cozyResortMain shadow-lg">
          <Image className="img-2" src={image2} />
          <Image className="img-4" src={image4} />
          <Image className="img-3" src={image3} />
          <div className="text-center cozyResortMain2 text-white fw-normal">
            <p className="cozyResortChild1">Welcome To CozyStay Resort</p>
            <h1 className="cozyResortChild2">
              In the Heart of Banff Park, Outstanding Views
            </h1>
            <button className="cozyResortChild3 my-4">Explore the hotel</button>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default CozyResort;
