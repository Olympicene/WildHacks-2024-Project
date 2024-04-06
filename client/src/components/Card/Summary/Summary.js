import React from 'react';
import { Card } from 'antd';
import womanimage from "../../../assets/woman.svg";

const SummaryCard = ({user}) => {
  require('./Summary.css');

  return (
    <div style={{marginLeft:"2rem", marginRight:"2rem"}}>
        <Card
          size="small"
          bordered={false}
          style={{
            width: 300,
            background:"#bebbcc",
            marginTop: "2.5rem"
          }}
          hoverable 
        >
            <img className="match-img"src={womanimage}></img>
            <p className="match-title">{user.name}, {user.age} </p>
            <p className="match-text">{user.email}</p>
        </Card>
    </div>
  );
};

export default SummaryCard;
