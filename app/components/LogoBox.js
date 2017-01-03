/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';

var LogoBox = React.createClass({
    render: function () {
        const img = this.props.logoImg ? this.props.logoImg : {};
        return (
                <div className="layout-logo">
                    <img className="logo-img" src={img.url ? img.url : ""} alt={img.title ? img.title : ""} />
                </div>
                );
    }
});

module.exports = LogoBox;