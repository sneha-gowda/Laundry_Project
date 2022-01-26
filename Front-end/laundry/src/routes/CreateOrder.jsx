import React from 'react';

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));



const rows = [
    {
        _id: "61ed33b32fa5e9f0a5bb771e",
        Price: 10,
        ImageURL:
            "https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg",
        ProductName: "Shirt"
    },
    {
        _id: "61ed342e2fa5e9f0a5bb771f",
        ProductName: "Saree",
        Price: 50,
        ImageURL:
            "https://media.glamour.com/photos/5fda4db65bafc7ef56c335eb/1:1/w_1800,h_1800,c_limit/jeans.jpeg"
    },
    {
        _id: "61ed34f22fa5e9f0a5bb7721",
        ProductName: "Jeans",
        Price: 20,
        ImageURL:
            "https://media.glamour.com/photos/5fda4db65bafc7ef56c335eb/1:1/w_1800,h_1800,c_limit/jeans.jpeg"
    },
    {
        _id: "61ed35162fa5e9f0a5bb7722",
        ProductName: "Trousers",
        Price: 30,
        ImageURL:
            "https://media.glamour.com/photos/5fda4db65bafc7ef56c335eb/1:1/w_1800,h_1800,c_limit/jeans.jpeg"
    },
    {
        _id: "61ed353b2fa5e9f0a5bb7723",
        Price: 20,
        ImageURL:
            "https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg",
        ProductName: "Joggers"
    },
    {
        _id: "61ed355a2fa5e9f0a5bb7724",
        ProductName: "Suits",
        Price: 50,
        ImageURL:
            "https://media.glamour.com/photos/5fda4db65bafc7ef56c335eb/1:1/w_1800,h_1800,c_limit/jeans.jpeg"
    },
    {
        _id: "61ed356d2fa5e9f0a5bb7725",
        ProductName: "Gowns",
        Price: 50,
        ImageURL:
            "https://media.glamour.com/photos/5fda4db65bafc7ef56c335eb/1:1/w_1800,h_1800,c_limit/jeans.jpeg"
    }
];

const CreateOrder=()=> {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Produt Types</StyledTableCell>
                        <StyledTableCell align="right">Quantity</StyledTableCell>
                        <StyledTableCell style={{"text-align": "center"}} align="right">Wash Type</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Reset</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows.map((row)=>{
                        return (<CreateOrdTableRow row={row}/>)
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CreateOrder;
