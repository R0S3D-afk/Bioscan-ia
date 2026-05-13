import React, {
    useContext
} from "react";

import {
    Routes,
    Route
} from "react-router-dom";

import {
    AuthContext
} from "./context/AuthContext";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    const {
        usuario
    } = useContext(AuthContext);

    return (

        <Routes>

            <Route
                path="/"
                element={
                    usuario
                    ? <Dashboard />
                    : <Login />
                }
            />

            <Route

                path="/dashboard"

                element={

                    <ProtectedRoute>

                        <Dashboard />

                    </ProtectedRoute>
                }
            />

        </Routes>
    );
}

export default App;