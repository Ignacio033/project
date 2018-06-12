import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as _ from "lodash";
import 'whatwg-fetch';

//import * as CONFIG from '../../constants/config.constants';

import {CardHighlight, CardFeature, Banner, CardIcon} from 'stateless/stateless.collection';
import {Header, Footer, Tab,ShowJson} from 'components/components.collection';
import {InstaActive} from "services/helper.service";


require('./components.screen.scss');

class ComponentsScreen extends React.Component {
    componentWillMount() {
        console.log('Components Screen', this);
        InstaActive(this);
    }

    render() {

        return (
            <div screen="components" active={this.active}>
                <div className="container">
                    <div className="col-md-1"/>
                    <div className="col-md-10">
                        <div className='components-title'>Banner</div>
                        <Banner title="Banner Title" text="Banner subtitle"/>

                        <div className='components-title'>Page Title</div>
                        <div className="page-title">Page Title</div>


                        <div className='components-title'>Card Highlight</div>
                        <CardHighlight text={'Most Popular'}/>


                        <div className='components-title'>Card Feature</div>
                        <div className="row">
                            <div className="col-md-6">
                                <CardFeature image={'https://picsum.photos/1200/1200/?random&gravity=center&28'}
                                             link={'/'}
                                             title={'Mobile communications for businesses'}
                                             text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur doloremque fuga illum inventore itaque labore magnam magni necessitatibus neque possimus quo quod quos repellat tenetur, voluptatem voluptatibus voluptatum?'}
                                />
                            </div>
                        </div>


                        <div className='components-title'>Card Icon</div>
                        <div className="row">
                            <div className="col-md-4">
                                <CardIcon text={'Small Business'} icon={'fas fa-briefcase'}/>
                            </div>
                        </div>


                        <div className='components-title'>Card Lists</div>
                        <div className="card-list">
                            <CardFeature link={'/'} title={'Mobile communications for businesses'}/>
                            <CardFeature link={'/'} title={'Mobile communications for businesses'}/>
                            {/*<CardFeature link={'/'} title={'Mobile communications for businesses'}/>*/}
                        </div>
                        <div className="card-list">
                            <CardIcon text={'Small Business'} icon={'fas fa-briefcase'}/>
                            <CardIcon text={'Small Business'} icon={'fas fa-briefcase'}/>
                            <CardIcon text={'Small Business'} icon={'fas fa-briefcase'}/>
                        </div>


                        <div className='components-title'>Card Feature Large</div>
                        <CardFeature image={'https://picsum.photos/1200/1200/?random&gravity=center&24'}
                                     link={'/'}
                                     large={true}
                                     title={'Mobile communications for businesses'}
                                     text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci consequuntur doloremque fuga illum inventore itaque labore magnam magni necessitatibus neque possimus quo quod quos repellat tenetur, voluptatem voluptatibus voluptatum?'}
                       
                        />

                        <div className='components-title'>Tab</div>
                        <Tab/>
                       
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

export default connect(mapStateToProps)(ComponentsScreen)