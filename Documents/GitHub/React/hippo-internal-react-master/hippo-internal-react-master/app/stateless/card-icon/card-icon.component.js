import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as _ from "lodash";

import * as ACTIONS from '../../constants/actions.constants';

require('./card-icon.component.scss');

export default ({text, icon}) => (
    <div className="card">
        <div className="card-icon">
            <i className={icon}/>
        </div>
        <div className="card-icon-title">
            {text}
        </div>
    </div>
);