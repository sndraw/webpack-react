var React = require('react');
var ReactDOM = require('react-dom');
require('./../css/index.scss');
import {Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';
import App from './../components/App.js';
import HomeBox from './../components/HomeBox.js';
import WechatBox from './../components/WechatBox.js';
import ArticleBox from './../components/ArticleBox.js';
var RouterBox = React.createClass({
    render: function () {
        return (
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={HomeBox} />
                        <Route path="/wechat" component={WechatBox}></Route>
                        <Route path="/article" component={ArticleBox}></Route>
                    </Route>
                </Router>
                );
    }
});

ReactDOM.render(<RouterBox />, document.getElementById('content'));


