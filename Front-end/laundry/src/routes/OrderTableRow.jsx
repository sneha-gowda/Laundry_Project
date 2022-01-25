
import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import  TableRow from '@mui/material/TableRow';
import "./orderTable.css";
import { useState } from "react";

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
    console.log(props.orders)
    const handleCancel = (id) => {
        console.log("cancel", id);
        row.status = ""
        setStatusclr({ "color": "red" });
        setCncl("")
    };
    const handleView = (id) => {
        console.log("View");
    };
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
                <StyledTableCell align="right"><p style={statusclr}>{row.Status}</p></StyledTableCell>
                <StyledTableCell align="right">
                    <button className="cancel-btn" onClick={() => handleCancel(id)}>{cncl}</button>
                </StyledTableCell>
                <StyledTableCell align="right">
                    <button className="view-btn" onClick={() => handleView(row.Cancel)}>View</button>
                </StyledTableCell>
            </StyledTableRow>
        </>
    )
}

export default OrderTableRow;