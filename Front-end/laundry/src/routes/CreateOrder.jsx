import React,{useState,useEffect,createContext} from 'react';
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
import Modal from "react-modal";
import Summary from "./Modalfld/Summary.jsx"
Modal.setAppElement("#root")

const EmptyOrdDatailContext = createContext();
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
    orderDatail[clothTypes[id]].Service.push(service);
}
const removeService = (id,service) =>{
    if(service==="All"){
        orderDatail[clothTypes[id]].Service=[]
    }
    else{
        const index=orderDatail[clothTypes[id]].Service.indexOf(service);
        orderDatail[clothTypes[id]].Service.splice(index, 1);
    }
}

const CreateOrder=(props)=> {
    const [modelOpen, setModelOpen] = useState(false);
    const rows = POData;
    const [placedOrderData,setplacedOrderData]=useState([]);
    const [subTotal,setSubTotal] = useState(0);
    const [totalQuantity,setTotalQuantity] = useState(0);
    const [callForModel,setCallForModel] = useState("noCall");
    const clrorderDatail= () => {
         orderDatail = orderDetails ;
         alert("cleared",orderDatail);
        }

    useEffect(() =>{
        if (subTotal !== 0) {
            // console.log(placedOrderData, "here", subTotal, orderDatail);
            setModelOpen(true);
        }
        else {
            // console.log(placedOrderData, "here", subTotal, orderDatail);
            alert("Please select Items from table")
        }
    }, [callForModel])
    const Proceed = () => {
        setplacedOrderData([]);
        setSubTotal(0);
        setTotalQuantity(0);
        for (let key in orderDatail) {
            let obj = {}
            let len = orderDatail[key].Service.length;
            let qunt = orderDatail[key].Quantity;
            if (qunt > 0 && len > 0) {
                setTotalQuantity(prevQunt=>{
                    return prevQunt+parseInt(qunt);
                })
                obj.Item = key;
                let serv = ""
                let servP = 0
                for (let i of orderDatail[key].Service) {
                    let val = 0
                    if (i === "wash") {
                        val = 30;
                        serv += "Washing ";
                    }
                    else if (i === "iron") {
                        val = 20;
                        serv += "Ironing "
                    }
                    else if (i === "fols") {
                        val = 10
                        serv += "Folding "
                    }
                    else {
                        serv += "Chemical wash "
                        val = 50
                    }
                    servP += val;
                }
                obj.service = serv;
                obj.quantity = `${qunt} x ${servP}`
                obj.TpriceI = qunt * servP;
                setSubTotal(subTotal+ obj.TpriceI)
                setplacedOrderData(placedOrderData=>{
                    return [...placedOrderData, obj]
                });
                // console.log(subTotal,placedOrderData,"infor")
            }}
            setCallForModel((subTotal)=>{
                console.log("subtotal",subTotal)
                return(subTotal+1)
            })
        
        
    }
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
                        return (<CreateOrdTableRow key={id} id={id} row={row} editQuantity={editQuantity} addService={addService} removeService={removeService} />)
                    })}
                </TableBody>
            </Table>
            <div className="submit-cancel-btn-container">
                <button ><Link to="/orders" style={{ "textDecoration": "none", "color":"#5861AE"}}>Cancel</Link></button>
                <button onClick={Proceed}>Proceed</button>
            </div>
            <EmptyOrdDatailContext.Provider value={{clrorderDatail}}>
                <Modal className="Modal" isOpen={modelOpen} onRequestClose={() => { setModelOpen(false)}}>
                    <Summary setOrd={props.setOrd} orderDetail={placedOrderData} subTotal={subTotal} totalQuantity={totalQuantity}></Summary>
                </Modal>
            </EmptyOrdDatailContext.Provider>
        </TableContainer>
          
    );
};
// console.log(EmptyOrdDatailContext)
export default CreateOrder;
export {EmptyOrdDatailContext};
