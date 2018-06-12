import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as _ from "lodash";
import 'whatwg-fetch';

//import * as CONFIG from '../../constants/config.constants';

import {CardHighlight, CardFeature, Banner, CardIcon} from 'stateless/stateless.collection';
import {Header, Footer} from 'components/components.collection';
import {InstaActive} from "services/helper.service";

require('./solutions.screen.scss');

class SolutionsScreen extends React.Component {
    componentWillMount() {
        console.log('Home Screen', this);
        // InstaActive(this);
        this.setState({active:true})
    }

    render() {

        return (
            <div screen="solutions" active={this.active}>

                <Banner title="Products & Solutions" text={'Total communications for every business'}/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1"/>
                        <div className="col-md-10">

                            <div className="section"/>

                            <div className="card-list">
                                <CardIcon text={'Small Business'} icon={'fas fa-briefcase'}/>
                                <CardIcon text={'Medium & Large Business'} icon={'fas fa-building'}/>
                                <CardIcon text={'Enterprise & Public Sector'} icon={'fas fa-globe'}/>
                            </div>


                            <CardFeature image={'https://picsum.photos/1200/1200/?random&gravity=center&24'}
                                         link={'/'}
                                         large={true}
                                         title={'Mobile communications for businesses'}
                                         text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur doloremque fuga illum inventore itaque labore magnam magni necessitatibus neque possimus quo quod quos repellat tenetur, voluptatem voluptatibus voluptatum?'}
                            />

                            <div className="section"/>
                            <CardHighlight text={'Most Popular'}/>

                            <div className="card-list">

                                <CardFeature image={'https://picsum.photos/1200/1200/?random&gravity=center&25'}
                                             link={'/'}
                                             title={'Mobile communications for businesses'}
                                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur doloremque fuga illum inventore'}
                                />
                                <CardFeature image={'https://picsum.photos/1200/1200/?random&gravity=center&26'}
                                             link={'/'}
                                             title={'Mobile communications for businesses'}
                                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur doloremque fuga illum inventore'}
                                />
                                <CardFeature image={'https://picsum.photos/1200/1200/?random&gravity=center&247'}
                                             link={'/'}
                                             title={'Mobile communications for businesses'}
                                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur doloremque fuga illum inventore'}
                                />
                            </div>
                        </div>


                    </div>


                </div>

                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps)(SolutionsScreen)