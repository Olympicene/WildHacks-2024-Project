import React from 'react';
import { Card } from 'antd';

const MainInfo2 = () => {
  require('./Summary.css');

  return (
    <Card
      className='info-title'
      size="small"
      bordered={false}
      style={{
        width: 300
      }}
      hoverable 
    >
    </Card>
  );
};

export default MainInfo2;
