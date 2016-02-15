import React, {PropTypes} from 'react';

const Header = ({visible, setVisible}) => {
    const getStyle = (type) => {
        if (visible == type) {
            return {
                textDecoration: 'underline'
            };
        }
        return {
            textDecoration: 'none'
        };
    };

    return (
        <div>
            <a onClick={() => setVisible('SHOW_ALL')} style={getStyle('SHOW_ALL')}>ALL</a> -
            <a onClick={() => setVisible('SHOW_COMPLETED')} style={getStyle('SHOW_COMPLETED')}>COMPLETED</a> -
            <a onClick={() => setVisible('SHOW_UNCOMPLETED')} style={getStyle('SHOW_UNCOMPLETED')}>UNCOMPLETED</a>
        </div>
    );
};

export default Header;