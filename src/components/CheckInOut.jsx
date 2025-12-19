import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CheckInOut = () => {
  return (
    <>
      <Container fluid className="Whitesmoke">
        <Container className="d-flex justify-content-evenly p-4 align-items-center checkIn shadow-sm rounded-2">
          <div className="shadow-lg px-5 py-3 rounded-3 my-3">
            <div className="fs-5">Check In</div>
            <div className="my-2 ">2025-11-12</div>
          </div>
          <div className="shadow-lg px-5 py-3 rounded-3">
            <div className="fs-5">Check Out</div>
            <div className="my-2">2025-11-12</div>
          </div>
          <div className="shadow-lg px-5 py-3 rounded-3">
            <div className="fs-5">Guests</div>
            <div className="my-2">1 Room, 1 Adult, 0 Children</div>
          </div>
          <div className="">
            <Button
              href="https://cozystay.loftocean.com/mountain-chalet/?guests=1+Room%2C+1+Adult%2C+0+Children&room-quantity=1&adult-quantity=1&child-quantity=0&search_rooms=&checkin=2025-11-17&checkout=2025-11-18&roomSearchNonce=W3sibmFtZSI6Imd1ZXN0cyIsInZhbHVlIjoiMSBSb29tLCAxIEFkdWx0LCAwIENoaWxkcmVuIn0seyJuYW1lIjoicm9vbS1xdWFudGl0eSIsInZhbHVlIjoiMSJ9LHsibmFtZSI6ImFkdWx0LXF1YW50aXR5IiwidmFsdWUiOiIxIn0seyJuYW1lIjoiY2hpbGQtcXVhbnRpdHkiLCJ2YWx1ZSI6IjAifSx7Im5hbWUiOiJzZWFyY2hfcm9vbXMiLCJ2YWx1ZSI6IiJ9LHsibmFtZSI6ImNoZWNraW4iLCJ2YWx1ZSI6IjIwMjUtMTEtMTcifSx7Im5hbWUiOiJjaGVja291dCIsInZhbHVlIjoiMjAyNS0xMS0xOCJ9XQ%3D%3D"
              className="btnCheck "
            >
              Check Availability
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default CheckInOut;
