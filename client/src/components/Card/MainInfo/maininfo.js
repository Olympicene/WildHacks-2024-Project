import React from 'react';
import { Card } from 'antd';

const MainInfo = ({details}) => {
  require('./MainInfo.css');

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
      <p className="info-title">{details.name}, {details.age} </p>
      <p className="info-text">{details.university}</p>
      <p className="info-text">looking for {details.roomates} roomates</p>
    </Card>
  );
};

export default MainInfo;
