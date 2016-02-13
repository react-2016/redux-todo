/**
 * Created by youngmoon on 2/13/16.
 */

import React from 'react';
import * as ActionCreators from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Define React Component Test
 */
class Test extends React.Component {

    /**
     * Constructor for Test
     * @constructs
     * @param {Test.propTypes} props
     */
    constructor(props) {
        super(props);

        console.log('hello ? ', props);

        this.state = {
        };
    }

    /**
     * Render Test.
     * @returns {ReactElement|XML}
     */
    render() {
        return (
            <div></div>
        );
    }
};

/**
 * Define Properties' type for Test
 */
Test.propTypes = {
};

/**
 * Define Default Props of Test
 */
Test.defaultProps = {
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
)(Test);
