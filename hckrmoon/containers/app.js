/**
 * Created by youngmoon on 2/12/16.
 */

import React from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

import Add from '../components/add';
import Todos from '../components/todos';
import Header from '../components/header';

/**
 * Define React Presentational Component App
 */
const App = (props) => {
    const { toggleTodo, createTodo, setVisible, visible, todos } = props;
    return (
        <div>
            <Header setVisible={setVisible} visible={visible}/>
            <Add onSubmit={createTodo}/>
            <Todos visible={visible} todos={todos} onToggle={toggleTodo}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        visible: state.visible
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);