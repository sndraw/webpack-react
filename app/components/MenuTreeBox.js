/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import { Menu, Icon} from 'antd';
import {Router} from 'react-router';
const SubMenu = Menu.SubMenu;
var MenuTreeBox = React.createClass({
    getInitialState: function () {
        const current = location.hash.slice(1);
        return {
            theme: 'dark',
            current: current ? current : '/',
            isFirstLoad:true,//第一次加载标示，用以判断是否为当前页面重新刷新进行菜单初始化
            openKeys:[]
        };
    },
    handleClick: function (e) {
        window.location.hash = e.key;
        this.setState({
            current: e.key
        });
    },
    onOpenChange:function (e) {
        this.setState({
            isFirstLoad:false,
            openKeys: e
        });
    },
    render: function () {
        let _that=this;
        const menusTree = this.props.menusTree;
        const listItems = menusTree.map(function (menu) {
            menu.url = menu.url ? ('#' + menu.url) : '';
            if (!menu.cmenus && menu.url) {
                return (
                    <Menu.Item  key={menu.url} title={menu.name} >
                        <Icon type="book" />
                        <span className="nav-text">{menu.name}</span>
                    </Menu.Item>
                );
            }
            if (!menu.cmenus && !menu.url) {
                return ('');
            }
            const cmenus = menu.cmenus;
            const subMenus = cmenus.map(function (cmenu) {
                cmenu.url = cmenu.url ? cmenu.url : '';
                if (!cmenu.url) {
                    return ('');
                }
                //重新刷新当前页面，默认打开当前选中子菜单的父菜单
                if(_that.state.current && _that.state.isFirstLoad){
                    if(_that.state.current == cmenu.url){
                        _that.state.openKeys=[cmenu.fid?cmenu.fid:""];
                    }
                }
                return (
                    <Menu.Item  key={cmenu.url} title={cmenu.name}>
                        <Icon type="book" />
                        <span className="nav-text">{cmenu.name}</span>
                    </Menu.Item>
                );
            });
            const IconTitle = React.createClass({
                render: function () {
                    return (
                        <span><Icon type="bars"></Icon><span className="nav-text">{menu.name}</span></span>
                    );
                }
            });
            return (<SubMenu  key={menu.id.toString()} title={<IconTitle/>}>{subMenus}</SubMenu>);
        });

        return (
            <Menu
                className="layout-menu layout-no-flex"
                theme={this.state.theme}
                selectedKeys={[this.state.current]}
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                mode="inline"
                inlineIndent="12"
                onClick={this.handleClick}
            >
                <Menu.Item  key="/" title="首页"><Icon type="home"></Icon><span className="nav-text">首页</span></Menu.Item>
                {listItems}
            </Menu>
        );
    }
});

module.exports = MenuTreeBox;