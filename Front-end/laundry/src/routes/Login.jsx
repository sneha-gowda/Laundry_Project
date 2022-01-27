import React from 'react'
import Refer from "../LandRComponent/Refer.jsx";
import About from "../LandRComponent/About.jsx";
import { Link,useNavigate } from "react-router-dom";

import "./login.css";
const Login=(props)=>{
    const navigate = useNavigate();
    const login = async (elem) => {
        try {
            elem.preventDefault();
            const response = await fetch("http://localhost:8006/login", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: JSON.stringify({
                    userID: elem.target.userID.value,
                    password: elem.target.password.value,
                }),
            });
            console.log(response)
            if (response.status === 200) {
                const body= await response.json()
                localStorage.setItem('token', body.token)
                localStorage.setItem('userName', body.userName)
                navigate("/orders")
                props.change()
                console.log(props)
                props.setOrd(body.orders)
                alert("Login Successful")
                
            }
            else {
                alert("Invalid credentials")
            }
        } catch (e) {
            console.log(e);
        }
    };
    return(
        <>
            <div className='container'>
                <div className="asideLeft">
                    <div className="asideLeftHeader">
                        <h1>Laundry Service</h1>
                        <p>Doorstep Wash & Dryclean Service</p>
                    </div>
                    <div className="asideLeftFooter">
                        <p>Don’t Have An Account?</p>
                        <button className="signinButton" onClick={props.change}><Link to="/register" >Register</Link></button>
                    </div>
                </div>
                <aside className="right-box">
                    <h1>SIGN IN</h1>
                    <form className='login-form' action="" onSubmit={login}>
                        <input type="text" name='userID' placeholder='Mobile/Email' required  /> <br />
                        <input type="password" name='password' placeholder='Password' required /> <br />
                        <span>Forget Password?</span> <br />
                        <input className='submit-btn' type="submit" value='Sign In' />
                    </form>

                </aside>
            </div>            
            <Refer></Refer>
            <About></About>
        </>
    )
}
export default Login;