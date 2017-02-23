/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import {Layout, Menu, Breadcrumb, Icon, Alert, Table} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const dataSource = [{
    key: '1',
    title: '什么是前端？',
    content: "前端：针对浏览器的开发，代码在浏览器运行",
    time:"2017-01-01 11:00:00"
}, {
    key: '2',
    title: '什么是前端工程师？',
    content: '会用html和css制作网页？能简单使用js写网页特效？熟练使用js封装库搭建网站？也许不少人会这样回答，因为在这些人眼中，前端工程师就是一个根据网页设计稿切图制作网页的工种。'
    + '我们不否定这种观点，毕竟这些人说的没错，前端工程师本来就是跟网页打交道，所以有另外一个名字叫做“网页制作师”，只不过……'
    + '只不过这些人混淆了一个概念，那就是“网页制作师”只是前端工程师的前身。'
    + '在网站诞生之初，网页布局很简单，基本上就 table + tr + td 的组合，因为涉及到的知识点不多，很容易完成，所以网页制作的活往往都是由设计网页的网页设计师一并完成。'
    + '然而随着互联网的发展，网站个性化需求暴增，网页特效和页面交互的复杂度大幅增加，一般的网页设计师很难同时兼顾设计和制作，于是逐渐分离出“网页制作师”这个职位。'
    + '再之后，由于各种原因，网站架构不断变化，前端开发所占比重进一步增加，“网页制作师”也从可有可无的角色，逐渐发展成为团队中不可或缺的“前端工程师”。',
    time:"2017-01-01 12:00:00"
}];

const columns = [{
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    width: 150,
}, {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
    width: 150,
}];

const Box = React.createClass({
    render: function () {
        return (
            <Content className="layout-content">
                <Breadcrumb className="layout-container">
                    <Breadcrumb.Item>前台管理</Breadcrumb.Item>
                    <Breadcrumb.Item>文章管理</Breadcrumb.Item>
                </Breadcrumb>
                <Alert message="欢迎访问【文章管理】" type="info"/>
                <Table dataSource={dataSource} columns={columns}   expandedRowRender={record =><p>{ record.content }</p>}/>
            </Content>
        );
    }
});

module.exports = Box;