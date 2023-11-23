import {CREATE_NEW_USER, DELETE_USER, GET_ALL_USERS} from "../constancies";

const userReducer = (users = [], action) => {
    const {type, payload} = action;
    switch (type){
        case GET_ALL_USERS:
            return payload;
        case CREATE_NEW_USER:
            return [...users, payload];
        case DELETE_USER:
            let temp = [...users];
            temp = temp.filter((value) => value.id !== payload);
            return temp;
        default:
            return users;
    }
};

export default userReducer;