import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as ACTIONS from '../../constants/actions.constants';
import {Dispatch} from "../../services/dispatch.service";

import {CardHighlight, CardFeature, Banner, CardIcon} from 'stateless/stateless.collection';
import * as CONFIG from "../../constants/config.constants";
import * as _ from "lodash";

require('./featured-article.component.scss');

class FeaturedArticleComponent extends React.Component {

    componentWillMount() {
        console.info('FeaturedArticleComponent', this.props);

        this.loadArticle();
    }

    async loadArticle(props = this.props) {
        let articleId = this.props['articleId'];

        if (articleId) {
            this.article = (await fetch(`${CONFIG.API}/articles/id/${articleId}`).then(res => res.json()));
            console.log('Loaded Article', this.article);
            this.setState({});
        }
    }

    render() {
        const Props   = this.props;
        const Article = this.article;

        return (
            Article
                ? <CardFeature image={Article.image}
                               direction={Props.direction}
                               large={Props.large}
                               title={Article.title}
                               text={Article.summary}
                               link={'/articles/id/' + Article.uuid}
                />
                : <div/>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(FeaturedArticleComponent)