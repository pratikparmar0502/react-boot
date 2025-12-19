import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import image5 from "./images/img5.png";
import image6 from "./images/img6.png";
import image7 from "./images/img7.png";

const CozyRoom = () => {
  return (
    <>
      <Container fluid className="Whitesmoke padding">
        <Container>
          <p className="cozyRoom1">Enjoy World-class Stay Experience</p>
          <h1 className="cozyRoom2">Select Your Chalet</h1>
          <p className="cozyRoom3">
            Escape to the beautiful mountains and valleys where dreams come
            true. Culture, nature, streams and gastronomy. Immerse yourself in
            the restorative qualities of nature, far from the disturbances of
            everyday life.
          </p>
        </Container>
        <Container className="d-flex justify-content-between padding py-5">
          <div className="shadow-sm borderGray">
            <Card
              style={{ width: "25rem" }}
              className="imgHover overflow-hidden"
            >
              <Image className="img-5" src={image5} />
              <span className="RoomPrice">$299 / NIGHT</span>
              <Card.Body className="Whitesmoke Roombg">
                <Card.Title className="RoomTitle">Family Suite</Card.Title>
                <Card.Text className="RoomPara">
                  The dark wood panelling and furnishings, red-draped fourposter
                  bed, and black stone bathroom evoke the charm of secluded
                  Sierra Neveda.
                </Card.Text>
              </Card.Body>
              <Card.Body className="Whitesmoke Roombg">
                <button className="RoomBtn">Discover More</button>
              </Card.Body>
            </Card>
          </div>
          <div className="shadow-sm borderGray">
            <Card
              style={{ width: "25rem" }}
              className="imgHover overflow-hidden"
            >
              <Image className="img-6" src={image6} />
              <span className="RoomPrice">$199 / NIGHT</span>
              <Card.Body className="Whitesmoke">
                <Card.Title className="RoomTitle">Deluxe Room</Card.Title>
                <Card.Text className="RoomPara">
                  The dark wood panelling and furnishings, red-draped fourposter
                  bed, and black stone bathroom evoke the charm of secluded
                  Sierra Neveda.
                </Card.Text>
              </Card.Body>
              <Card.Body className="Whitesmoke">
                <button className="RoomBtn">Discover More</button>
              </Card.Body>
            </Card>
          </div>
          <div className="shadow-sm borderGray">
            <Card
              style={{ width: "25rem" }}
              className="imgHover overflow-hidden"
            >
              <Image className="img-7" src={image7} />
              <span className="RoomPrice">$299 / NIGHT</span>
              <Card.Body className="Whitesmoke">
                <Card.Title className="RoomTitle">Double Suite</Card.Title>
                <Card.Text className="RoomPara">
                  The dark wood panelling and furnishings, red-draped fourposter
                  bed, and black stone bathroom evoke the charm of secluded
                  Sierra Neveda.
                </Card.Text>
              </Card.Body>
              <Card.Body className="Whitesmoke">
                <button className="RoomBtn ">Discover More</button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default CozyRoom;
