
import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import './css.css';

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
`;

function FancyModalButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 10);
  }

  function beforeClose() {
    return new Promise(resolve => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  }

  return (
  <div className = "displayFlex">    
    <div className = "displayColumn">
        <div>
            <p className ="pNews" onClick={toggleModal}>>Dos estudiantes de Desarrollo de Software se unen al proyecto.</p>
            <StyledModal
                isOpen={isOpen}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
                opacity={opacity}
                backgroundProps={{ opacity }}
            >
                <div>
                    <h2>Nuevos Integrantes</h2>
                    <span>Y la rompen daleeeeeeeee!</span>
                </div>
                <div>
                <a href onClick={toggleModal}>Atrás</a>
                </div>
            </StyledModal>
        </div>
        <div>
            <p className ="pNews" onClick={toggleModal}>>Meten preso a lider de banda musical conocido como Charly.</p>
            <StyledModal
            isOpen={isOpen}
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
            opacity={opacity}
            backgroundProps={{ opacity }}
            >
            <div>
                <h3>Ultimo Momento</h3>
                <span>Preso charly daaedda dokadkoa wdadeae </span>
            </div>
            {/* <div>
                <a href onClick={toggleModal}>Atrás</a>
                </div> */}
            </StyledModal>
      </div>
    </div>
    <div className = "displayColumn">
        <div>
            <p className ="pNews" onClick={toggleModal}>>Dos estudiantes de Desarrollo de Software se unen al proyecto.</p>
            <StyledModal
                isOpen={isOpen}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}
                opacity={opacity}
                backgroundProps={{ opacity }}
            >
            <div>
                    <span>Y la rompen daleeeeeeeee!</span>
                </div>
            {/* <div>
                <a href onClick={toggleModal}>Atrás</a>
                </div> */}
            </StyledModal>
        </div>
        <div>
            <p className ="pNews" onClick={toggleModal}>>Meten preso a lider de banda musical conocido como Charly.</p>
            <StyledModal
            isOpen={isOpen}
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
            opacity={opacity}
            backgroundProps={{ opacity }}
            >
            <div>
                <h3>Ultimo Momento</h3>
                <span>Y la rompen daleeeeeeeee!</span>
            </div>
            {/* <div>
                <a href onClick={toggleModal}>Atrás</a>
                </div> */}
            </StyledModal>
      </div>
     </div>
    </div>  
  );
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`;

export default function News() {
    return (
        
        <ModalProvider backgroundComponent={FadingBackground}>
      <div className="content-width">
        <h2 className = "title">Novedades</h2>
        <FancyModalButton />
        <div className ="relleno"></div>
      </div>
     </ModalProvider>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<News />, rootElement);