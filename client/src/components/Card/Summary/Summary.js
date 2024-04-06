import React from 'react';
import { Card } from 'antd';
import womanimage from "../../../assets/woman.svg";

const SummaryCard = ({user}) => {
  require('./Summary.css');

  return (
    <Card
      size="small"
      bordered={false}
      style={{
        width: 300,
        background:"#bebbcc"
      }}
      hoverable 
    >
        <div>
            <img className="match-img"src={womanimage}></img>
        </div>
        <p className="match-title">{user.name}, {user.age} </p>
        <p className="match-text">{user.email}</p>
    </Card>
  );
};

export default SummaryCard;
