import React, {useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import SignIn from "./components/Signin/SignIn";
import Users from "./components/Users/Users";

import "./App.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<SignIn setIsLoggedIn={setIsLoggedIn}/>}/>
                    <Route path="/users"
                           element={isLoggedIn ? <Users setIsLoggedIn={setIsLoggedIn}/> : <Navigate to="/login"/>}/>
                    <Route path="/*" element={<Navigate to={"/users"}/>}/>
                </Routes>
                <ToastContainer/>
            </div>
        </Router>
    );
}

export default App;
