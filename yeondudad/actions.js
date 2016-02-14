import uniqueId from 'lodash.uniqueid';

// Todo를 삭제한다.
export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    };
};

// Todo의 상태(completed/uncompleted)를 변경한다.
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

// visible 옵션을 선택한다.
export const setVisible = (filter) => {
    return {
        type: 'SET_VISIBLE',
        filter
    };
};

// Todo를 생성한다.
export const addTodo = (text) => {
    return {
        id: uniqueId('todo'),
        type: 'ADD_TODO',
        text
    };
};