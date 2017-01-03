/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import { Breadcrumb } from 'antd';

var HomeBox = React.createClass({
    render: function () {
        return (
                <div className="layout-container">
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="layout-content">
                        这是【首页】
                    </div>
                </div>
                );
    }
});

module.exports = HomeBox;