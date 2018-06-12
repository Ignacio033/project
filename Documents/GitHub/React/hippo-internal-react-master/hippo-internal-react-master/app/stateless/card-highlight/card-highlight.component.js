import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as _ from "lodash";

import * as ACTIONS from '../../constants/actions.constants';

require('./card-highlight.component.scss');

export default ({text}) => (
    <div className="card">
        <div className="card-highlight">
            {text}
        </div>
    </div>
);