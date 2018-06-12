import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';


import * as _ from "lodash";
import 'whatwg-fetch';

import * as ACTIONS from '../../constants/actions.constants';
import * as CONFIG from '../../constants/config.constants';

import {CardHighlight, CardFeature, Banner, CardIcon} from 'stateless/stateless.collection';
import {Header, Footer, FeaturedArticle, FeaturedArticleGroup} from 'components/components.collection';
import {InstaActive} from "services/helper.service";
import {Dispatch} from "../../services/dispatch.service";

import {API} from "services/api.service";

require('./page.screen.scss');

class PageScreen extends React.Component {
    componentWillMount() {
        console.log('Page Screen', this);
        // InstaActive(this);

        this.loadPage();
    }

    async loadPage(props = this.props) {
        let vanityUrl = this.props['pageVanityUrl'] || _.get(props, "match.params['pageVanityUrl']");

        if (vanityUrl) {
            this.page = await API.loadPageByVanity(vanityUrl);
            console.log('Loaded Page', this.page);
            this.setState({});
        }

    }

    render() {
        let Page       = this.page;
        let Components = _.get(Page, 'components');

        let Elements = {
            'BannerComponent'         : (comp, index) =>
                <Banner title={comp.title} image={CONFIG.HIPPO_HOST + comp.image} key={index}/>,
            'TextComponent'           : (comp, index) =>
                <div className="row">
                    <div className="col-md-1"/>
                    <div className="col-md-10" dangerouslySetInnerHTML={{__html: comp.body}}/>
                </div>,
            'FeaturedArticleComponent': (comp, index) =>
                <FeaturedArticle articleId={comp.article} large={comp.large} direction={comp.direction}/>,
            'FeaturedArticlesGroupComponent': (comp, index) =>
                <FeaturedArticleGroup articleIds={comp.articles.map(article => article.uuid)}/>,
            'CardHighlightComponent': (comp, index) =>
                <CardHighlight text={comp.title}/>,
        };

        return (
            <div screen="page" active={Page ? 'true' : 'false'}>

                <Banner title={_.get(Page, 'title')} text={_.get(Page, 'summary')}/>
                <section/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1"/>
                        <div className="col-md-10">

                            {Components && Components.map((component, index) => Elements[component.type](component))}

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

export default connect(mapStateToProps)(PageScreen)