import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { MdOutlineStarPurple500 } from "react-icons/md";

const roomLinks = [
  {
    label: "Room page",
    href: "https://cozystay.loftocean.com/mountain-chalet/rooms/",
  },
  {
    label: "Room Details - Top image",
    href: "https://cozystay.loftocean.com/mountain-chalet/room/lakeside-inn/",
  },
  {
    label: "Room Details - Top Gallary 1",
    href: "https://cozystay.loftocean.com/mountain-chalet/room/meadow-chalet/",
  },
  {
    label: "Room Details - Top Gallary 2",
    href: "https://cozystay.loftocean.com/mountain-chalet/room/luxury-chalet/",
  },
  {
    label: "Room Details - Left Booking Form",
    href: "https://cozystay.loftocean.com/mountain-chalet/room/overlook-lodge/",
  },
  {
    label: "Room Details - Booking Rules Example",
    href: "https://cozystay.loftocean.com/mountain-chalet/room/family-suite/",
  },
  {
    label: "Cart",
    href: "https://cozystay.loftocean.com/mountain-chalet/cart/",
  },
  {
    label: "Checkout",
    href: "https://cozystay.loftocean.com/mountain-chalet/cart/",
  },
  {
    label: "My Account",
    href: "https://cozystay.loftocean.com/mountain-chalet/my-account/",
  },
];

const pageLinks = [
  {
    label: "About The Hotel",
    href: "https://cozystay.loftocean.com/mountain-chalet/about-the-hotel/",
  },
  {
    label: "Restaurant & Bars",
    href: "https://cozystay.loftocean.com/mountain-chalet/restaurants-bars/",
  },
  {
    label: "The Restaurant",
    href: "https://cozystay.loftocean.com/mountain-chalet/the-restaurant/",
  },
  {
    label: "Menu Page",
    href: "https://cozystay.loftocean.com/mountain-chalet/menu-page/",
  },
  {
    label: "Spa & Wellness",
    href: "https://cozystay.loftocean.com/mountain-chalet/spa-wellness/",
  },
  {
    label: "Events & Meetings",
    href: "https://cozystay.loftocean.com/mountain-chalet/events-meetings/",
  },
  {
    label: "Local Activities",
    href: "https://cozystay.loftocean.com/mountain-chalet/local-activities/",
  },
  {
    label: "Activity Detail Page",
    href: "https://cozystay.loftocean.com/mountain-chalet/activity-detail/",
  },
  {
    label: "Contact",
    href: "https://cozystay.loftocean.com/mountain-chalet/contact/",
  },
];

const ParentNav = () => {
  return (
    <>
      <Navbar expand="xl" fixed="top" className="bg-white py-2 shadow-sm ">
        <Container>
          <Navbar.Brand
            href="https://cozystay.loftocean.com/mountain-chalet/"
            className="fs-2 logo py-3"
          >
            <span style={{ letterSpacing: "1px", fontWeight: "bold" }}>
              COZYSTAY
            </span>
            <div className="d-flex justify-content-center align-items-center fs-6 p-0 m-0 text-warning">
              {[...Array(5)].map((_, index) => (
                <MdOutlineStarPurple500 key={index} />
              ))}
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="align-item-xl-center py-3 px-2 fs-5 gap-xl-4 fw-semibold ms-auto">
              <Nav.Link href="#">Home</Nav.Link>

              <NavDropdown title="Rooms" id="rooms-nav-dropdown">
                {roomLinks.map((link, index) => (
                  <NavDropdown.Item key={index} href={link.href}>
                    {link.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Pages" id="pages-nav-dropdown">
                {pageLinks.map((link, index) => (
                  <NavDropdown.Item key={index} href={link.href}>
                    {link.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link href="https://cozystay.loftocean.com/mountain-chalet/blog/">
                Blog
              </Nav.Link>

              <Nav.Link href="#">Tel: +41 22 345 67 88</Nav.Link>

              <Button className="btn-nav mt-3 mt-xl-0 fw-semibold fs-5 px-4 hover-all">
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
