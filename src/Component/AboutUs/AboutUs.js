import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import './AboutUs.scss';

export default function AboutUs() {
  const location = useLocation();
  const currentUrl = `${location.pathname}`;
  
  console.log("Current URL:", location);

  return (
    <>
      <Container fluid className='aboutus-container'>
        <Row className='aboutus-title'>
          <Col className='d-flex justify-content-start'>
            <h4>{currentUrl.replace('/', '').toUpperCase()}</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
}
