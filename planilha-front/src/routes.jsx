import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Results from "./Results/Results";
function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/results" element={<Results />}/>
            </Routes>
    </BrowserRouter>
    )
}

export default Router