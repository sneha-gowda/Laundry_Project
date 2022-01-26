import React from 'react';
import POData from "./tableData/placeOrderData.jsx"
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./createOrder.css";
import CreateOrdTableRow from "./CreateOrdTableRow"
import { useNavigate } from "react-router-dom";

const navigate=useNavigate;
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));



const rows =POData

const CreateOrder=()=> {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Produt Types</StyledTableCell>
                        <StyledTableCell align="right">Quantity</StyledTableCell>
                        <StyledTableCell style={{"textAlign": "center"}} align="right">Wash Type</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Reset</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows.map((row,id)=>{
                        return (<CreateOrdTableRow key={id} row={row}/>)
                    })}
                </TableBody>
            </Table>
            <div className="submit-cancel-btn-container">
                <button onClick={()=>{navigate("/orders")}}>Cancel</button>
                <button>Proceed</button>
            </div>
        </TableContainer>
    );
}

export default CreateOrder;
