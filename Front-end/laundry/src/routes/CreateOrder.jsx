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
import { Link } from "react-router-dom";
import orderDetails from "./tableData/orderDetails.jsx";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));
const clothTypes = ["Shirt", "Saree", "Jeans", "Trousers", "Joggers","Suits","Gowns"];
let orderDatail = orderDetails;

const editQuantity = (id,num) => {
    orderDatail[clothTypes[id]].Quantity=num
}
const addService=(id,service) => {
    let index = orderDatail[clothTypes[id]].Service.push(service);
    // orderDatail[clothTypes[id]].Service.splice(index,1);
}
const removeService = (service,id) =>{
    let index = orderDatail[clothTypes[id]].Service.indexOf(service);
    orderDatail[clothTypes[id]].Service.splice(index, 1);
}

const rows =POData;
const Proceed = () => {
    console.log(orderDatail[clothTypes[0]])
}
const CreateOrder=()=> {
    // const navigate = useNavigate;
    // const CancelPO=() => { 
    //     navigate("/orders") 
    // }
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
                <button ><Link to="/orders" style={{ "textDecoration": "none", "color":"#5861AE"}}>Cancel</Link></button>
                <button onClick={Proceed}>Proceed</button>
            </div>
        </TableContainer>
    );
}

export default CreateOrder;
