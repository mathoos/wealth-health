import React from 'react';

const Modal = ({ show, handleClose, txt }) => {

  if (!show) {
        return null;
  }

    return (
        <div className="modal">
            <div className="modal_content">
                <div className="modal_content-close" onClick={handleClose}></div>
                <div className="modal_content-txt">
                    <p>{txt}</p>
                </div>             
            </div>
        </div>
    );
};

export default Modal;