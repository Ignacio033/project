import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as ACTIONS from '../../constants/actions.constants';
import {Dispatch} from "../../services/dispatch.service";

require('./footer.component.scss');

class FooterComponent extends React.Component {

    // isActive = menuItem => String(menuItem.id === this.props.Nav.currentScreen);

    componentWillMount() {
        console.info(this.props);
    }

    render() {
        // const User = this.props.User;

        return (
            <div component="footer">
                <div className="container">

                    <div className="footer-icons">
                        <div className="footer-icon">
                            <Link className="fab fa-facebook-f" to={'/'}/>
                        </div>
                        <div className="footer-icon">
                            <Link className="fab fa-twitter" to={'/'}/>
                        </div>
                        <div className="footer-icon">
                            <Link className="fab fa-linkedin" to={'/'}/>
                        </div>
                        <div className="footer-icon">
                            <Link className="fab fa-youtube" to={'/'}/>
                        </div>
                        <div className="footer-icon">
                            <Link className="fab fa-google-plus-g" to={'/'}/>
                        </div>
                    </div>

                    <div className="flex flex-row flex-wrap">
                        <div className="footer-link-list">
                            <div className="link-header">Solutions</div>
                            <Link to={'/'} className="link-item">Mobile communications</Link>
                            <Link to={'/'} className="link-item">Fixed communications</Link>
                            <Link to={'/'} className="link-item">Unified communications</Link>
                        </div>

                        <div className="footer-link-list">
                            <div className="link-header">About</div>
                            <Link to={'/'} className="link-item">Cloud & Hosting</Link>
                            <Link to={'/'} className="link-item">Solution 5</Link>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <Link to={'/'} className="bottom-link">Terms of use</Link>
                        <Link to={'/'} className="bottom-link">Privacy policy</Link>
                        <Link to={'/'} className="bottom-link">Cookie policy</Link>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(FooterComponent)