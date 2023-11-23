import axios from "axios";

export const getAll = async () => {
    try {
        let response = await axios.get("http://localhost:8080/users");
        return response.data;
    } catch (e) {
        return undefined;
    }
};

export const createUser = async (user) => {
    try {
        await axios.post("http://localhost:8080/users", user);
        return true;
    } catch (e) {
        return false;
    }
};

export const removeById = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/users/${id}`);
        return true;
    } catch (e) {
        return false;
    }
};