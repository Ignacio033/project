import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';
import {API} from "../../services/api.service";

import * as _ from "lodash";
import 'whatwg-fetch';

import * as ACTIONS from '../../constants/actions.constants';
import * as CONFIG from '../../constants/config.constants';

import {InstaActive} from "../../services/helper.service";
import {Dispatch} from "../../services/dispatch.service";

import {Footer, MenuMobile} from 'components/components.collection';

require('./header.component.scss');

class HeaderComponent extends React.Component {
    
    state = {
        topmenuitems: [],
      }
      
      async loadConfig(props = this.props) {      
        let response = await API.loadConfig();
        this.config = response.items[0];
              console.log('Loaded Config', this.config);
              this.setState({});
      }

    componentWillMount() {
        console.info(this.props);
        this.loadConfig();
    }

    toggleMenu = () => Dispatch({type: ACTIONS.TOGGLE_MENU});

    render() {
        // const User = this.props.User;
         if (!this.config) return <div>Loading...</div>;
         const topLinks = this.config.topmenuitems.linkitems;
         const bottomLinks = this.config.btmmenuitems.linkitems;
         
        return (
            <div component="header">
                <MenuMobile/>

                <div className="container" style={{position: 'relative'}}>
                    <i className="menu-open-icon fal fa-bars 123" onClick={this.toggleMenu}/>

                    <div className="top-header">
                        <div className="flex flex-row">
                            {topLinks.map(function (link, i){
                             return <Link to={link.vanityUrl} className="header-link" key={i}>{link.navigationTitle}</Link>
                            })}
                           
                            <div className="header-link">
                                <i className="far fa-user"/>
                            </div>

                            <div className="header-link">
                                <i className="far fa-search"/>
                            </div>

                        </div>
                    </div>

                    <Link className="header-logo" to={'/'}>
                        <img className="header-logo-img" src="/statics/img/logos/logo-new.svg" alt=""/>
                        <div className="header-logo-text">VASS Telecom</div>
                    </Link>

                    <div className="bottom-header">
                        <div className="flex flex-row flex-min">
                        {bottomLinks.map(function (link, i){
                             return <Link to={link.vanityUrl} className="header-link" key={i}>{link.navigationTitle}</Link>
                            })}
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(HeaderComponent)