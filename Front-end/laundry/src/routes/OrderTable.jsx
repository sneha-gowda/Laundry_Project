import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const OrderTable = (props) => {
    console.log(props.orders.length)
    if(props.orders.length === 0){
        return (<></>)
    }
    else{
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
            // hide last border
            "&:last-child td, &:last-child th": {
                border: 0
            }
        }));

        function createData(
            OrderId,
            OrderDateTime,
            StoreLocation,
            City,
            StorePhone,
            TotalItems,
            Price,
            Status,
            Cancel,
            View
        ) {
            return {
                OrderId,
                OrderDateTime,
                StoreLocation,
                City,
                StorePhone,
                TotalItems,
                Price,
                Status,
                Cancel,
                View
            };
        }
        // const order = [
        //     {
        //         _id: "61eff1c0403419d9a45870f6",
        //         Status: "washing",
        //         userId: "61eef8fca9dfa8836426c8ce",
        //         "Order Date and Time": "25 Jan 2022, 18:19",
        //         Price: 70,
        //         "Ordered Items": [
        //             {
        //                 product: "Shirt",
        //                 quantity: 2,
        //                 price: 10,
        //                 service: "Washing, Drying",
        //                 _id: "61eff1c0403419d9a45870f7"
        //             },
        //             {
        //                 product: "Saree",
        //                 quantity: 2,
        //                 price: 50,
        //                 service: "Washing, Drying",
        //                 _id: "61eff1c0403419d9a45870f8"
        //             },
        //             {
        //                 product: "Jeans",
        //                 quantity: 1,
        //                 price: 30,
        //                 service: "Washing",
        //                 _id: "61eff1c0403419d9a45870f9"
        //             }
        //         ],
        //         __v: 0
        //     }
        // ];
        console.log(props.orders)
        let order=props.orders;
        const handleCancel = (id) => {
            console.log("cancel");
        };
        const handleView = (id) => {
            console.log("View");
        };
        const rows = order.map((elem, id) => {
            return createData(
                elem._id.substring(18),
                elem["Order Date and Time"],
                "JP Nagar",
                "Banglore",
                "9876543211",
                elem["Ordered Items"].length,
                elem.Price,
                "Washing",
                id,
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
                            <StyledTableCell align="right">City</StyledTableCell>
                            <StyledTableCell align="right">Store Phone</StyledTableCell>
                            <StyledTableCell>Total Items</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right">View</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
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
                                <StyledTableCell align="right">{row.Status}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <button onClick={()=>handleCancel(row.Cancel)}>Cancel</button>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <button onClick={()=>handleView(row.Cancel)}>View</button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default OrderTable;