import React, { useState } from 'react';
import {
  GlobalOutlined,
  HomeOutlined,
  IdcardOutlined,
  WechatOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
}from '@ant-design/icons';
import { Button, Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Home', '1', <HomeOutlined style={{ fontSize: '100%'}} />),
  getItem('Matches', '2', <WechatOutlined  style={{ fontSize: '100%'}}/>),
  getItem('Map', '3', <GlobalOutlined  style={{ fontSize: '100%'}}/>),
  getItem('Profile', '4', <IdcardOutlined  style={{ fontSize: '100%'}}/>),
];

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ height: '100vh', overflowY: 'auto'}}>
      <div style={{ position: 'fixed', top: 0, bottom: 0, left: 0, width: '28vh'}}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 1,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{ backgroundColor: '#152939', height: '100%', fontFamily: 'Poppins', fontSize: "2rem", padding: "1rem"}}
        />
      </div>
    </div>
  );
};

export default Navbar;
