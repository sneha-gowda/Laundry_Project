import React,{useState,useContext} from 'react';
import SummaryTable from "./SummaryTable.jsx";
import StoreAddress from "./StoreAddress.jsx";
import ClientAddress from "./ClientAddress.jsx";
import {EmptyOrdDatailContext} from "../CreateOrder.jsx"
import "./summary.css"
const Summary=(props)=>{
    const {clrorderDatail } = useContext(EmptyOrdDatailContext);
    const rows = props.orderDetail;
    const [storeLoc, setStoreLoc] = useState("");
    const handleStoreLoc=()=>{
        setStoreLoc("JP Nagar")
    }
    const placeOrder=async()=>{
        try{
        if(storeLoc===""){
            alert("Please select store location")
        }
        else{
            const token=localStorage.getItem("token")
            const response = await fetch("http://localhost:8006/order", {
                method: "POST",
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
                    "totalItems":props.totalQuantity,
                    "price":props.subTotal+90,
                    "orderDatail": props.orderDetail
                }),
            });
            if(response.status===200){
                const data= await response.json()
                props.setOrd(data);
                clrorderDatail();
                props.clsSummary();
            }
        }
        }catch(e){
            alert(e)
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