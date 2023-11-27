import axios from "axios";

export const getAllCustomer = async () => {
    try {
        let response = await axios.get("http://localhost:8080/customer");
        return response.data;
    } catch (e) {
        return undefined;
    }
};

export const createCustomer = async (customer) => {
    try {
        await axios.post("http://localhost:8080/customer", customer);
        return true;
    } catch (e) {
        return false;
    }
};

export const getCustomerById = async (customerId) => {
    try {
        let response = await axios.get(`http://localhost:8080/customer/${customerId}`);
        return response.data;
    } catch (e) {
        return undefined;
    }
};

export const editCustomer = async  (customer) => {
    try {
        await axios.put(`http://localhost:8080/customer/${customer.id}`, customer);
        return true;
    } catch (e) {
        return false;
    }
};

export const getAllMemberType = async () => {
    try {
        let response = await axios.get("http://localhost:8080/memberType");
        return response.data;
    } catch (e) {
        return undefined;
    }
};

export const getMemberTypeById = async (id) => {
    try {
        let response = await axios.get(`http://localhost:8080/memberType/${id}`);
        return response.data;
    } catch (e) {
        return undefined;
    }
};
