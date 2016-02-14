import { combineReducers } from 'redux';

export const visible = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBLE':
            return action.filter;
        default:
            return state;
    }
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
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: !state[action.index].completed
                }),
                ...state.slice(action.index + 1)
            ];
        case 'REMOVE_TODO':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
};

export default combineReducers({visible, todos});