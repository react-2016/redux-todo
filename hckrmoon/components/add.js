/**
 * Created by youngmoon on 2/12/16.
 */

import React, { PropTypes } from 'react';

/**
 * Define React Presentational Component Add
 */
const Add = ({ onSubmit }) => {
    let input;
    const submit = (e) => {
        e.preventDefault();
        if (!input.value) return;
        onSubmit(input.value);
        input.value = '';
    };

    return (
        <form onSubmit={submit}>
            <input type="text" ref={node => {
                input = node
            }} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Add;