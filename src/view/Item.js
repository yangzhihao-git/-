import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
export default class Item extends Component {
    render() {
        return (
            <div className='left-menu'>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>用户管理</span>
                            </span>
                        }
                    >

                        <Menu.Item key="1">所有用户</Menu.Item>

                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>小组管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">小组列表</Menu.Item>
                        <Menu.Item key="6">成员列表</Menu.Item>

                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
