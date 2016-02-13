/**
 * Created by youngmoon on 2/12/16.
 */

import { combineReducers } from 'redux';

export const visible = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBLE':
            return action.filter;
        default:
            return state;
    }
};

const toggleTodo = (todos, index) => {
    return [
        ...todos.slice(0, index),
        Object.assign({}, todos[index], {
            completed: !todos[index].completed
        }),
        ...todos.slice(index + 1)
    ];
};

export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return toggleTodo(state, action.index);
        default:
            return state;
    }
};

export default combineReducers({ visible, todos });