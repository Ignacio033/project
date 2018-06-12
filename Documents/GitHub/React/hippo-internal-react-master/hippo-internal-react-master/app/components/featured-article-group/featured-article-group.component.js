import React from 'react';
import {connect} from "react-redux";
import {Router, Link} from 'react-router-dom';

import * as ACTIONS from '../../constants/actions.constants';
import {Dispatch} from "../../services/dispatch.service";

import {CardHighlight, CardFeature, Banner, CardIcon} from 'stateless/stateless.collection';
import * as CONFIG from "../../constants/config.constants";
import * as _ from "lodash";

require('./featured-article-group.component.scss');

class FeaturedArticleGroupComponent extends React.Component {

    articles = [];

    componentWillMount() {
        console.info('FeaturedArticleGroupComponent', this.props);

        this.loadArticles();
    }

    loadArticles(props = this.props) {
        let articleIds = this.props['articleIds'];

        if (!articleIds) return;


        articleIds.forEach(async (articleId, index) => {
            let article = (await fetch(`${CONFIG.API}/articles/id/${articleId}`).then(res => res.json()));
            this.articles.push(article);
            this.setState({});
            console.log(`Loaded Article (${index})`, this.article);
        })

    }

    render() {
        console.log('rendering');
        const Props    = this.props;
        const Articles = this.articles;

        return (

            <div>
                <div className="card-list">
                    {Articles.map(article =>
                        <CardFeature image={article.image}
                                     title={article.title}
                                     text={article.summary}
                                     link={'/articles/id/' + article.uuid}
                        />
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(FeaturedArticleGroupComponent)