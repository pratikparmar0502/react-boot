import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Services = () => {
  return (
    <>
      <Container fluid className="servicesMain mx-auto p-5">
        <Container className="d-flex flex-wrap m-5 gap-5 justify-content-center align-items-center">
          <Card
            border="primary"
            style={{ width: "18rem" }}
            className="w-30 bg-dark border-0 text-white"
          >
            <Card.Body>
              <Card.Title className="my-2 pb-2 fs-3">
                Airport Pick-up Service
              </Card.Title>
              <Card.Text>
                Lorem ipsum proin gravida velit auctor alueut aenean sollicitu
                din, lorem auci elit consequat ipsutissem niuis sed odio sit
                amet a sit amet.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            border="primary"
            style={{ width: "18rem" }}
            className="w-30  bg-dark border-0 text-white"
          >
            <Card.Body>
              <Card.Title className="my-2 pb-2 fs-3">
                Housekeeper Services
              </Card.Title>
              <Card.Text>
                Lorem ipsum proin gravida velit auctor alueut aenean sollicitu
                din, lorem auci elit consequat ipsutissem niuis sed odio sit
                amet a sit amet.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            border="primary"
            style={{ width: "18rem" }}
            className="w-30  bg-dark border-0 text-white"
          >
            <Card.Body>
              <Card.Title className="my-2 pb-2 fs-3">
                Wifi & Internet
              </Card.Title>
              <Card.Text>
                Lorem ipsum proin gravida velit auctor alueut aenean sollicitu
                din, lorem auci elit consequat ipsutissem niuis sed odio sit
                amet a sit amet.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            border="primary"
            style={{ width: "18rem" }}
            className="w-30  bg-dark border-0 text-white"
          >
            <Card.Body>
              <Card.Title className="my-2 pb-2 fs-3">
                Laundry Services
              </Card.Title>
              <Card.Text>
                Lorem ipsum proin gravida velit auctor alueut aenean sollicitu
                din, lorem auci elit consequat ipsutissem niuis sed odio sit
                amet a sit amet.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            border="primary"
            style={{ width: "18rem" }}
            className="w-30  bg-dark border-0 text-white"
          >
            <Card.Body>
              <Card.Title className="my-2 pb-2 fs-3">
                Breakfast in Bed
              </Card.Title>
              <Card.Text>
                Lorem ipsum proin gravida velit auctor alueut aenean sollicitu
                din, lorem auci elit consequat ipsutissem niuis sed odio sit
                amet a sit amet.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            border="primary"
            style={{ width: "18rem" }}
            className="w-30  bg-dark border-0 text-white"
          >
            <Card.Body>
              <Card.Title className="my-2 pb-2 fs-3">
                Private Parking Space
              </Card.Title>
              <Card.Text>
                Lorem ipsum proin gravida velit auctor alueut aenean sollicitu
                din, lorem auci elit consequat ipsutissem niuis sed odio sit
                amet a sit amet.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default Services;
