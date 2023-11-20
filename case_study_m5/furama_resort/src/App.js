import logo from './logo.svg';
import './App.css';
import './header_footer.css'
import './furama_function.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'boxicons';
import HeaderFooter from "./components/header-footer";
import React from "react";
import CreateService from "./components/service-create";
import EditService from "./components/service-edit";
import CustomerList from "./components/customer-list";
import EditCustomer from "./components/customer-edit";
import CreateCustomer from "./components/customer-create";
import CreateContract from "./components/contract-create";
import ContractList from "./components/contract-list";

function App() {
    return (
        <>
            {/*<HeaderFooter/>*/}
            {/*<CreateService/>*/}
            {/*<EditService/>*/}
            {/*<CustomerList/>*/}
            {/*<EditCustomer/>*/}
            {/*<CreateCustomer/>*/}
            {/*<CreateContract/>*/}
            <ContractList/>
        </>
    );
}

export default App;
