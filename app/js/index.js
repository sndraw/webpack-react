var React = require('react');
var ReactDOM = require('react-dom');
require('./../css/index.scss');
var AppComponent = require('./../components/indexBox.js');

require.ensure(['webpack-zepto'], function (require) {
    require('webpack-zepto');
    alert($("body").html());
    ReactDOM.render(<AppComponent />, document.getElementById('content'));
},'zui');

