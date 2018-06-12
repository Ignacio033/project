import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';
import {Dispatch} from "../../services/dispatch.service";
import * as ACTIONS from "../../constants/actions.constants";

require('./menu.mobile.component.scss');

class MenuMobileComponent extends React.Component {

    componentWillMount() {
        console.info(this.props);
    }

    toggleMenu = () => Dispatch({type: ACTIONS.TOGGLE_MENU});

    render() {
        var visible = this.props.Menu.visible ? 'true' : 'false';


        return (
            <div component="menu-mobile" active={visible} >

                <div className='menu-background' onClick={this.toggleMenu}/>

                <div className="menu-content">
                    <div className="menu-header">
                        <i className="menu-home-icon fal fa-home"/>
                        <i className="menu-close-icon fal fa-times" onClick={this.toggleMenu}/>
                    </div>

                    <div className="menu-list">
                        <div className="list-header">Menu</div>
                        <div className="list-items">
                            <div className="list-item">Home</div>
                            <div className="list-item">About Us</div>
                            <div className="list-item">Contact Us</div>
                        </div>
                    </div>

                    <div className="menu-list">
                        <div className="list-header">Menu</div>
                        <div className="list-items">
                            <div className="list-item">Home</div>
                            <div className="list-item">About Us</div>
                            <div className="list-item">Contact Us</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(MenuMobileComponent)