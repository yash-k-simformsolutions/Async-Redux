import { TODOS_FAILURE, TODOS_REQUEST, TODOS_SUCCESS } from "./todosTypes"
import axios from 'axios';

export const todosRequest = () => {
    return {
        type: TODOS_REQUEST,
    }
}

export const todosSuccess = (todos) => {
    return {
        type: TODOS_SUCCESS,
        payload: todos
    }
}

export const todosFailure = (error) => {
    return {
        type: TODOS_FAILURE,
        payload: error
    }
}

export const fetchTodos = () => {
    return async (dispatch) => {
        dispatch(todosRequest)
        const url = 'https://jsonplaceholder.typicode.com/todos';
        try{
            const response = await axios.get(url);
            const responseData = await response.data;
            dispatch(todosSuccess(responseData))
        } catch (error) {
            console.log("Error------>", error)
            dispatch(todosFailure(error))
        }
    }
}