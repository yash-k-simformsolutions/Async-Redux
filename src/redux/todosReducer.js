import { TODOS_FAILURE, TODOS_REQUEST, TODOS_SUCCESS } from "./todosTypes"

const initialState = {
    fetching: false,
    todosData: [],
    error: '',
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case TODOS_REQUEST: return {
            ...state,
            fetching: true,
        }

        case TODOS_SUCCESS: return {
            fetching: false,
            todosData: action.payload,
            error: ''
        }

        case TODOS_FAILURE: return {
            fetching: false,
            todosData: [],
            error: action.payload
        }

        default: return state
    }
}

export default Reducer;