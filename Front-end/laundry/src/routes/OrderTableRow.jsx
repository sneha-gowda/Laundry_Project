
import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import  TableRow from '@mui/material/TableRow';
import "./orderTable.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState,useEffect } from "react";
import CancleAlert from "./CancleAlert"
import Modal from "react-modal";
import ViewSummary from "./Modalfld/ViewSummary.jsx"
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
    },
    "&:last-child td, &:last-child th": {
        border: 0
    }
}));


const OrderTableRow=(props)=>{
    const row=props.row;
    const id=props.id
    const [statusclr, setStatusclr] = useState({ "color": "black" });
    const [cncl, setCncl] = useState("Cancel Order");
    const [status, setStatus] = useState(row.Status);
    const [displayViewSummary, setdisplayViewSummary]= useState(false)
    useEffect(() =>{
        if (status === "Cancelled"){
            setStatusclr({"color":"red"})
            setCncl("")
        }
    },[status])

// --------------------------View Summary--------------------------------
    const handleView = (id) => {
        setdisplayViewSummary(true)
    };


// ---------------------Handling Cancel Order ----------------------------
    const [displayCancelAlert,setDisplayCancelAlert]= useState(false)
    const handleCancelYes = () => {
        row.status = ""
        setStatusclr({ "color": "red" });
        setCncl("");
        setStatus("Cancelled");
        props.updateOnCancel();
        setDisplayCancelAlert(false);
    };
    const handleCancelNo=()=>{
        setDisplayCancelAlert(false);
    }
    return(
    
        <>
            <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.OrderId}
                </StyledTableCell>
                <StyledTableCell align="right">
                    {row.OrderDateTime}
                </StyledTableCell>
                <StyledTableCell align="right">
                    {row.StoreLocation}
                </StyledTableCell>
                <StyledTableCell align="right">{row.City}</StyledTableCell>
                <StyledTableCell align="right">{row.StorePhone}</StyledTableCell>
                <StyledTableCell align="right">{row.TotalItems}</StyledTableCell>
                <StyledTableCell align="right">{row.Price}</StyledTableCell>
                <StyledTableCell align="right"><p style={statusclr}>{status}</p></StyledTableCell>
                <StyledTableCell align="right">
                    <button className="cancel-btn" onClick={() => { setDisplayCancelAlert(true)}}>{cncl}</button>
                </StyledTableCell>
                <Modal className="Cancel-model" isOpen={displayCancelAlert} onRequestClose={()=>{setDisplayCancelAlert(false)}}>
                    <CancleAlert handleCancelNo={handleCancelNo} handleCancelYes={handleCancelYes} orderID={row.OrderId} ORDFullID={props.ORDFullID}></CancleAlert>
                </Modal>
                <StyledTableCell align="right">
                    <button className="view-btn" onClick={() => handleView(row.Cancel)}><VisibilityIcon/></button>
                </StyledTableCell>
                <Modal className="View-Summary-model" isOpen={displayViewSummary} onRequestClose={() => { setdisplayViewSummary(false) }}>
                    <ViewSummary statusOfOrd={status} handleCancelYes={() => { setdisplayViewSummary(false); setDisplayCancelAlert(true) }} ORDFullID={props.ORDFullID} subTotal={row.Price-90} orderDetail={props.orderDetail}></ViewSummary>
                </Modal>
            </StyledTableRow>
        </>
    )
}

export default OrderTableRow;