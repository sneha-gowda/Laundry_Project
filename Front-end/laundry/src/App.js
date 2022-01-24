import React from "react";
import { Route,Link,Routes} from 'react-router-dom';
import Login from "./routes/Login.jsx";
import Register from "./routes/Register";
import Footer from "./Footer"

const App=()=>{
    return(
        <>
            <Routes>
                <Route excat path="/" element={<Login/>}></Route>
                <Route excat path="/login" element={<Login />}></Route>
                <Route excat path="/register" element={<Register />}></Route>
            </Routes>
            <Footer />
        </>
    )
   
}
export default App;