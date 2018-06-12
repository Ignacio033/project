//React
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {BrowserRouter as Router, Route, Link, Switch, PropsRoute} from 'react-router-dom';

//Libs
import 'whatwg-fetch';

//Reducers
import MenuReducer from 'reducers/menu.reducer';
import ConfigReducer from 'reducers/config.reducer';

//Components
import {Header, Footer, MenuMobile, Error} from 'components/components.collection';

//Screens
import {ComponentsScreen, HomeScreen, SolutionsScreen, ArticleScreen, PageScreen} from 'screens/screens.collection';

require('app.scss');

export const store = createStore(combineReducers({
    Menu  : MenuReducer,
    Config: ConfigReducer,
}));

class App extends React.Component {

    componentWillMount() {

    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="flex">
                        <Header/>
                        <Error/>

                        <div className="screens">
                            <Switch>

                                <Route exact path="/" component={() => <PageScreen pageVanityUrl="home"/>}/>
                                <Route exact path="/page/:pageVanityUrl" component={PageScreen}/>
                                {/*<Route exact path="/solutions" component={SolutionsScreen}/>*/}
                                <Route exact path="/components" component={ComponentsScreen}/>
                                <Route exact path="/articles/:articleId" component={ArticleScreen}/>
                                <Route exact path="/:pageVanityUrl" component={PageScreen}/>
                                {/*<Route exact path="/page/:pageSlug" component={PageScreen}/>*/}

                                {/*<Route component={LostScreen}/>*/}
                            </Switch>
                        </div>
                    </div>

                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));

