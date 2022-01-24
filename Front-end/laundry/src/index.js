import React from "react";
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from "react-dom"
import App from "./App.js"
ReactDOM.render(<>
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
</>,document.getElementById("root"))