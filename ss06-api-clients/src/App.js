
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import React from "react";

import Library from "./components/BookManagement/Library";


import {BrowserRouter, Routes, Route} from "react-router-dom";
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
                    <Route path="edit/:bookId"  element={<EditBook/>}/>
                </Routes>
            </BrowserRouter>
            {/*<ToastContainer/>*/}

        </>
    );
}

export default App;
