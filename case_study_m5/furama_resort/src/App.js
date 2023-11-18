import logo from './logo.svg';
import './App.css';
import './header_footer.css'
import './furama_function.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons';
import HeaderFooter from "./components/header_footer";
import React from "react";
import CreateService from "./components/service-create";
import EditService from "./components/service-edit";

function App() {
    return (
        <>
            {/*<HeaderFooter/>*/}
            {/*<CreateService/>*/}
            <EditService/>
        </>
    );
}

export default App;
