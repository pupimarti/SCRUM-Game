import React, {useState} from 'react'
import Modal from 'styled-react-modal'

export default function ModalNews(props) {
    const StyledModal = Modal.styled`
    width: 20rem;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.white};
  `
   
  function FancyModalButton() {
    const [isOpen, setIsOpen] = useState(false)
   
    function toggleModal(e) {
      setIsOpen(!isOpen)
    }
   
      return (
        <div>
          <button onClick={toggleModal}>{props.title}</button>
          <StyledModal
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}>
            {props.description}
            <button onClick={toggleModal}>Close me</button>
          </StyledModal>
        </div>
      )
    }
  }
