import React,{useState,useEffect} from 'react';
import SummaryTable from "./SummaryTable.jsx";
import Status from "./Status.jsx";
import "./summary.css"
const Summary = (props) => {
    const rows = props.orderDetail;
    console.log(rows, "rowsin summary", props, "tq", props.totalQuantity)
    const [displayCnlBtn, setDisplayCnlBtn] = useState({ "display": "inline" })
    console.log(props.statusOfOrd)
    useEffect(()=>{
        if (props.statusOfOrd ==="Cancelled"){
            setDisplayCnlBtn({"display":"none"})
        }
        else{
            setDisplayCnlBtn({"display":"inline"})
        }
    },[props.statusOfOrd])
    const cancelOrder = async () => {
        props.handleCancelYes()
    }
    return (
        <>
            <div className="View-summary">
                <section className="summary-header">
                    <h1>Summary</h1>
                </section>
                <section className="summary-body">
                    <section className="summary-store-add">
                        <div>
                            <h4>Store Location</h4>
                            <h6>JP Nagar</h6>
                        </div>
                        <div>
                            <h4>Store Address</h4>
                            <h6>Near Phone booth, 10th road,</h6>
                        </div>
                        <div>
                            <h4>Store Address</h4>
                            <h6>9876543211</h6>
                        </div>
                    </section>
                    <Status status={"Washed"}></Status>
                    <SummaryTable rows={rows} subTotal={props.subTotal}></SummaryTable>
                    <section className="summary-client-address">
                        <h6>Address</h6>
                        <div className="c-add-btn">
                            <div className="c-address">
                                <h2>Home</h2>
                                <h6>#223, 10th road, Jp Nagar, Bangalore</h6>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="view-summary-footer">
                    <div className="cancel-ord-btn-container">
                        <button type="button" onClick={cancelOrder} className="cancel-orddd-btn" style={displayCnlBtn} >
                            Cancel
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Summary;