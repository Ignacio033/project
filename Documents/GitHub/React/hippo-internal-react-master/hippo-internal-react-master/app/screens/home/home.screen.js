import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as _ from "lodash";
import 'whatwg-fetch';

//import * as CONFIG from '../../constants/config.constants';

import {CardHighlight, CardFeature, Banner, CardIcon} from 'stateless/stateless.collection';
import {Header, Footer, MenuMobile} from 'components/components.collection';
import {InstaActive} from "services/helper.service";


require('./home.screen.scss');
// import * as path from 'path';
// require('./' + path.dirname(require.main.filename).replace('js', 'scss'));

class HomeScreen extends React.Component {
    componentWillMount() {
        console.log('Home Screen', this);
        InstaActive(this);
    }

    render() {

        return (
            <div screen="home" active={this.active}>
                {console.info('filename', __filename)}

                <div className="container">
                    <div className="row">
                        {/*<div className="col-md-1"></div>*/}
                        <div className="col-md-9">

                            <div className="section"/>


                            <CardFeature image={'https://picsum.photos/1200/1200/?random&gravity=center&224'}
                                         link={'/articles/our-mobile-communications-your-business'}
                                         large={true}
                                         direction={'horizontal'}
                                         title={'Our mobile communications, your business'}
                                         text={'Intelligently connecting your voice and data needs across the world'}
                            />

                            <div className="section"/>
                        
                            <CardHighlight text={'Most Popular'}/>

                            {/*<CardFeature image={'https://picsum.photos/1200/1200/?random&gravity=center&27'}*/}
                                         {/*link={'/'}*/}
                                         {/*large={true}*/}
                                         {/*direction={'horizontal'}*/}
                                         {/*title={'Mobile communications for businesses'}*/}
                                         {/*text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur doloremque fuga illum inventore'}*/}
                            {/*/>*/}

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

                        <div className="col-md-3">

                            <div className="section"/>

                            <CardHighlight text={'Most Popular'}/>

                            <CardFeature image={'https://picsum.photos/1200/1200/?random&gravity=center&25'}
                                         link={'/'}
                                         title={'Mobile communications for businesses'}
                                         text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur doloremque fuga illum inventore'}
                            />

                            <div className="card">
                                <div className="card-image" style={{backgroundImage: `url('https://picsum.photos/1200/1200/?random&gravity=center&4')`}}/>
                            </div>
                        </div>
                    </div>


                </div>
                <Footer></Footer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (!user) SetUrl('/');
    // });

    return state
};

export default connect(mapStateToProps)(HomeScreen)