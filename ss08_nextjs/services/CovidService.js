import axios from "axios";

export const getAll = async () => {
    try {
        let response = await axios.get("http://localhost:8080/CovidInf");
        return response.data;
    } catch (e) {
        return undefined;
    }
};