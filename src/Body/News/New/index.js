import React, {useState} from 'react'
import ReactModal from 'react-modal';
import './css.css';

export default function Modal({title, text}) {

    const [open, setOpen] = useState(false);

    const handleCloseModal = () =>setOpen(false)
    const handleOpenModal = () =>setOpen(true)

    ReactModal.setAppElement('#root')
    return (
        <React.Fragment>
            <h3 className="new-title" onClick={handleOpenModal}>{title}</h3>
            <ReactModal
             isOpen={open}
             onRequestClose={handleCloseModal}
             className="Modal"
             overlayClassName="Overlay"
             >
              <div className="modal-content-new">
                  <h2 className="modal-title">{title}</h2>
                  <p className="modal-text">{text}</p>
              </div>
              <button className="button modal-close" onClick={handleCloseModal}>CERRAR</button>
             </ReactModal>
        </React.Fragment>
    )
}
