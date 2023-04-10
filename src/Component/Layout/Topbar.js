import React, { Component } from 'react';
import './Style/Topbar.scss';
import { Container, Row, Col } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Assest } from '../../ReusableComponent/Assest/Assest';


export class Topbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isProfileOpen: true,
            collapse: false,
        }
    }

    showProfile = () => {
        this.setState({ isProfileOpen: !this.state.isProfileOpen, collapse: !this.state.collapse });
    }

    render() {
        return (
            <>
                <div className='topbar-container'>
                    <Container fluid className='topbar'>
                        <Row className='w-100 d-flex align-items-center'>
                            <Col className='px-5 mx-1 d-flex justify-content-start align-items-center logo-container'>
                                <img width={70} src={Assest.logo} />
                            </Col>
                            <Col className='px-4 d-flex justify-content-start align-items-center Search-container'>
                                <div className='Searchbar'>
                                    <Assest.BsSearch className='Searchbar-img' fill='gray' />
                                    <input className='Searchbar-input' placeholder='Search...' />
                                </div>
                            </Col>
                            <Col className='px-4 d-flex justify-content-end align-items-center'>
                                <button className='checkout-btn'><Assest.ShoppingCart /> &nbsp;&nbsp;Checkout(200)</button>
                                <span onClick={() => this.showProfile()}>
                                    <Assest.CgProfile className='profile-img' />
                                    <button className='useradmin-btn'>User Admin</button>
                                    {this.state.isProfileOpen ? <Assest.GoChevronDown /> : <Assest.GoChevronUp />}
                                </span>

                            </Col>
                        </Row>
                    </Container>
                    <Collapse
                        isOpen={this.state.collapse}
                    >
                        <Card>
                            <CardBody>
                               <ul>
                                <li>Logout</li>
                               </ul>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>



            </>
        )
    }
}

export default Topbar