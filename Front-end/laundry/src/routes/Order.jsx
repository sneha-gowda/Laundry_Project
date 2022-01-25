import React from 'react';
import "./order.css";
import PlaceOrderTable from "./PlaceOrderTable";
import OrderTable from "./OrderTable";
import {useState} from "react"

const Order=(props)=>{
    console.log(props.len,"Orders");
    const orderList = props.ordersList;
    const [orderHeadervariable, setOHV] = useState(`Orders | ${props.len}`)
    // const [table,setTable] = useState()
    const handleCreate=()=>{
        setOHV("Create Order ")
        console.log(orderHeadervariable)
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
                    <img backgroundColor="red" src="image/home.svg" alt="home"></img>
                    <img onClick={handleCreate} src="image/more.svg" alt="add"></img>
                    <img src="image/list.svg" alt="list"></img>
                </aside>
                <div className=" OrderContainer">
                    <section className="OrderHeader">
                        <h2>{orderHeadervariable}</h2>
                        <input type="search" placeholder="search"/>
                    </section>
                    <div className="tableHolder">
                        {table}
                        <OrderTable/>
                    </div>
                </div>
            </div>           
        </>
    )

}

export default Order;