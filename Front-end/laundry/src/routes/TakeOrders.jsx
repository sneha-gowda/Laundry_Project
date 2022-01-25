import React from 'react';
import "./order.css";
import PlaceOrderTable from "./PlaceOrderTable";
// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

const TakeOrders = (props) => {
    const navigate = useNavigate();   
    const handleCreate = () => {
        navigate("/orders/placeorder")
    }
    return (
        <>
            <div className="Order">
                <aside>
                    <img src="image/home.svg" alt="home"></img>
                    <img onClick={handleCreate} src="image/more.svg" alt="add"></img>
                    <img src="image/list.svg" alt="list"></img>
                </aside>
                <div className=" OrderContainer">
                    <section className="OrderHeader">
                        <h2>Create Order</h2>
                        <input type="search" placeholder="search" />
                    </section>
                    <div className="tableHolder">
                   
                        <PlaceOrderTable/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TakeOrders;