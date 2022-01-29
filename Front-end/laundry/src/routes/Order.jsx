import React from 'react';
import "./order.css";
import OrderTable from "./OrderTable";
import {useState,useEffect} from "react";
import { useNavigate} from "react-router-dom"

const Order=(props)=>{
    const navigate = useNavigate();
    const [orderHeadervariable, setOHV] = useState(`Orders | ${props.len}`)
    useEffect(()=>{
        setOHV(`Orders | ${props.len}`)
    },[props.len])

    const handleCreate=()=>{
        navigate("/orders/placeorder")
    }
    const handleViewOrder=()=>{
        navigate("/orders")
    }
    let table=""
    if (props.len ===0){
        table=<><div className="emptyTable">
            <p>No Orders avaialble</p>
            <button onClick={handleCreate }>Create</button>
        </div></>
    }
    return (
        <>
            <div className="Order">
                <aside>
                    <img src="image/home.svg" alt="home"></img>
                    <img onClick={handleCreate} src="image/more.svg" alt="add"></img>
                    <img onClick={handleViewOrder}src="image/list.svg" alt="list"></img>
                </aside>
                <div className=" OrderContainer">
                    <section className="OrderHeader">
                        <h2>{orderHeadervariable}</h2>
                        <div>
                            <button style={{ "padding": ".5em 1em", "margin": "0 1em", "color":"#5861AE","border":"1px solid #5861AE"}}>Create</button>
                            <input type="search" placeholder="search"/>
                        </div>
                    </section>
                    <div className="tableHolder">
                        {table}
                        <OrderTable orders={props.ordersList}/>
                    </div>
                </div>
            </div>           
        </>
    )

}

export default Order;