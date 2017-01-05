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
            current: current ? current : '/'
        };
    },
    handleClick: function (e) {
        window.location.hash = e.key;
        this.setState({
            current: e.key
        });
    },
//    handleOpen: function (openKeys) {
//        this.setState({
//            openKeys: openKeys
//        });
//    },
//    handleSelect: function (ops) {
//    },
    render: function () {
        const menusTree = this.props.menusTree;
        const collapsed = this.props.collapsed;
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