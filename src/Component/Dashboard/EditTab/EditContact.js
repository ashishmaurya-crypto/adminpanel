import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import './EditContact.scss'
import { Assest } from "../../../ReusableComponent/Assest/Assest";
import { Data } from './Data';

const data = Data.slice()
class EditContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onEdit: false,
            contactData: data,
            email: [],
            contact: [],
            indexData: {},
        }
    }

    handleDelete = (index) => {
        const newItems = [...this.state.contactData]; // create a copy of the original array
        newItems.splice(index, 1);
        this.setState({ contactData: newItems })
    }

    collectEmail = (index, value) => {
        const newItem = [...this.state.indexData.email];
        const result = { ...this.state.indexData };
        newItem.splice(index, 1, value);
        result['email'] = newItem;
        this.setState({ indexData: result });

    }

    collectContact = (index, value) => {
        const newItem = [...this.state.indexData.phone];
        const result = { ...this.state.indexData };
        newItem.splice(index, 1, value);
        result['phone'] = newItem;
        this.setState({ indexData: result });
    }

    handleSave = () => {
        const newItems = [...this.state.contactData];
        newItems.splice(this.state.indexNum, 1, this.state.indexData);
        this.setState({ contactData: newItems }, () => {
            alert('saved');
            this.setState({ onEdit: false })
        })
    }

    onEmailAdd = (index) => {
        const newItem = [...this.state.indexData.email];
        const result = { ...this.state.indexData };
        newItem.splice(index, 1, "");
        result['email'] = newItem;
        this.setState({ indexData: result },()=> console.log('result1', result));
    }

    onPhoneAdd = (index) => {
        const newItem = [...this.state.indexData.phone];
        const result = { ...this.state.indexData };
        newItem.splice(index, 1, "");
        result['phone'] = newItem;
        this.setState({ indexData: result },()=> console.log('result1', result));
    }

    render() {
        return (
            <>
                <Container className='p-4 editcontact-container position-relative'>
                    <Row>
                        <Col className='d-flex justify-content-start'>
                            <span className='d-flex align-items-center cursor'><FaLongArrowAltLeft onClick={() => (this.state.onEdit ? this.setState({ onEdit: false }) : this.props.onclose())} /></span>
                            <span className='mx-2'><h4 className='mt-2 contact-title'>Contacts</h4></span>
                        </Col>
                    </Row>
                    <Row className=''>
                        <p className=''>Please provide the comapny's email & contacts</p>
                    </Row>
                    {this.state.onEdit ?
                        <div className="overflow-div">
                            <Row className='mt-4'>
                                <Col className=''>
                                    <div className='edit-input'>
                                        {this.state.indexData.email.map((item, index) =>
                                            <>
                                                <label className='labal'>Email ID</label>
                                                <input key={index} value={item} onChange={(event) => this.collectEmail(index, event.target.value)} className='email-input' placeholder='eg. salesteams@br.in' />
                                            </>
                                        )}
                                        <button onClick={()=> this.onEmailAdd(this.state.indexData.email.length)} className='add-btn'><IoMdAddCircleOutline className='mb-1' /> Add More</button>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='my-4'>
                                <Col className=''>
                                    <div className='edit-input'>
                                        {this.state.indexData.phone.map((item, index) =>
                                            <>
                                                <label className='labal'>Contact Number</label>
                                                <input max={10} key={index} value={item} onChange={(event) => this.collectContact(index, event.target.value)} className='email-input' placeholder='eg. 8214352632' />
                                            </>
                                        )}
                                        <button onClick={()=> this.onPhoneAdd(this.state.indexData.email.length)} className='add-btn'><IoMdAddCircleOutline className='mb-1' /> Add More</button>
                                    </div>
                                </Col>
                            </Row>
                        </div> :
                        <div className="overflow-div">
                            <Row>
                                <Col>
                                    {this.state.contactData.map((item, index) =>
                                        <div key={index} className='tag-tab'>
                                            <div className='contact-row'>
                                                <div className='d-flex align-items-center'>
                                                    <Assest.ContactsBook fill="#b8b6b6" />&nbsp;<span>{item.title}</span>
                                                </div>
                                                <div>
                                                    <Assest.MdDelete onClick={() => this.handleDelete(index)} className='mx-2 cursor' fill="red" /><Assest.HiPencil  onClick={() => this.setState({ onEdit: true, indexNum: index, indexData: item })} className='mx-2 cursor' fill="red" />
                                                </div>
                                            </div>
                                            <div className='email-row w-100 mt-3'>
                                                <div className='d-flex justify-content-start align-items-center w-75'>
                                                    <MdEmail fill='#b8b6b6' />&nbsp;{item.email.map((item)=> <span className='mx-1'>{item}</span>)}
                                                </div>
                                            </div>
                                            <div className='phone-row d-flex justify-content-start align-items-center mt-2'>
                                                <BsFillTelephoneFill fill='#b8b6b6' />&nbsp;{item.phone.map((item)=> <span className='mx-1'>{item}</span>)}
                                            </div>
                                        </div>)}
                                </Col>
                            </Row>
                        </div>}
                    <Row>
                        <Col>
                            <button className='save-btn' onClick={() => (this.state.onEdit ? this.handleSave() : alert('Saved'))}>Save</button>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default EditContact