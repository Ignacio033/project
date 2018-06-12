import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as _ from "lodash";

import * as ACTIONS from '../../constants/actions.constants';

require('./card-feature.component.scss');

export default ({image = 'https://picsum.photos/1200/1200/?random&gravity=center&' + _.random(0, 1000), large, direction = 'vertical', title, text, link = '#'}) => (
    <div component="card-feature" className="card">
        <div className={`feature-container flex ${direction == 'horizontal' ? 'flex-row' : ""}`}>
            <Link className={`card-image ${large && 'card-image-large'}`}
                  to={link}
                  style={{backgroundImage: `url('${image}')`}}
            />

            <div className="flex">
                {title && (
                    <Link className="card-title" to={link}>{title}</Link>
                )}

                {text && (
                    <div className="card-title-text">{text}</div>
                )}
            </div>

        </div>

    </div>
);