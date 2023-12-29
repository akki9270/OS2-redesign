// import { isMobile, isTablet } from 'react-device-detect'
import React from 'react'
import { toast } from 'react-toastify'
// import { Label } from 'reactstrap'

const Notification = ({ title, message }) => (
  <div>
    {title && <div className="text-md-center">
      <div style={{ fontSize: '20px' }}>{title}</div>
    </div>}
    {message && <div className="text-sm-center">
      <div style={{ fontSize: '13px' }}>{message}</div>
    </div>}
  </div>
);

const Toast = ({ title, message, type }) => {
  return toast(<Notification title={title} message={message} />, {
    type,
    position: toast.POSITION.TOP_RIGHT
  });
}

export default Toast;
