import logo from './logo.svg';
import './App.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom";
import React from "react";
import UserList from "./components/User";
import CreateUser from "./components/CreateUser";


function App() {
    const users = useSelector(store => store.users);
    return (
        <>
            <Routes>
                <Route path="/user" element={<UserList/>}/>
                <Route path="/create" element={<CreateUser/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
