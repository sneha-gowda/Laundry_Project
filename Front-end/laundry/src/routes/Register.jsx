import React from 'react';
import Refer from "../LandRComponent/Refer.jsx";
import About from "../LandRComponent/About.jsx";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./register.css"
const Register=(props)=>{
    const navigate = useNavigate();
    const register = async (elem) => {
        try {
            elem.preventDefault();
            const response=await fetch("http://localhost:8006/register", {
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
                    name: elem.target.name.value,
                    email: elem.target.email.value,
                    password: elem.target.password.value,
                    address: elem.target.address.value,
                    phone: elem.target.phone.value,
                    state: elem.target.state.value,
                    district: elem.target.district.value,
                    pincode: elem.target.pincode.value,
                }),
            });
            console.log(response)
            // const data=await response.json();
            if(response.status===200) {
                navigate("/login")
            }
            else{
                alert("User credentials are not valid")
            } 
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <>
            <section className="Register">
                <div className="asideLeft">
                    <div className="asideLeftHeader">
                        <h1>Laundry Service</h1>
                        <p>Doorstep Wash & Dryclean Service</p>
                    </div>
                    <div className="asideLeftFooter">
                        <p>Already Have Account?</p>
                        <button className="signinButton" onClick={props.change}><Link to="/login" >Sign in</Link></button>
                        
                    </div>
                </div>
                <div className="registerForm">
                    <div className="registerFormHeader">
                        <h1>REGISTER</h1>
                    </div>
                    <div >
                        <form className="registerFormContents" onSubmit={(elem) => register(elem)}>
                            <input required type="text" placeholder="Name" name="name"></input>
                            <input required type="email" placeholder="Email" name="email"></input>
                            <input required type="phone" placeholder="Phone" name="phone"></input>
                            <select required name="state" id="state" className="form-control" placeholder="State">
                                <option value="State">State</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                            <input required type="text" name="district" placeholder="District"></input>
                            <input required type="text" name="address" placeholder="Address"></input>
                            <input required type="number" name="pincode" placeholder="Pincode"></input>
                            <input required type="password" name="password" placeholder="Password"></input>
                            <div className="checkbox">
                                <input type="checkbox" id="terms" name="T&C" required/><span>I agree to Terms & Condition receiving marketing and promotional materials</span>
                            </div>
                            <div className="submitFormButton">
                                <input type="submit" value="Register" />
                            </div>
                            
                        </form> 
                    </div>
                </div>
            </section>
            <Refer></Refer>
            <About></About>
        </>
    )
}
export default Register