import React from 'react'

import "./cancleAlert.css"

const CancleAlert=(props)=> {
  const callCancelAPI= async()=>{
    try {
        const token = localStorage.getItem("token")
      const response = await fetch("http://localhost:8006/cancel", {
          method: "PUT",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify({
            "order_id":props.ORDFullID
          }),
        });
        if (response.status === 200) {
          props.handleCancelYes()
        }
        else{
          alert("Couldn't update" )
        }
      
    } catch (e) {
      alert(e)
    }

  }

  return (
    <>
      <div className='OVERLAY_STYLES'/>
      <div className='BOX_STYLES'>
    
          <div className='alert_header'> 
              <span> Alert </span> 
          <button style={{ "color": "red", "fontSize":"2em", "fontWeight": "bold", "border": "none", "backgroundColor":"transparent" }} onClick={props.handleCancelNo}>X</button>
          </div>
        <div className="containt">
            <div className='alert-icon'>
            <img src="https://www.freeiconspng.com/thumbs/alert-icon/alert-icon--free-icons-24.png" alt="alrt" height={30} width={34} />
            </div>
            <div className='alert-msg'>
            <span> Are you sure want to cancle the order No. {props.orderID}</span>
        </div >
        </div>
        
        <button className='proceed-btn' onClick={callCancelAPI}>Proceed</button>
        
    
      </div>
    </>
    
  )
}
export default CancleAlert;
