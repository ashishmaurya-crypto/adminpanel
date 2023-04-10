import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export class Dashboard extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col className='d-flex justify-content-start'>
              <h4>Dashboard</h4>
            </Col>
          </Row>
        </Container>


      </>
    )
  }
}

export default Dashboard