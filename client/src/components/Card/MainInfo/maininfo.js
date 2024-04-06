import React from 'react';
import { Card } from 'antd';

const MainInfo = ({details}) => {
  require('./MainInfo.css');

  return (
    <Card
      size="small"
      bordered={false}
      style={{
        width: 300,
        backgroundColor:"#e9e9e9"
      }}
      hoverable 
    >
      <div className='main-div'>
        <div className='main-div'>
        <p className="info-title">{details.name}, {details.age} </p>
        </div>
        <p className="info-text">{details.university}</p>
        <p className="info-text">looking for {details.roomates} roomates</p>
      </div>
    </Card>
  );
};

export default MainInfo;
