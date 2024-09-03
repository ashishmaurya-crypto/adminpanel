import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import './../Dashboard.scss';
import { TabData } from '../TabData/TabData';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Modal from '../../../ReusableComponent/Component/Model/Modal';
import EditContact from '../../Dashboard/EditTab/EditContact';



export default function InfoTab() {
  const [isEditContact, setIsEditContact] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);
  const [isEditHoursofOperations, setIsEditHoursofOperations] = useState(false);
  const [isEditSociaMedia, setIsSociaMedia] = useState(false);
  const [isEditStatemnt, setIsEditStatemnt] = useState(false);

  const showContact = (key) => {
    if(key === 'Contact') {
      setIsEditContact(!isEditContact)
    }
  }

  return (
    <>
      <Container fluid className='infotab-container p-0'>
        <Row className=''>
          {TabData.map((item, index) =>
            <div key={index} className='tag-tab'>
              <div className='contact-row'>
                <div className='d-flex align-items-center'>
                  {item.icon}&nbsp;<span> {item.title}</span>
                </div>
                <div className='cursor' onClick={() => showContact(item.title)}>
                  {item.pencil}
                </div>
              </div>
              {item.title === 'Contact' ?
                <>
                  <div className='email-row w-100 mt-3'>
                    <div className='d-flex justify-content-start align-items-center w-75'>
                      <MdEmail fill='#b8b6b6' />&nbsp;<span>
                        {item.email[0]}<span className='mx-1'>/</span> {item.email[1]}
                        </span>
                    </div>
                    <div className='w-25 d-flex justify-content-end align-items-center'>
                      <div className='red-badge'>
                        +{item.email.length}
                      </div>
                    </div>
                  </div>
                  <div className='phone-row d-flex justify-content-start align-items-center mt-2'>
                    <BsFillTelephoneFill fill='#b8b6b6' />&nbsp;<span className='phone-span'>{item.phone[0]} / {item.phone[1]}</span>
                  </div>
                </> : null}
            </div>
          )}
        </Row>
      </Container>
      <Modal show={isEditContact} onClose={() => showContact('Contact')}>
        <EditContact onclose={() => showContact('Contact')} />
      </Modal>
    </>
  )
}
