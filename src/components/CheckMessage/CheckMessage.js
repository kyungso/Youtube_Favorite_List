import React from 'react';

import './CheckMessage.scss';

const CheckMessage = ({ isOpen, close, handleOkBtn, message, btnMessage }) => {
  return (
    <>
    {isOpen ?
      <>
        <div className="checkMessage-overlay" onClick={close}/>
        <div className="checkMessage__container">
          <p className="checkTitle">{message}</p>
          <div className="checkBtn__wrap">
            <button onClick={handleOkBtn} className="okBtn">{btnMessage}</button>
            <button onClick={close} className="cancelBtn">취소</button>
          </div>
        </div>
      </>
      :
      null
    }
    </>
  );
};

export default CheckMessage;