import React from 'react';
import {Link} from "react-router-dom"
import "./navbar.css";

const Navbar = (props) => {
    return (
        <><header >
            <h4>LAUNDRY</h4>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Carrer</li>
                        <button onClick={props.change}><Link to={props.path} className="Link" >{props.navVariable}</Link></button>
                </ul>

            </nav>
        </header>
    </>);
};
export default Navbar;