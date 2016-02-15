import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionCreators from '../actions';

import Add from '../components/add';
import Header from '../components/header';
import Todos from '../components/todos';


const App = (props) => {
    const {removeTodo, toggleTodo, addTodo, setVisible, visible, todos} = props;
    return (
        <div>
            <Header setVisible={setVisible} visible={visible}/>
            <Add addTodo={addTodo}/>
            <Todos visible={visible} todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
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