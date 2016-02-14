import React, { PropTypes } from 'react';

const Todos = ({visible, todos, toggleTodo, removeTodo}) => (
    <ul>
        {todos.filter((todo) => {
            switch (visible) {
                case 'SHOW_COMPLETED':
                    return todo.completed;
                case 'SHOW_UNCOMPLETED':
                    return !todo.completed;
                case 'SHOW_ALL':
                default:
                    return true;
            }
        }).map((todo, index) => (
            <li
                key={index}
                onClick={() => toggleTodo(index)}
                onDoubleClick={() => removeTodo(index)}
                style={{textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
                {todo.text}
            </li>
        ))}
    </ul>
);

export default Todos;