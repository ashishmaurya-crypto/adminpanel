import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Assest } from '../../ReusableComponent/Assest/Assest';
import './AboutUs.scss';

export default function AboutUs() {

  return (
    <>
      <Container fluid className='aboutus-container'>
        <Row className='aboutus-title'>
          <Col className='d-flex justify-content-start'>
            <h4>About Us</h4>
          </Col>
        </Row>
      </Container>


    </>
  )
}
