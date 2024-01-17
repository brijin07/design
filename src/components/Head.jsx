import React from "react";
import { Navbar, Nav, Container, Col, Row, Carousel } from 'react-bootstrap';


function Head() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="navbarr">
        <Container fluid>
          <Navbar.Brand href="#home">
            <i className="fa-solid fa-bars fa-lg" style={{ color: "white" }}></i>
          </Navbar.Brand>
        
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <i className="fa-regular fa-user fa-lg" style={{ color: "white" }}></i>
              </Nav.Link>
            </Nav>
            <div className="icoo">
              {/* Update the image source with the correct URL */}
              <img src="https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-vector-tick-icon-png-image_987312.jpg" alt="" style={{width:"40px",height:"40px"}} />
            </div>
           <div className="d-flex  justify-content-evenly">
             
                <Nav.Link href="#deets">
                  <i className="fa-regular fa-heart fa-lg" style={{ color: "white" }}></i>{" "}
                </Nav.Link>
                <Nav.Link href="#deets" className="ps-5">
                  <i className="fa-solid fa-magnifying-glass fa-lg" style={{ color: "white" }}></i>{" "}
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes"className="ps-5">
                  <i className="fa-solid fa-bag-shopping fa-lg" style={{ color: "white" }}></i>{" "}
                </Nav.Link>
           </div>
          
        </Container>
      </Navbar>

      <Container fluid>
      <Row>
        <Col>
          <Carousel id="carouselExample" className="mt-2" indicators={false} controls={false} interval={3000}>
            <Carousel.Item>
              <p className="text-center">Free express shipping over $300 USD</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="text-center">Easy return</p>
            </Carousel.Item>
            <Carousel.Item>
              <p className="text-center">Free express shipping over $300 USD</p>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>


    </>
  );
}

export default Head;
