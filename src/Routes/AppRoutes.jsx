import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import ProtectedRoute from "../Components/ProtectedRoute"

function AppRoutes(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
                <Route element={<ProtectedRoute isLoggedIn={isLoggedIn}/>}>
                <Route path="/" element={<Home/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes

