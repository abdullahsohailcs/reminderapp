import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Protected = ({ children }) => { // Corrected spelling of children
    const { user } = UserAuth();
    if (!user) {
        return <Navigate to="/" />;
    }

    return children; // Corrected spelling of children
};

export default Protected;
