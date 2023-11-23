import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import ToDoApp from "./components/ToDoApp";
import React from "react";
import {BrowserRouter as Routes, Route, Link, NavLink} from "react-router-dom"
import {ToastContainer} from "react-toastify";
import Library from "./components/BookManagement/Library";
import CreateBook from "./components/BookManagement/CreateBook";
import EditBook from "./components/BookManagement/EditBook";

function App() {
    return (
        <>
            {/*<ToDoApp/>*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Library/>}/>
                    <Route path="create" element={<CreateBook/>}/>
                    <Route path="edit/:bookId" element={<EditBook/>}/>
                </Routes>
            </BrowserRouter>
            <ToastContainer/>


        </>
    );
}

export default App;
