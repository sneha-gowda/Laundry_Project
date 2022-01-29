import React,{useState} from 'react';

const StoreAddress=(props)=>{
    const [storeNum, setStoreNum] = useState("--");
    const [storeAdd, setStoreAdd] = useState("--");
    const addStoreDetails=()=>{
        setStoreAdd("Near Phone booth, 10th road,");
        setStoreNum("9876543211");
        props.setStoreLoc();
    }

    return(<>
        <section className="summary-store-add">
            <select onChange={addStoreDetails} required name="state" id="state" className="form-control">
                <option value="" style={{"color":"#5861AE"}}>store location</option>
                <option value="JP Nagar">JP Nagar</option>
            </select>
            <div>
                <h4>Store Address</h4>
                <h6>{storeAdd}</h6>
            </div>
            <div>
                <h4>Store Address</h4>
                <h6>{storeNum}</h6>
            </div>
        </section>
    </>
    )
}
export default StoreAddress;