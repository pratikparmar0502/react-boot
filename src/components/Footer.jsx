import Image from "react-bootstrap/Image";
import image_15 from "./images/img1.png";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <section className="pt-2 position-relative">
        <Image src={image_15} className="img-15" />
        <div className="footerMain padding d-flex align-items-center">
          <div className="footerChild1">
            <h2 className="logo">COZYSTAY</h2>
            <p className="pt-3 lh-base">
              Founded in 1998, CozyStay Resort is located on the hills of
              Zermatt, immersing you in the wonder of the Swiss Alps against the
              pure sky. Welcome to CozyStay, Zermatt.
            </p>
          </div>
          <div className="footerChild2 text-start">
            <h3 className="">About Us</h3>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Premium Services</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footerChild3 text-start">
            <h3 className="">Experiences</h3>
            <ul className="">
              <li>
                <a href="#">Dining</a>
              </li>
              <li>
                <li>
                  <a href="#">Spa & Wellness</a>
                </li>
                <li>
                  <a href="#">Local Activities</a>
                </li>
                <li>
                  <a href="#">Meetings</a>
                </li>
                <a href="#">Our Menu</a>
              </li>
            </ul>
          </div>
          <div className="footerChild4">
            <h3>Reach Out</h3>
            <p>Guidino 25, 6900, Lugano, Switzerland</p>
            <p>information@cozystay.com</p>
            <p>+41 22 345 67 88</p>
            <p className="footerChild4_P4">Get Directions</p>
          </div>
        </div>
      </section>
      <Container fluid className="footBottom">
        <Container className="d-flex align-items-center">
          <div className="footBottom1">
            <p className="m-0">
              © Copyright CozyStay WordPress Theme for Hotel Booking.
            </p>
          </div>
          <div className="d-flex align-items-center gap-4 footBottom2">
            <li>
              <a href="#">PRIVACY</a>
            </li>
            <li>
              <a href="#">TERMS OF USE</a>
            </li>
            <li>
              <a href="#">POLICY</a>
            </li>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
