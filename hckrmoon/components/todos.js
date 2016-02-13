/**
 * Created by youngmoon on 2/12/16.
 */

import React, { PropTypes } from 'react';

/**
 * Define React Presentational Component Todos
 */
const Todos = ({visible, todos, onToggle }) => (
    <ul>
        {todos.filter((todo) => {
            switch(visible) {
                case 'SHOW_ALL':
                    return true;
                case 'SHOW_COMPLETED':
                    return todo.completed;
                case 'SHOW_UNCOMPLETED':
                    return !todo.completed;
                default:
                    return true;
            }
        }).map((todo, index) => (
            <li
                key={index}
                onClick={() => onToggle(index)}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
            </li>
        ))}
    </ul>
);

export default Todos;