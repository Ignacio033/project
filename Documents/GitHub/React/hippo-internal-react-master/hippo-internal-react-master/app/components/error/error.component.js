import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as ACTIONS from '../../constants/actions.constants';
import {Dispatch} from "../../services/dispatch.service";


require('./error.component.scss');

class ErrorComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    hideError = () => Dispatch(ACTIONS.HIDE_ERROR);

    render() {
        let Active = String(this.props.Config.error.active);
        let Message = String(this.props.Config.error.message);

        return (
            <div component="error-component" active={Active}>
                <div className="error-box">
                    <div className="box-container">

                        <div className="box-icon">
                            <i className="fal fa-frown"/>

                        </div>
                        <div className="box-content">{Message}</div>
                        <div className="box-x" onClick={this.hideError}>
                            <i className="far fa-times"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ErrorComponent)