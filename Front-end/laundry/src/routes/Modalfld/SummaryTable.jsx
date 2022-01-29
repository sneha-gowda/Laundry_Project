import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const SummaryTable=(props)=> {
    const rows=props.rows ;
    const subTotal=props.subTotal;
    return (
        <TableContainer className="order-summary-table" component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" colSpan={4}>
                            Order details
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,id) => (
                        <TableRow key={id}>
                            <TableCell style={{ "color":"#5861AE"}}>{row.Item}</TableCell>
                            <TableCell align="center" style={{ "fontStyle": "italic" }}>{row.service}</TableCell>
                            <TableCell align="right">{row.quantity}=</TableCell>
                            <TableCell align="right" style={{ "color":"#5861AE", "fontSize":"1.2em"}}>{row.TpriceI}</TableCell>
                        </TableRow>
                    ))}

                    <TableRow>

                        <TableCell align="right" colSpan={3}>
                            Sub total:
                        </TableCell>
                        <TableCell align="right">{subTotal}</TableCell>
                    </TableRow>
                    <TableRow>
                        {/* <TableCell rowSpan={3} /> */}
                        <TableCell colSpan={3} align="right">Pickup Charges:</TableCell>
                        <TableCell align="right">90</TableCell>
                    </TableRow>
                    <TableRow style={{ backgroundColor: "#5861AE" }}>
                        <TableCell colSpan={3} align="right" style={{"color":"white","fontWeight":"bold"}}>Total:</TableCell>
                        <TableCell align="right" style={{ "color": "white", "fontSize": "1.2em" }} >Rs {subTotal+90}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SummaryTable;