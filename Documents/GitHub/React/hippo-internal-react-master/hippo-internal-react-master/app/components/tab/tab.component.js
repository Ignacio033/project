import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as ACTIONS from '../../constants/actions.constants';
import {Dispatch} from "../../services/dispatch.service";

require('./tab.component.scss');
require('../menu/menu.mobile.component.scss');

class TabComponent extends React.Component{

  groups = [
    {
      title:"Products and solutions",
      content:"Products and solutions content"
    },
    {
      title:"VASSIT",
      content:"VASSIT content"
    },
    {
      title:"VASSI2T",
      content:"VASSIT content 3333"
    },
    {
      title:"VASSIT3",
      content:"VASSIT content 4444"
    }
  ]

  constructor(props) {
    super(props);

    this.state = {currentTab:0};
    console.log('groups', this.groups);
  }

  setTab = (tab) => {
    this.setState({currentTab:tab});
  }

  isTabActive = (tab) => this.state.currentTab == tab ? "true" : "";

  render() {
    return (

      <div component="tab-component">
        <div className="tab-header">

            {this.groups.map((group, index) => 
               <div className="header-item" 
                    active={this.isTabActive(index)}
                    onClick={() => this.setTab(index)}
                    key={index}
               >{group.title}</div>
            )}
            
        </div>
        <div className="tab-content">
            {this.groups.map((group, index) => 
               <div className="content-item" 
                    active={this.isTabActive(index)}
                    key={index}
               >{group.content}</div>
            )}
        </div>
        <div className=""></div>
      </div>     
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TabComponent)