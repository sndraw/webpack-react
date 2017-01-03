import React from 'react';
import ReactDOM from 'react-dom';
import LogoBox from './../components/LogoBox.js';
import MenuTreeBox from './../components/MenuTreeBox.js';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const AsideCollapse = React.createClass({

    getInitialState: function () {
        return {
            logoImg: {
                title: "Logo",
                url: ""
            },
            menusList: [],
            menusTree: [],
            collapse: false,
        };
    },
    componentDidMount: function () {
        if (this.isMounted()) {
            this.setState({
                menusTree: [
                    {
                        "id": "01",
                        "name": "前台管理",
                        "url": "",
                        "cmenus": [
                            {
                                "id": "0101",
                                "name": "微信管理",
                                "url": "/wechat",
                            },
                            {
                                "id": "0102",
                                "name": "文章管理",
                                "url": "/article",
                            }
                        ]
                    },
                ],
                logoImg: {
                    title: "Logo",
                    url: ""
                }
            });
        }
    },
    onCollapseChange: function () {
        this.setState({
            collapse: !this.state.collapse
        });
    },
    render: function () {
        const collapse = this.state.collapse;
        return (
                <div className={collapse ? "layout-aside layout-aside-collapse" : "layout-aside"}>
                    <aside className="layout-sider">
                        <LogoBox logoImg={this.state.logoImg}/>
                        <MenuTreeBox collapse={this.state.collapse} menusTree={this.state.menusTree}  menusList={this.state.menusList}/>
                    </aside>
                    <div className="layout-aside-action" onClick={this.onCollapseChange}>
                        {collapse ? <Icon type="right" /> : <Icon type="left" />}
                    </div>
                    <div className="layout-main">
                        <div className="layout-header"></div>
                        {this.props.children}
                        <div className="layout-footer">
                            Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
                        </div>
                    </div>
                </div>
                );
    }
});

module.exports = AsideCollapse;