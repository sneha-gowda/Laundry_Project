import React from 'react';
import "./successAlert.css";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
const SuccessAlert=(props)=>{
  return (
    <>
      <div className='success-overlay'/>
      <div className='success-alert-box '>
    
          <div className='tick-icon-box'>
          <CheckOutlinedIcon className="ord-success" color="#5861ae"></CheckOutlinedIcon>
          </div>
          <div className="success-alert-msg-1">
            <h4>Your order is successfully.</h4>
          </div>
          <div className='success-alert-msg-2'>
              <p>You can track the delivery in "Orders" section</p>
          </div>
          <div className='success-btn'>
          <button onClick={props.gotoOrder} >Go to orders</button>
      </div>
      </div>
    </>

  )
}

export default SuccessAlert;
  