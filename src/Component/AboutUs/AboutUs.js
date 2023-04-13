import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Assest } from '../../ReusableComponent/Assest/Assest';
import './AboutUs.scss';
import TabAboutUs from './TabAboutUs';

export default function AboutUs() {
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
            <h4>About Us</h4>
          </Col>
        </Row>
        <Row className='aboutus-logo-container mt-2'>
          <div className='w-100 d-flex justify-content-start'>
            <div className=''>
              <img className='aboutus-logo' src={Assest.aboutuslogo} alt='logo' />
            </div>
            <div className='mx-4 d-flex justify-content-start align-items-start'>
              <div className='mt-2 d-flex justify-content-start align-items-center'>
                <Assest.MdVerified fill='gray' /><span className='verify-title'>Verify Company</span>
              </div>
            </div>
          </div>
        </Row>
        <Row className='aboutus-textarea-container'>
          {isEditable ? <textarea
            className={isEditable ? 'aboutus-textarea' : 'aboutus-textarea-edit'}
            style={{ height: textareaHeight }}
            value={aboutusTxt}
            onChange={handleTextareaChange}
            disabled={isEditable ? false : true}
          />
            :
            <div className={isEditable ? 'aboutus-textarea' : 'aboutus-textarea-edit'}>
              <p>{aboutusTxt}</p>
            </div>}
          {isEditable ? <button className='edit-btn' onClick={() => setIsEditable(!isEditable)}>< Assest.editPencil fill='red' /></button> :
            <button className='edit-btn' onClick={() => setIsEditable(!isEditable)}><Assest.HiPencil fill='red' /></button>}
        </Row>
        <Row className='mt-4'>
          <TabAboutUs />
        </Row>
      </Container>


    </>
  )
}
