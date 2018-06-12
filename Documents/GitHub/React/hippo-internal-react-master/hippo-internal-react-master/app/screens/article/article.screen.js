import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as _ from "lodash";
import 'whatwg-fetch';

//import * as CONFIG from '../../constants/config.constants';

import {CardHighlight, CardFeature, Banner, CardIcon} from 'stateless/stateless.collection';
import {Header, Footer} from 'components/components.collection';
import {InstaActive} from "services/helper.service";

// require('./' + __filename.replace('js', 'scss'));
// console.log( );
// require('./' + __filename.split('/').pop().replace('js', 'scss'));

class ArticleScreen extends React.Component {
    componentWillMount() {
        console.log('Article Screen', this);
        InstaActive(this);
    }

    render() {

        return (
            <div screen="article" active={this.active}>

                <Banner image={'https://picsum.photos/1200/1200/?random&gravity=center&224'}
                        title="Our mobile communications, your business"
                        text={'Intelligently connecting your voice and data needs across the world'}/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1"/>
                        <div className="col-md-10">

                            <div className="section"/>


                            <CardHighlight text={'Overview'}/>
                            <div className="row">
                                <div className="col-md-1"/>
                                <div className="col-md-10">
                                    <p className="article-text">
                                        Our mobile network, connections and services are extensive, and we will support your business wherever you are or want to be. We provide secure, reliable, mobile connectivity, so all your employees get a consistently excellent experience. We have significant presence and partnerships across Europe, Africa, Asia and the US.

                                        As the world's largest mobile service provider, mobile is at the heart of everything we do.
                                    </p>
                                </div>
                            </div>


                            <CardHighlight text={'Mobile voice and data'}/>

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
                            </div>

                            <div className="card-list">
                                <CardFeature image={'https://picsum.photos/1200/1200/?random&gravity=center&247'}
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

export default connect(mapStateToProps)(ArticleScreen)