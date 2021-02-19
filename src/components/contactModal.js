import React, { useState } from 'react'
import styled from 'styled-components'

import ContactButton from './contactButton'

const Modal = styled.div`
  position: fixed;
  left: 13%;
  width: 75vw;
  height: 75vh;
  z-index: 100;
  background-color: white;
  border: 5px solid #C1DBE3;
  border-radius: 15px;
`

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
`

const ContactModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ContactButton click={() => setModalOpen(!modalOpen)} />
      <ModalBackground style={{
        display: `${modalOpen ? 'block' : 'none'}`
      }} />
      <Modal style={{
        display: `${modalOpen ? 'block' : 'none'}`
      }}
        onClick={() => setModalOpen(false)}>
        {modalOpen ? 'open' : 'close'}

      </Modal>
    </>
  )
}

export default ContactModal
