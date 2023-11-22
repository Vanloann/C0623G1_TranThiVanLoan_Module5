import logo from './logo.svg';
import './App.css';
import './header_footer.css'
import './furama_function.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons';
import {Routes, Route, Link} from 'react-router-dom';
import Header from "./components/header";
import React from "react";
import CreateService from "./components/service-create";
import EditService from "./components/service-edit";
import CustomerList from "./components/customer-list";
import EditCustomer from "./components/customer-edit";
import CreateCustomer from "./components/customer-create";
import CreateContract from "./components/contract-create";
import ContractList from "./components/contract-list";
import Footer from "./components/footer";
import HomePage from "./components/homepage";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="customer" element={<CustomerList/>}/>
                <Route path="service-editing" element={<EditService/>}/>
                <Route path="service-creating" element={<CreateService/>}/>
                {/*<EditCustomer/>*/}
                {/*<CreateCustomer/>*/}
                {/*<CreateContract/>*/}
                <Route path="contract" element={<ContractList/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
