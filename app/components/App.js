import React from 'react';
import ReactDOM from 'react-dom';
import LogoBox from './../components/LogoBox.js';
import MenuTreeBox from './../components/MenuTreeBox.js';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const source = {
    getMenus: '/data/menus.json'
};
const AsideCollapse = React.createClass({

    getInitialState: function () {
        return {
            logoImg: {
                title: "Logo",
                url: ""
            },
            menusTree: [],
            collapse: false,
        };
    },
    componentDidMount: function () {
        const _this = this;
        fetch(source.getMenus, {method: 'GET'}).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (result) {
            if (result && result.code == 1) {
                if (_this.isMounted()) {
                    _this.setState({
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