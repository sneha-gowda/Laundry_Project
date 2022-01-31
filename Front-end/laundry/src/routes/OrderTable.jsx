import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./orderTable.css";
import OrderTableRow from "./OrderTableRow.jsx"

const OrderTable = (props) => {
    if(props.orders.length === 0){
        return (<></>)
    }
    else{
       const updateOnCancel=(id)=>{
           props.orders[id].Status="Cancelled";
       }
        const StyledTableCell = styled(TableCell)(({ theme }) => ({
            [`&.${tableCellClasses.head}`]: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white
            },
            [`&.${tableCellClasses.body}`]: {
                fontSize: 14
            }
        }));


        function createData(OrderId,OrderDateTime,StoreLocation,City,StorePhone,TotalItems,Price,Status,Cancel,View
        ) {
            return {
                OrderId,OrderDateTime,StoreLocation,City,StorePhone,TotalItems,Price,Status,Cancel,View
            };
        };
        let order=props.orders;
        const rows = order.map((elem, id) => {
            return createData(
                elem._id.substring(18),
                elem["Order Date and Time"],
                "JP Nagar",
                "Banglore",
                "9876543211",
                elem["Total Items"],
                elem.Price,
                elem.Status,
                "Cancel order",
                id
            );
        });
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>OrderId</StyledTableCell>
                            <StyledTableCell align="right">Order Date & Time</StyledTableCell>
                            <StyledTableCell align="right">Store Location</StyledTableCell>
                            <StyledTableCell align="center">City</StyledTableCell>
                            <StyledTableCell align="right">Store Phone</StyledTableCell>
                            <StyledTableCell align="right">Total Items</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right">View</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row,id)=>{
                            return <OrderTableRow key={id} orderDetail={order[id].orderDatail} updateOnCancel={() => { updateOnCancel(id) }} row={row} id={id} ORDFullID={order[id]._id} />
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default OrderTable;

