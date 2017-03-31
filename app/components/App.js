import React from 'react';
import ReactDOM from 'react-dom';
import LogoBox from './../components/LogoBox.js';
import MenuTreeBox from './../components/MenuTreeBox.js';
import {Layout, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
import Config from 'config';
require('es6-promise').polyfill();
require('isomorphic-fetch');
const AsideCollapse = React.createClass({

    getInitialState: function () {
        return {
            logoImg: {
                title: "Logo",
                url: ""
            },
            menusList: [],
            menusTree: [],
            collapsed: false,
        };
    },
    componentDidMount: function () {
        const _this = this;
        fetch(Config.apiUrl+Config.urlsEnum.menu, {method: 'GET'}).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (result) {
            if (result && result.code == 0) {
                if (_this.isMounted()) {
                    _this.setState({
                        menusList: result.data.menusList ? result.data.menusList : [],
                        menusTree: result.data.menusTree ? result.data.menusTree : [],
                        logoImg: result.data.logoImg ? result.data.logoImg : {}
                    });
                }
            }
        }).catch(function (e) {

        });
    },
    onCollapseChange: function () {
        this.setState({
            collapsed: !this.state.collapsed
        });
    },
    render: function () {
        return (
                <div className={this.state.collapsed ? "layout-aside layout-full layout-aside-collapse" : "layout-aside layout-full"}>
                    <aside className="layout-sider layout-full-auto">
                        <LogoBox logoImg={this.state.logoImg}/>
                        <MenuTreeBox collapsed={this.state.collapsed} menusTree={this.state.menusTree}  menusList={this.state.menusList}/>
                    </aside>
                    <div className="layout-aside-action" onClick={this.onCollapseChange}>
                        {this.state.collapsed ? <Icon type="right" /> : <Icon type="left" />}
                    </div>
                    <div className="layout-main layout-full-auto">
                        <Header className="layout-header">后台管理系统</Header>
                        {this.props.children}
                        <Footer className="layout-footer">
                            Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
                        </Footer>
                    </div>
                </div>
                );
    }
});

module.exports = AsideCollapse;