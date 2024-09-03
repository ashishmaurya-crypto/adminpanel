import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Assest } from '../../ReusableComponent/Assest/Assest';
import './Dashboard.scss';
import TabAboutUs from './TabAboutUs';

export default function Dashboard() {
  const [textareaHeight, setTextareaHeight] = useState('auto');
  const [aboutusTxt, setAboutusTxt] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  const [isEditable, setIsEditable] = useState(false);



  const handleTextareaChange = (event) => {
    setAboutusTxt(event.target.value)
    setTextareaHeight('auto');
    const { scrollHeight, clientHeight } = event.target;
    if (scrollHeight > clientHeight) {
      setTextareaHeight(`${scrollHeight}px`);
    }
  }

  return (
    <>
      <Container fluid className='aboutus-container'>
        <Row className='aboutus-title'>
          <Col className='d-flex justify-content-start'>
            <h4>Dashboard</h4>
          </Col>
        </Row>
        <Row className='mt-4'>
          <TabAboutUs />
        </Row>
      </Container>


    </>
  )
}
