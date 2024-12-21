import { ADD_TODO, FETCH_TODOS,UPDATE_TODO,  DELETE_TODO, EDIT_TODO } from './actionTypes'
import axios from 'axios';

const API_URL = 'https://localhost:5001/api/Todo';

export const addTodo =  (todo) => (dispatch) => {
        axios.post(API_URL, todo)
        .then(res => {
            dispatch({
                type: ADD_TODO,
                payload: res.data
            }) 
            dispatch(fetchTodos());
        });
}
export const fetchTodos = () => (dispatch) => {
    axios.get(API_URL)
    .then(req => {
        dispatch({
            type: FETCH_TODOS,
            payload: req.data
        })
    })
}
export const updateTodo = (todo) => (dispatch) => {
    axios.put(API_URL + `/${todo.id}`, todo)
    .then(res => {
        dispatch( {
            type: UPDATE_TODO,
            payload: res
        });
        dispatch(fetchTodos());
    })
}

export const deleteTodo = (id) => (dispatch) => {
    axios.delete(API_URL + `/${id}`)
    .then(res => {
        dispatch( {
            type: DELETE_TODO,
            payload: res
        });
        dispatch(fetchTodos());
    })
}

export const editTodo = (todo) => (dispatch) => {
    dispatch({
        type: EDIT_TODO,
        payload: todo
    })
}