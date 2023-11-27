import axios from "axios";

export const getAllVilla = async () => {
    try {
        let response = await axios.get("http://localhost:8080/villa");
        return response.data;
    } catch (e) {
        return undefined;
    }
};
export const getAllHouse = async () => {
    try {
        let response = await axios.get(" http://localhost:8080/house");
        return response.data;
    } catch (e) {
        return undefined;
    }
};
export const getAllRoom = async () => {
    try {
        let response = await axios.get(" http://localhost:8080/room");
        return response.data;
    } catch (e) {
        return undefined;
    }
};

export const createVilla = async (villa) => {
    try {
        await axios.post("http://localhost:8080/villa", villa);
        return true;
    } catch (e) {
        return false;
    }
};

export const createHouse = async (house) => {
    try {
        await axios.post("http://localhost:8080/house", house);
        return true;
    } catch (e) {
        return false;
    }
};

export const createRoom = async (room) => {
    try {
        await axios.post("http://localhost:8080/room", room);
        return true;
    } catch (e) {
        return false;
    }
};