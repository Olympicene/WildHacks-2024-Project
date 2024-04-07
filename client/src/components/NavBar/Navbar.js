import React, { useState } from 'react';
import {
  GlobalOutlined,
  HomeOutlined,
  IdcardOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

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
  getItem('Home', '1', <HomeOutlined />),
  getItem('Matches', '2', <WechatOutlined />),
  getItem('Map', '3', <GlobalOutlined />),
  getItem('Profile', '4', <IdcardOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ height: '100vh', overflowY: 'auto'}}>
      <div style={{ position: 'fixed', top: 0, bottom: 0, left: 0, width: '28vh', backgroundColor: '#b4d4ed' }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{ backgroundColor: '#152939', height: '100%', fontFamily: 'Poppins', fontSize: 20}}
        />
      </div>
      <div style={{ marginLeft: '20vh' }}> 

      </div>
    </div>
  );
};

export default App;
