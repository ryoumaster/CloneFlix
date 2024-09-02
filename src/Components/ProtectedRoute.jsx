import React from "react";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRoute({isLoggedIn}){
        if(isLoggedIn){
            return <Outlet/>
        }
        else return <Navigate to="/login"/>;
}

export default ProtectedRoute