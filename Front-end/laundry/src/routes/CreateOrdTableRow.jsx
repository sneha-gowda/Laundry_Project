import {React,useState,useEffect} from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import IronIcon from '@mui/icons-material/Iron';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import SoapIcon from '@mui/icons-material/Soap';
import "./createOrder.css";


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
    },
    "&:last-child td, &:last-child th": {
        border: 0
    }
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));
const CreateOrdTableRow=(props)=>{
    
    const row=props.row;
    const [PrceCalculation, setPrice]=useState("--");
    const [quantity,setQuantity]=useState(0);
    const [TSP,setTSP]= useState(0);
    const [displayReset,setDisplayReset]=useState("none")
    const [wash, setWash] = useState("#bababa");
    const [iron, setIron] = useState("#bababa");
    const [fold, setFold] = useState("#bababa");
    const [bleach, setBleach] = useState("#bababa");

    useEffect(()=>{
        if(PrceCalculation!=="--")
            setDisplayReset("block")
        else{
            setDisplayReset("none")
        }
    },[PrceCalculation])

    useEffect(() => {
        setPrice(prevValue => {
            if (quantity>0 || TSP>0  ){
                let update = `${quantity} x ${TSP} = ${quantity * TSP}`
                return update
            }
            else{
                return "--"
            }
        })
    }, [quantity,TSP])

    const reset=()=>{
        setQuantity(0);
        setTSP(0);
        setWash("#bababa");
        setIron("#bababa");
        setFold("#bababa");
        props.editQuantity(props.id, 0);
        props.removeService(props.id, "All")
        setBleach("#bababa");
    }
    const HandleInputChange=(event)=>{
        if(event.currentTarget.value<0 || isNaN(event.currentTarget.value)){
            setQuantity(0)
            props.editQuantity(props.id,0)
        }
        else{
            setQuantity(event.currentTarget.value)
            props.editQuantity(props.id, event.currentTarget.value)
            
        }
    }
    const handlewashType=(event)=>{
        if (event.currentTarget.id ==="wash"){
            if(wash==="#bababa"){
                setWash("#5861AE")
                setTSP(TSP+20)
                props.addService(props.id,"wash")
            }
            else{
                setWash("#bababa")
                setTSP(TSP-20)
                props.removeService(props.id, "wash")
            }
        }
        else if (event.currentTarget.id === "iron") {
            if (iron === "#bababa") {
                setIron("#5861AE")
                setTSP(TSP+10)
                props.addService(props.id, "iron")
            }
            else {
                setIron("#bababa")
                setTSP(TSP-10)
                props.removeService(props.id, "iron")
            }
        }
        else if (event.currentTarget.id === "fold") {
            if (fold === "#bababa") {
                setFold("#5861AE")
                setTSP(TSP + 10)
                props.addService(props.id, "fold")
            }
            else {
                setFold("#bababa")
                setTSP(TSP - 10)
                props.removeService(props.id, "fold")
            }
        }
        else if (event.currentTarget.id === "bleach") {
            if (bleach === "#bababa") {
                setBleach("#5861AE")
                setTSP(TSP+30)
                props.addService(props.id, "bleach")
            }
            else {
                setBleach("#bababa")
                setTSP(TSP -30)
                props.removeService(props.id, "bleach")
            }
        }
 
    }

    return(
        <>
            <StyledTableRow key={row.name}>
                <StyledTableCell style={{ "width": "25vw" }} align="right">
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
                <StyledTableCell style={{ "width": "10vw" }} align="right">
                    <input onChange={ HandleInputChange} id="quantity" value={quantity} type="number" placeholder="0" />
                </StyledTableCell>
                <StyledTableCell style={{ "width": "25vw" }} align="right">
                    <div className="wash-type">
                        <button onClick={handlewashType} id="wash">
                            <LocalLaundryServiceIcon style={{ "color":wash}} id="wash" className="wash-type-icons"></LocalLaundryServiceIcon>
                        </button>
                        <button onClick={handlewashType} id="iron">
                            <IronIcon style={{ "color":  iron  }}   className="wash-type-icons"></IronIcon>
                        </button>
                        <button onClick={handlewashType} id="fold" >
                            <DryCleaningIcon style={{ "color":  fold  }} id="fold" className="wash-type-icons"></DryCleaningIcon>
                        </button>
                        <button onClick={handlewashType} id="bleach" >
                            <SoapIcon style={{ "color": bleach}}  className="wash-type-icons"></SoapIcon>
                        </button>
                    </div>
                </StyledTableCell>
                <StyledTableCell style={{ "width": "fit-content" }} id="calculatedPrice" align="right">{PrceCalculation}</StyledTableCell>
                <StyledTableCell align="right">
                    <button onClick={reset} id="reset" style={{"display":displayReset}}>Reset</button>
                </StyledTableCell>
              
            </StyledTableRow>
        </>
    )
}
export default CreateOrdTableRow;