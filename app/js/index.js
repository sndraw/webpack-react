var React = require('react');
var ReactDOM = require('react-dom');
require('./../css/index.scss');
var AppComponent = require('./../components/indexBox.js');

require.ensure(['zui-css', 'zui-js'], function (require) {
    require('zui-css');
    require('zui-js');
    new $.zui.Messager('这是一个浮动消息。', {
        icon: 'bell' // 定义消息图标
    }).show();
}, 'zui');
ReactDOM.render(<AppComponent />, document.getElementById('content'));


