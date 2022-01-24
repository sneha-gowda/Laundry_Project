import React from "react";
import { Route,Routes} from 'react-router-dom';
import Login from "./routes/Login.jsx";
import Register from "./routes/Register";
import Footer from "./Footer"
import Navbar from "./Navbar.jsx"
import {useState} from "react"
const App=()=>{
    const [navVariable,setNavVariable]=useState("Register")
    const [path,setPath]=useState("/register")
    const setNav = () => {
        const loc = window.location.pathname;

        if (loc === "/" || loc === "/login") {
            // console.log(path, gotoo)
            setNavVariable("Register");
            setPath("/register")
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
                <Route excat path="/" element={<Login path={path} navVariable={navVariable} change={()=>{setNav()}}/>}></Route>
                <Route excat path="/login" element={<Login path={path} navVariable={navVariable} change={() => { setNav() }} />}></Route>
                <Route excat path="/register" element={<Register path={path} navVariable={navVariable} change={() => { setNav() }} />}></Route>
            </Routes>
            <Footer />
        </>
    )
   
}
export default App;