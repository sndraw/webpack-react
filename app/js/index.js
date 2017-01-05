var React = require('react');
var ReactDOM = require('react-dom');
require('./../css/index.scss');
import {Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';
import App from './../components/App.js';
import IndexPage from './../pages/IndexPage.js';
import WechatPage from './../pages/WechatPage.js';
import ArticlePage from './../pages/ArticlePage.js';
import ErrorPage from './../pages/ErrorPage.js';
const  RouterBox = React.createClass({
    render: function () {
        return (
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={IndexPage} />
                        <Route path="/wechat" component={WechatPage}></Route>
                        <Route path="/article" component={ArticlePage}></Route>
                        <Route path="*" component={ErrorPage}></Route>
                    </Route>
                </Router>
                );
    }
});

ReactDOM.render(<RouterBox />, document.getElementById('content'));


