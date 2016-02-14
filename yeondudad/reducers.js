import Immutable from 'immutable';
import { combineReducers } from 'redux';

export const visible = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBLE':
            return action.filter;
        default:
            return state;
    }
};

export const todos = (state = Immutable.Map(), action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.set(action.id, {
                id: action.id,
                text: action.text,
                completed: false
            });
        case 'TOGGLE_TODO':
            return state.set(action.id, {
                id: action.id,
                text: state.get(action.id).text,
                completed: !state.get(action.id).completed
            });
        case 'REMOVE_TODO':
            return state.delete(action.id);
        default:
            return state;
    }
};

export default combineReducers({visible, todos});