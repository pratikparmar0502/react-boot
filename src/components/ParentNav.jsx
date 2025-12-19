import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { MdOutlineStarPurple500 } from "react-icons/md";

const ParentNav = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="bg-white py-2 shadow-sm">
        <Container>
          <Navbar.Brand
            href="https://cozystay.loftocean.com/mountain-chalet/"
            className="fs-2 logo py-3"
          >
            COZYSTAY
            <div className="d-flex justify-content-center align-items-center fs-6 p-0 m-0">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto py-3 px-2 fs-5 gap-4 lh-lg ps-5 fw-semibold d-flex w-100 justify-content-end ">
              <Nav.Link href="#">Home</Nav.Link>
              <NavDropdown title="Rooms" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/rooms/">
                  Room page
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/room/lakeside-inn/">
                  Room Details - Top image
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/room/meadow-chalet/">
                  Room Details - Top Gallary 1
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/room/luxury-chalet/">
                  Room Details - Top Gallary 2
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/room/overlook-lodge/">
                  Room Details - Left Booking Form
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/room/family-suite/">
                  Room Details - Booking Rules Example
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/cart/">
                  Cart
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/cart/">
                  Checkout
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/my-account/">
                  My Account
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/about-the-hotel/">
                  About The Hotel
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/restaurants-bars/">
                  Restaurant & Bars
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/the-restaurant/">
                  The Restaurant
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/menu-page/">
                  Menu Page
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/spa-wellness/">
                  Spa & Wellness
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/events-meetings/">
                  Events & Meetings
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/local-activities/">
                  Local Activities
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/activity-detail/">
                  Activity Detail Page
                </NavDropdown.Item>
                <NavDropdown.Item href="https://cozystay.loftocean.com/mountain-chalet/contact/">
                  Contact
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="https://cozystay.loftocean.com/mountain-chalet/blog/">
                Blog
              </Nav.Link>
              <Nav.Link href="#">Tel: +41 22 345 67 88</Nav.Link>
              <Button className="btn-nav fw-semibold fs-5 hover-all">
                Enquire Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ParentNav;
