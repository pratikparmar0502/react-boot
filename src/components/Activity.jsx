import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import image8 from "./images/img8.png";
import image9 from "./images/img9.png";
import image10 from "./images/img10.png";

const Activity = () => {
  return (
    <>
      <Container fluid className="padding Whitesmoke">
        <Container className="text-center">
          <section className="text-center pt-5">
            <p className="text-uppercase">More Than Just Mountain View </p>
            <h1 className="activityTitle1">Unforgettable Experience</h1>
          </section>
          <section className="d-flex justify-content-between align-items-center padding">
            <div className="shadow-sm">
              <Card
                style={{ width: "23rem" }}
                className="borderGray Whitesmoke  imgHover overflow-hidden"
              >
                <Image className="img-8" src={image8} />
                <span className="RoomPrice">$120 / PERSON</span>
                <Card.Body className="p-3 m-1 text-start Whitesmoke">
                  <p className="activitySpan">Outdoors</p>
                  <Card.Title className="activityTitle">
                    Mountain Hiking
                  </Card.Title>
                  <Card.Text className="pb-1">
                    With over 1,600 kilometres (994 miles) of trails, Banff
                    National Park offers adventurers some of the best hiking on
                    the planet.
                  </Card.Text>
                  <button className="RoomBtn">Discover Trip</button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <div
                style={{ width: "27rem" }}
                className="borderGray shadow-sm position-relative imgHover overflow-hidden"
              >
                <Image className="img-9" src={image9} />
                <span className="RoomPrice">$120 / PERSON</span>
                <div className="p-4 text-start position-absolute activityMainCard">
                  <p className="activitySpan pb-1">Nature</p>
                  <h2 className="activityTitle pb-1">Padding Tour</h2>
                  <p className="pb-1">
                    Benff National Parl's biggest lake allows you to paddle for
                    miles and enjoy breathtaking views.
                  </p>
                  <button className="activityBtn">Discover Trip</button>
                </div>
              </div>
            </div>
            <div className="shadow-sm">
              <Card
                style={{ width: "23rem" }}
                className="borderGray Whitesmoke imgHover overflow-hidden"
              >
                <Image className="img-10" src={image10} />
                <span className="RoomPrice">$120 / PERSON</span>
                <Card.Body className="p-4 text-start">
                  <p className="activitySpan">Outdoors</p>
                  <Card.Title className="activityTitle">
                    Camping Tour
                  </Card.Title>
                  <Card.Text className="pb-1">
                    Banff offers a range of camping spots allowing you to
                    experience all of this most gorgeous park’s outdoor
                    splendour.
                  </Card.Text>
                  <button className="RoomBtn">Discover Trip</button>
                </Card.Body>
              </Card>
            </div>
          </section>
          <section className="text-center activityParaParent">
            <p className="activityPara pb-4">
              Within the Chalet itself, very detail is pre-planned and
              orchestrated to ensure guests have the best possible experience of
              mountain life.
            </p>
            <Button className="activityBtn2 fs-5">
              Discover All Activities
            </Button>
          </section>
        </Container>
      </Container>
    </>
  );
};

export default Activity;
