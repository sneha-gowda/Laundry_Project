import React from 'react';
import {Link} from "react-router-dom"
import "./navbar.css"
import { useState } from 'react';

const Navbar = () => {
    let gt="Register"
    let pth="/register"
    if(window.location.pathname==="/register"){
        gt="sign up"
        pth="/login"
    }
    const [gotoo,setGoto] =useState(gt);
    const [path, setPath] = useState(pth);
    const setNav=() =>{
        const loc = window.location.pathname;

        if (loc === "/" || loc === "/login") {
            console.log(path,gotoo)
            setGoto("Register");
            setPath("/register")
        }
        else{
            console.log(path, gotoo)
            setGoto("Sign up");
            setPath("/login")
        }
    }
    return (
    <>
        <header>
            <h4>LAUNDRY</h4>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Carrer</li>
                    <button onClick={setNav}><Link to={path} className="Link" >{gotoo}</Link></button>
                </ul>

            </nav>
        </header>
    </>);
};
export default Navbar;