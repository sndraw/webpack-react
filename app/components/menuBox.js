/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var React = require('react');
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
var MenuBox = React.createClass({
    render: function () {
        return (
                <Menu  mode="inline">
                    <Menu.Item>菜单项</Menu.Item>
                    <SubMenu title="子菜单">
                        <Menu.Item>子菜单项</Menu.Item>
                    </SubMenu>
                </Menu>
                );
    }
});
module.exports = MenuBox;