import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { Assest } from '../../ReusableComponent/Assest/Assest';
import './Style/Sidebar.scss'

function Sidebar(props) {
  return (
    <>
      <Container fluid className='sidebar hidden-on-mobile'>
        <Row className='px-3'>
          <img className='sidebarlogo-img' src={Assest.sidebarlogo} alt='logo'/>
        </Row>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <NavLink to={item.path} className={({ isActive }) => isActive ? "nav-text active" : item.cName}>
                {item.icon}
                <span className='title'>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
        <Row className='px-3 mt-4 need-help'>
          <Col className=''>
          <img className='my-1' width={20} src={Assest.questionlogo} alt='logo' />
           <h5>Need Help?</h5>
           <p>Our support team is at your disposal.</p>
           <button>Get Help</button>
          </Col>
        </Row>
      </Container>
      <Container fluid className='sidebar hidden-on-desktop'>
        <Row className='px-3'>
          <img className='sidebarlogo-img' src={Assest.sidebarlogo} alt='logo'/>
        </Row>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName} onClick={()=> props.onClose()}>
              <NavLink to={item.path} className={({ isActive }) => isActive ? "nav-text active" : item.cName}>
                {item.icon}
                <span className='title'>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
        <Row className='px-3 mt-4 need-help'>
          <Col className=''>
          <img className='my-1' width={20} src={Assest.questionlogo} alt='logo' />
           <h5>Need Help?</h5>
           <p>Our support team is at your disposal.</p>
           <button>Get Help</button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Sidebar;
