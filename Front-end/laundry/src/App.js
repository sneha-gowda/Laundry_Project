import React from "react";
import { Route,Routes} from 'react-router-dom';
import Login from "./routes/Login.jsx";
import Register from "./routes/Register";
import Footer from "./Footer";
import Navbar from "./Navbar.jsx";
import Order from "./routes/Order.jsx";
import TakeOrders from "./routes/TakeOrders.jsx"
import {useState,useEffect} from "react"
const App=()=>{
    const [navVariable,setNavVariable]=useState("Register");
    const [path,setPath]=useState("/register");
    const [ordersList,setOrders]=useState([]);
    const [ordersLen, setOrderslen] = useState(0);
    const setOrds=(list)=>{
        setOrders(list)
    }
    const addOrds = (list) => {
        setOrders(prevOrds=>{
            return ([list, ...prevOrds])
        })
    }
    useEffect(()=>{ 
        setOrderslen(ordersList.length)
    }, [ordersList])
    const setNav = () => {
        const loc = window.location.pathname;
        if (loc === "/" || loc === "/login") {
            setNavVariable("Register");
            setPath("/register")
        }
        else if(loc==="/orders"){
            setNavVariable(localStorage.getItem('userName'))
            setPath("/orders")
        }
        else {
            // console.log(path, gotoo)
            setNavVariable("Sign up");
            setPath("/login")
        }
    }
    return(
        <>
            <Navbar navVariable={navVariable} change={() => { setNav() }} path={path}></Navbar>
            <Routes>
                <Route excat path="/" element={<Login path={path} navVariable={navVariable} setOrd={(arr) => { setOrds(arr) }} change={()=>{setNav()}}/>}></Route>
                <Route excat path="/login" element={<Login path={path} navVariable={navVariable} setOrd={(arr) => { setOrds(arr) }} change={() => { setNav() }} />}></Route>
                <Route excat path="/register" element={<Register path={path} navVariable={navVariable} change={() => { setNav() }} />}></Route>
                <Route excat path="/orders" element={<Order ordersList={ordersList} len={ordersLen} setOrd={(arr) => { setOrds(arr) }} />}></Route>
                <Route excat path="/orders/placeorder" element={<TakeOrders ordersList={ordersList} len={ordersLen} setOrd={(arr) => { addOrds(arr) }} />}></Route>
            </Routes>
            <Footer />
        </>
    )
   
}
export default App;