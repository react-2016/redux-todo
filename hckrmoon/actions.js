/**
 * Created by youngmoon on 2/12/16.
 */

export const toggleTodo = (index) => {
    return {
        type: 'TOGGLE_TODO',
        index
    };
};

export const setVisible = (filter) => {
    return {
        type: 'SET_VISIBLE',
        filter
    };
};

export const createTodo = (text) => {
    return {
        type: 'CREATE_TODO',
        text
    };
};

