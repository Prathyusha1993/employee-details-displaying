import React from 'react'

const Modal = ({ onClose, isOpen, children }) => {
    if(!isOpen) return null;
    
    return (
        <div style={modalOverlayStyle}>
            <div style={modalStyle}>
                <button onClick={onClose} style={closeButtonStyle}>X</button>
                {children}
            </div>

        </div>
    )
};

const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
const modalStyle = {
    position:'relative',
    backgroundColor: '#fff',
    padding: '20px',
  borderRadius: '8px',
  width: '400px',
};

const closeButtonStyle = {
    position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
}

export default Modal;