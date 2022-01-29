import React from 'react';
import "./order.css";

import { useNavigate } from "react-router-dom"
import home from "./img/home.svg";
import more from "./img/more.svg";
import list from "./img/list.svg";
import CreateOrder from "./CreateOrder.jsx";

const TakeOrders = (props) => {
    const navigate = useNavigate();   
    const handleCreate = () => {
        navigate("/orders/placeorder")
    }
    const handleViewOrder = () => {
        navigate("/orders")
    }
  
    return (
       
        <>
            <div className="Order">
                <aside>
                    <img src={home} alt="home" ></img>
                    <img onClick={handleCreate} src={more} alt="add"></img>
                    <img onClick={handleViewOrder} src={list} alt="list"></img>
                </aside>
                <div className=" OrderContainer">
                    <section className="OrderHeader">
                        <h2>Create Order</h2>
                        <input type="search" placeholder="search" />
                    </section>
                    <div className="tableHolder placeOrder">
                        <CreateOrder setOrd={props.setOrd}/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TakeOrders;