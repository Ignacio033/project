import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as _ from "lodash";

import * as ACTIONS from '../../constants/actions.constants';

require('./banner.component.scss');

export default ({image = 'https://picsum.photos/1200/1200/?random&gravity=center&' + _.random(0, 1000), title, text}) => (
    <div component="banner">
        <div className="banner-image" style={{backgroundImage: `url('${image}')`}}/>
        <div className="banner-overlay"/>
        <div className="banner-content">
            {title && (
                <div className="content-title">{title}</div>
            )}
            {text && (
                <div className="content-text">{text}</div>
            )}

        </div>
    </div>
);