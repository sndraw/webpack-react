var React = require('react');
import MenuBox from './../components/menuBox.js';

var IndexBox = React.createClass({
    render: function () {
        return (
                <div className="index-box">
                    <h3>首页-antd</h3>
                    <MenuBox />
                </div>
                );
    }
});

module.exports = IndexBox;