import React from 'react';
import Washing from "./img/washing-machine.jpg";
import Ironing from "./img/ironing.svg";
import Fold from "./img/towel.svg";
import Bleach from "./img/bleach.svg";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./createOrder.css"

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
                        <StyledTableCell align="right">Wash Type</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Reset</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell style={{"width":"30vw" }} align="right">
                                <div className="product-details">
                                    <div className="Pimage">
                                        <img src={row.ImageURL} alt="" height={50} width={50} />
                                    </div>
                                    <div className="Pname">
                                        <h2>{row.ProductName}</h2>
                                        <p>Lorem Ipsum is simply dummy text of the</p>
                                    </div>
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <input id="quantity" type="number" />
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <div className="wash-type">
                                    <img
                                        height="20em"
                                        width="20em"
                                        src={Washing}
                                        alt="mach"
                                    />
                                    <img
                                        height="20em"
                                        width="20em"
                                        src={Ironing}
                                        alt="mach"
                                    />
                                    <img
                                        height="20em"
                                        width="20em"
                                        src={Fold}
                                        alt="mach"
                                    />
                                    <img
                                        height="20em"
                                        width="20em"
                                        src={Bleach}
                                        alt="mach"
                                    />
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="right">price</StyledTableCell>
                            <StyledTableCell align="right">
                                <button>Reset</button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CreateOrder;
