import * as userService from "../../services/UserService"
import {CREATE_NEW_USER, DELETE_USER, GET_ALL_USERS} from "../constancies";

export const getAllUser = () => async (dispatch) => {
    const response = await userService.getAll();
    dispatch({
        type: GET_ALL_USERS,
        payload: response
    })
};

export const createUser = (value) => async (dispatch) => {
    await userService.createUser(value);
    dispatch({
        type: CREATE_NEW_USER,
        payload: value
    })
};

export const removeUser = (id) => async (dispatch) => {
    await  userService.removeById(id);
    dispatch({
        type: DELETE_USER,
        payload: id
    })
};

