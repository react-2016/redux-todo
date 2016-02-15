import React, { PropTypes } from 'react';

const Add = ({ addTodo }) => {
    let input;
    const submit = (e) => {
        e.preventDefault();
        if (input.value) {
            addTodo(input.value);
            input.value = '';
        }
    };

    return (
        <form onSubmit={submit}>
            <input type="text" ref={node => {input = node}}/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Add;