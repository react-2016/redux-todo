// Todo를 삭제한다.
export const removeTodo = (index) => {
    return {
        type: 'REMOVE_TODO',
        index
    };
};

// Todo의 상태(completed/uncompleted)를 변경한다.
export const toggleTodo = (index) => {
    return {
        type: 'TOGGLE_TODO',
        index
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
        type: 'ADD_TODO',
        text
    };
};