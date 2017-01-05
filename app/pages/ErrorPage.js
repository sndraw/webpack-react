/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import {Layout, Menu, Breadcrumb, Icon, Alert} from 'antd';
const {Header, Content, Footer, Sider} = Layout;

const Box = React.createClass({
    render: function () {
        return (
                <Content className="layout-content">
                    <div className="layout-container">
                        <Alert message="404页面不存在" type="warning" />
                    </div>
                </Content>
                );
    }
});

module.exports = Box;