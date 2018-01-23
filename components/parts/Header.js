/**
 * Created by jovstern on 06/01/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {

    getDefaultProps() {
        return {
            status: 'disconnected'
        }
    }


    render() {
        return (
            <header className="row ">
                <div className="col-xs-10">
                    <h1>{this.props.title}</h1>
                </div>

                <div className="col-xs-2">
                    <span id="connection-status" className={`connection-status ${this.props.status}`} />
                </div>
            </header>
        )
    }
};


Header.PropTypes = {
    title: PropTypes.string.isRequired
};


