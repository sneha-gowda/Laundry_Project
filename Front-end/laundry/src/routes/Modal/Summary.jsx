import React,{useState} from 'react';
import SummaryTable from "./SummaryTable.jsx";
import StoreAddress from "./StoreAddress.jsx";
import ClientAddress from "./ClientAddress.jsx";
import "./summary.css"
const Summary=(props)=>{
    const rows = props.orderDetail;
    console.log(rows,"rowsin summary",props)
    const [storeLoc, setStoreLoc] = useState("");
    const handleStoreLoc=()=>{
        setStoreLoc("JP Nagar")
    }
    const placeOrder=()=>{
        if(storeLoc===""){
            alert("Please select store location")
        }
        else{
           alert("yooo") 
        }
    }
    return (
        <>
            <div className="summary">
                <section className="summary-header">
                    <h1>Summary</h1>
                </section>
                <section className="summary-body">
                    <StoreAddress setStoreLoc={handleStoreLoc}></StoreAddress>
                    <SummaryTable  rows={rows} subTotal={props.subTotal}></SummaryTable>
                    <ClientAddress></ClientAddress>
                </section>
                <section className="summary-footer">
                    <div className="submit-ord-btn-container">
                        <button onClick={placeOrder} className="submit-ord-btn">
                            Confirm
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Summary;