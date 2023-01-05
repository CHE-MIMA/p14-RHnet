import React from 'react';
const Modal = ({ openModal, closeModal }) => {
    if (openModal) {
        console.log("modal open");
        return (
            <div className="modal-container">
                <div className="modal-content">
                    <button className="close-modal" onClick={closeModal}>
                        x
                    </button>
                </div>
                <h2 className="title-modal">Employee Created !</h2>


            </div>
        );
    }
};
export default Modal

