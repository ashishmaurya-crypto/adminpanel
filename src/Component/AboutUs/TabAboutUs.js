import React, { Component } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';
import './AboutUs.scss';
import InfoTab from './Tab/InfoTab';
import FAQTab from './Tab/FAQTab';

export class TabAboutUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: "1",
        }
    }
    render() {
        return (
            <>
                <div className='tab-table'>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={this.state.activeTab === 1 ? "active" : ""}
                                onClick={() => this.setState({ activeTab: "1" })}
                            >
                                Info
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={this.state.activeTab === 2 ? "active" : ""}
                                onClick={() => this.setState({ activeTab: "2" })}
                            >
                                FAQ
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={this.state.activeTab === 3 ? "active" : ""}
                                onClick={() => this.setState({ activeTab: "3" })}
                            >
                                Complaints and feedback
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={this.state.activeTab === 4 ? "active" : ""}
                                onClick={() => this.setState({ activeTab: "4" })}
                            >
                                Privacy Policy
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={this.state.activeTab === 5 ? "active" : ""}
                                onClick={() => this.setState({ activeTab: "5" })}
                            >
                                Terms & Conditions
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12" className=''>
                                    <InfoTab/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12" className=''>
                                   <FAQTab/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12">
                                    <h4>
                                        Tab 3 Contents
                                    </h4>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12">
                                    <h4>
                                        Tab 4 Contents
                                    </h4>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="5">
                            <Row>
                                <Col sm="12">
                                    <h4>
                                        Tab 5 Contents
                                    </h4>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </>
        )
    }
}

export default TabAboutUs