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
                    <Breadcrumb className="layout-container">
                        <Breadcrumb.Item>前台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>文章管理</Breadcrumb.Item>
                    </Breadcrumb>
                    <Alert message="欢迎访问【文章管理】" type="info" />
                </Content>
                );
    }
});

module.exports = Box;