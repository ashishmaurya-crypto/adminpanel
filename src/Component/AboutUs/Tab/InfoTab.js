import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import './../AboutUs.scss';
import { TabData } from '../TabData/TabData';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Modal from '../../../ReusableComponent/Component/Model/Modal';
import EditContact from '../EditTab/EditContact';



export default function InfoTab() {
  const [isEditContact, setIsEditContact] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);
  const [isEditHoursofOperations, setIsEditHoursofOperations] = useState(false);
  const [isEditSociaMedia, setIsSociaMedia] = useState(false);
  const [isEditStatemnt, setIsEditStatemnt] = useState(false);

  const showContact = (key) => {
    if(key === 'Contact') {
      setIsEditContact(!isEditContact)
    }else if (key === 'Address'){
      setIsEditAddress(!isEditAddress)
    }else if (key === 'Hours of operations'){
      setIsEditHoursofOperations(!isEditHoursofOperations)
    }else if (key === 'Socia Media & Links'){
      setIsSociaMedia(!isEditSociaMedia)
    }else if (key === 'Statemnt'){
      setIsEditStatemnt(!isEditStatemnt)
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
                <div onClick={() => showContact(item.title)}>
                  {item.pencil}
                </div>
              </div>
              {item.title === 'Contact' ?
                <>
                  <div className='email-row w-100 mt-3'>
                    <div className='d-flex justify-content-start align-items-center w-75'>
                      <MdOutlineMailOutline fill='gray' />&nbsp;<span>{item.email[0]}</span>
                    </div>
                    <div className='w-25 d-flex justify-content-end align-items-center'>
                      <div className='red-badge'>
                        +{item.email.length}
                      </div>
                    </div>
                  </div>
                  <div className='phone-row d-flex justify-content-start align-items-center mt-2'>
                    <BsFillTelephoneFill fill='gray' />&nbsp;<span>34434343434</span>
                  </div>
                </> : item.title === 'Address' ?
                  <>
                    <div className='email-row'>
                      <div className='d-flex justify-content-start align-items-center mt-3'>
                        &nbsp;<span>{item.address}</span>
                      </div>
                    </div>
                  </>
                  : item.title === 'Hours of operations' ?
                    <>
                      <div className='email-row'>
                        <div className='d-flex justify-content-start align-items-center mt-3'>
                          &nbsp;<span>{item.timing}</span>
                        </div>
                      </div>
                    </> : item.title === 'Socia Media & Links' ?
                      <>
                        <div className='email-row'>
                          <div className='d-flex justify-content-center align-items-center mx-2 mt-3'>
                            {item.social.map((item) =>
                              <div className='mx-3'>
                                <div>{Object.values(item)}</div>
                                <div className='title-social'>{Object.keys(item)}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      </> : item.title === 'Statemnt' ?
                        <>
                          <div className='email-row w-100 mt-3'>
                            <div className='d-flex justify-content-start align-items-center w-75'>
                              &nbsp;<span>{item.statement}</span>
                            </div>
                            <div className='w-25 d-flex justify-content-end align-items-center'>
                              <div className='red-badge'>
                                +{2}
                              </div>
                            </div>
                          </div>
                        </> : null}
            </div>
          )}
        </Row>
      </Container>
      <Modal show={isEditContact} onClose={() => showContact('Contact')}>
        <EditContact onclose={() => showContact('Contact')} />
      </Modal>
      <Modal show={isEditAddress} onClose={() => showContact('Address')}>
        <h1>Address</h1>
      </Modal>
      <Modal show={isEditHoursofOperations} onClose={() => showContact('Hours of operations')}>
        <h1>Hours of operations</h1>
      </Modal>
      <Modal show={isEditSociaMedia} onClose={() => showContact('Socia Media & Links')}>
        <h1>Socia Media & Links</h1>
      </Modal>
      <Modal show={isEditStatemnt} onClose={() => showContact('Statemnt')}>
        <h1>Statement</h1>
      </Modal>
    </>
  )
}
