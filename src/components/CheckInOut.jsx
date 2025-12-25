import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CheckInOut = () => {
  return (
    <>
      <section className="check-in-wrapper">
        <Container>
          <div className="checkIn shadow-lg p-4 rounded-3">
            <Row className="align-items-center g-3">
              <Col xs={12} lg={3}>
                <div className="inner-box p-3 border-end-lg">
                  <div className="text-muted small fw-bold text-uppercase">
                    Check In
                  </div>
                  <div className="fw-bold fs-5 py-2">2025-11-12</div>
                </div>
              </Col>

              <Col xs={12} lg={3}>
                <div className="inner-box p-3 border-end-lg">
                  <div className="text-muted small fw-bold text-uppercase">
                    Check Out
                  </div>
                  <div className="fw-bold fs-5 py-2">2025-11-12</div>
                </div>
              </Col>

              <Col xs={12} lg={3}>
                <div className="inner-box p-3 border-end-lg">
                  <div className="text-muted small fw-bold text-uppercase">
                    Guests
                  </div>
                  <div className="fw-bold fs-5 py-2">1 Room, 1 Adult</div>
                </div>
              </Col>

              <Col xs={12} lg={3} className="text-center">
                <Button
                  href="https://cozystay.loftocean.com/..."
                  className="btnCheck w-100"
                >
                  Check Availability
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CheckInOut;
