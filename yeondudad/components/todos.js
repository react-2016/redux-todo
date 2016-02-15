import React, { PropTypes } from 'react';

const Todos = ({visible, todos, toggleTodo, removeTodo}) => (
    <ul>
        {todos.toList().filter((todo) => {
            switch (visible) {
                case 'SHOW_COMPLETED':
                    return todo.completed;
                case 'SHOW_UNCOMPLETED':
                    return !todo.completed;
                case 'SHOW_ALL':
                default:
                    return true;
            }
        }).map((todo) => {
            return (
                <li
                    key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    onDoubleClick={() => removeTodo(todo.id)}
                    style={{textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                    {todo.text}
                </li>
            );
        })}
    </ul>
);

export default Todos;