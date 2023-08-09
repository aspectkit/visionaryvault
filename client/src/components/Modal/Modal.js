import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="modalCloseButton" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;